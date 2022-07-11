## Key technologies

Before proceeding, make sure you have at least basic knowledge of the following technologies:
  - [Typescript](https://www.typescriptlang.org/docs/);
  - [React](https://reactjs.org/docs/getting-started.html);
  - [Next.js](https://nextjs.org/docs).

If not, please have a look at docs first.

## Getting Started

*Notice: **yarn** will be used in all examples, but you can use any package manager you like*

First, set up pre-commit hooks by running:

```bash
yarn prepare
```

Then you'll need to create `.env` file in the root of the project and fill it in.
You can ask guys from development or devops team to provide you with environment variables.

After that you're ready to install project's dependencies:

```bash
yarn install
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now you can start editing pages and they'll be auto-updated after editing.

If you need to create production build, run:

```bash
yarn build
```

To run it, simply execute:

```bash
yarn start
```

To check bundle size you can execute the following command:

```bash
yarn analyze-bundle-size
```

## Project's structure

Next.js is an isomorphic framework for developing server-side applications.
It runs both on client and server and sometimes it might be hard to distinguish where is client or server code.
It could lead for example to exposing of server code to the client bundle.

To avoid this we decided to split the code on 3 parts: `client`, `common` and `server`.
As the name implies, the client code is located in the `client` folder, server code is in `server` and `common` folder is for reusable code which could be exposed to client, but also is used on server-side.

The main idea here is to visually separate server code and prevent it from importing in `common` or `client` parts of the application.

All other parts of the application are pretty standard for every Next.js application. I mean `pages` and `pages/api` conventions. More info could be found in [Next.js Documentation](https://nextjs.org/docs)

### Server

Except for page rendering, our server has a few other primary purposes:
  - hiding secret keys;
  - proxying requests to different APIs.

In most cases it's working in a pretty straightforward way. It receives a page request or api request and it tries to proxy it further, get result, prepare 
the data and return either a rendered page or an api response.

Most commonly used pieces of code are combined together as `middlewares` in purpose of re-usability in future. They could be used across different pages or api handlers. You can find them under `server/middlewares` folder.

All proxy services are located in `server/services` folder. Typically, it's just a class with methods pointing to the certain 3-rd party API endpoints, which should request necessary data and prepare it.

The most interesting is ApiV3 service. It's a base service for contacting weatherlive API v3. It contains all the logic for parcing user-agent, generating signatures and adding it as headers.
To start using some of the API v3 services you need just to create a new service, extend ApiV3 and make a call using `callAsync` function.

### Common

Typically, `common` folder contains pieces of the code shared between client and server parts of the application.
Such as constants, types and utils.

### Client

The application's design system is built on top of [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.
It fits nicely into the concept of Next.js applications.
The main building blocks are atoms, using them we can create molecules and organisms. Different reusable layouts could be set up as templates. Finally, in pages we compose all these parts together.

[Chakra UI](https://chakra-ui.com/getting-started) is the main components library.
The application's theme customization is taking place in `client/theme`.
Detailed guide on how to customize and grow the application could be found [here](https://chakra-ui.com/docs/styled-system/customize-theme).

For client state management purposes [jotai](https://jotai.org/docs/introduction) and react context API are used.

For server caching state we use [swr](https://swr.vercel.app/docs/getting-started).

## Tests

[jest](https://jestjs.io/docs/getting-started) config and mocks could be found in the root of the project.
Test files are usually located in `__tests__` folders near the module which should be tested.

To run tests simply execute:

```bash
yarn test
```

## i18n

[next-i18next](https://github.com/isaachinman/next-i18next) library is used for localization purposes.
For more detailed description and examples, please read this [doc](https://github.com/isaachinman/next-i18next#serversidetranslations)

To get RTL system working, we need to write RTL-aware styles, e.g. 'paddingStart' instead of 'paddingLeft', 'marginEnd' instead of 'marginRight', etc.
More info you can find [here](https://chakra-ui.com/docs/features/rtl-support#using-rtl-aware-style-props).

## Color modes

Chakra UI supports color modes out of the box.

[useColorModeValue](https://chakra-ui.com/docs/features/color-mode#usecolormodevalue) hook helps to provide color mode based styles into components in declarative, flexible way.

Another way how color mode styles could be defined, is to change it in the theme config. 'colorMode' is passed as a function argument when theme is extended.

Example:

```
const YourComponent = {
  baseStyle: ({ colorMode }: ThemeComponentProps): StyleProps => ({
    background: colorMode === 'dark' ? 'gray.400' : 'white',
    ...etc
  }),
  ...etc
};
```

Full documantation on color modes you can find [here](https://chakra-ui.com/docs/features/color-mode).

## Source-control branching model

[Trunk-based development model](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) is used.
Trunk branch is `master`.

## Deploy

Each pull request merged to `master` triggers a new build. If a build is assembled successfully, it would be deployed on stage environment.
Deploy to production should be made manually through gitlab interface.

More info regarding CI/CD settings could be found in `.gitlab-ci.yml` or you can ask devops team about it.

Each environment (staging, production, etc) has it's own `.env` file.

Logs from server are collected in Cloud Run console. You can ask devops team to provide you with permissions if you need to have a look at logs.

In case there are issues on server side, Next.js has it's own global error handling mechanism. So, it should catch an error and show 500 page.
If for some reason Next.js fails to catch an error and server is crushed, supervisor in Cloud Run should restart the server.

## Cache

Cloudflare is used as caching layer in front of the server.

We use standard `Cache-Control` headers to allow caching.

Current config for the majority of static files could be found in `next.config.js`.
Dynamic pages aren't cached usually, in some cases they could be cached by setting `Cache-Control` directly in page's code.

After each deploy cloudflare's cache is purged.

## Releases

To automate release workflow we use [semantic-release](https://github.com/semantic-release/semantic-release) package.
It'll parse and analyze each commit message, automatically generate changelogs, update git tags, etc.

You need to use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec to give `semantic-release` an oportunity to analyze commit messages' meaninigs and fill in changelog in a correct way.

Conventional commit linter is attached as a pre-commit hook.

Example of a conventional commit message: `type(optional_scope): [ticket_number] description`
