//Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import HgibStylesOne from './Header';
import HgibStylesTwo from './Header';

describe('Test for Header Component HGIB', () => {
  it('snapshot header component', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment(<Header />)).toMatchSnapshot();
  });

  it('snapshot p tag in Header', () => {
    const { asFragment } = render(<HgibStylesOne />);
    expect(asFragment(<HgibStylesOne />)).toMatchSnapshot();
  });
  it('snapshot second p tag in header', () => {
    const { asFragment } = render(<HgibStylesTwo />);
    expect(asFragment(<HgibStylesTwo />)).toMatchSnapshot();
  });
});
