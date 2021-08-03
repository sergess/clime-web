import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, options);

export * from '@testing-library/react';

export { customRender as render };
