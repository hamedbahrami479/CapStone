import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';

describe('Test for DropDown Component', () => {
  it('snapshot DropDown component', () => {
    const { asFragment } = render(<ResultBox />);
    expect(asFragment(ResultBox)).toMatchSnapshot();
  });
});
