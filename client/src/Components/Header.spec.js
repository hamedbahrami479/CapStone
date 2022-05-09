import React from 'react';
import { render, screen } from '@testing-library/react';
import HGIB from './Header';
import HgibStylesOne from './Header';
import HgibStylesTwo from './Header';

describe('Test for Header Component HGIB', () => {
  it('snapshot header component', () => {
    const { asFragment } = render(<HGIB />);
    expect(asFragment(<HGIB />)).toMatchSnapshot();
  });

  it('snapshots p tag in Header', () => {
    const { asFragment } = render(<HgibStylesOne />);
    expect(asFragment(<HgibStylesOne />)).toMatchSnapshot();

  }); it('snapshot second p tag in header', () => {
    const { asFragment } = render(<HgibStylesTwo />);
    expect(asFragment(<HgibStylesTwo />)).toMatchSnapshot();
  });
 /* it('should render header component with the right text', () => {
    const { getByText } = render(<HgibStylesTwo />);
    expect(getByText("Give It Back").toBeInTheDocument();
  });

  it('should render header component with the right text', () => {
    const { getByText } = render(<HgibStylesTwo />);
    expect(getByText(<HgibStylesTwo />)).not.toBeNull();
  });

 /* it('alternative way using toBeInTheDocument jest-dom utility library', () => {
    const { getByText } = render(<HGIB />);
    expect(getbyText).toBeInTheDocument();
  });*/
});
