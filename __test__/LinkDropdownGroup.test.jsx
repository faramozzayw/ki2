import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { LinkDropdownGroup } from "./../src/components";

import { menu2 } from "./mock";

test(`Checking "LinkDropdownGroup" for the correct opening and closing`, async () => {
	const props = menu2[2];

	const { container } = render(<LinkDropdownGroup {...props} />);

	fireEvent.click(container.firstChild);

	expect(
		[...container.firstChild.classList].includes("is-active"),
	).toBeTruthy();

	fireEvent.click(container.firstChild);

	expect([...container.firstChild.classList].includes("is-active")).toBeFalsy();
});
