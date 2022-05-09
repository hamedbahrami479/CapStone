import React from 'react';
import { render, screen } from '@testing-library/react';
import DropDown from './DropDown'

describe("Test for DropDown Component", () => {
    it("snapshot DropDown component", () => {
        const {asFragment} = render(<DropDown/>);
        expect(asFragment(DropDown)).toMatchSnapshot();
});

it("should have the text as defined in the DropDown Component", () => {
    const {SelectorMatcherOptions} = render(<DropDown/>)
    expect(screen.getByText(/Plastic Transparent/i)).toHaveTextContent('Plastic Transparent');
    })
});