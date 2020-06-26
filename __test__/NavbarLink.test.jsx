import React from "react";
import { render } from "@testing-library/react";

import { NavbarLink } from "./../src/components";

describe("test custom NavbarLink component", () => {
	test("Displays the correct title", () => {
		const props = {
			path: "/main",
			title: "Головна",
			icon_name: null,
		};

		const NavbarLink1 = () => <NavbarLink {...props}></NavbarLink>;
		const { getByText } = render(<NavbarLink1 />);

		expect(getByText(props.title)).toBeInTheDocument();
	});
});
