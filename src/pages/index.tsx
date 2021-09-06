import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard } from 'src/ui/organisms';

export default function Home(): ReactElement {
  return (
    <div>
      <main>
        <TodayCard
          locationExact
          location="Minneapolis, MN"
          time="7:15pm"
          weatherStateId="smk:md"
          currentTemperature={89}
          feelsLikeTemperature={94}
          minTemperature={76}
          maxTemperature={89}
          stateText="Moderate or heavy rain area with thunder"
          windDegree={270}
          windSpeed={25}
          windSpeedUnit="ms"
          precipitationChance={50}
          precipitation={3.44}
          precipitationUnit="mm"
          pressure={30.01}
          pressureUnit="in"
          humidity={80}
          uvIndex={3}
        />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(!!locale && (await serverSideTranslations(locale, ['today-card']))),
  },
});
