import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have Dashboard option', () => {
      render(<Main>{null}</Main>);

      const navbar = screen.queryByText('Dashboard');

      expect(navbar).toBeInTheDocument();
    });
  });
});
