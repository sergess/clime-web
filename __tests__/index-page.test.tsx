// [TODO] It's just an example. Delete after first real test is added
import IndexPage from 'pages';
import { render, screen } from '__tests__/utils/common.util';

describe('Index page', () => {
  it('should render', () => {
    render(<IndexPage />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });
});
