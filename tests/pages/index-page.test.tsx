// [TODO] It's just an example. Delete after first real test is added
import IndexPage from 'src/pages';
import { render, screen } from 'tests/test-utils';

describe('Index page', () => {
  it('should render', () => {
    render(<IndexPage />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });
});
