//Button.test.js

import React from 'react';
import SearchButton from './button';
import {render, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Test for Button Component", () => {
    it("snapshot button component", () => {
        const {asFragment} = render(<SearchButton/>);
        expect(asFragment(SearchButton)).toMatchSnapshot();
});

it("should render button component", () => {
const {getByText} = render(<SearchButton/>)
expect(getByText("Search")).toBeInTheDocument();
});
});