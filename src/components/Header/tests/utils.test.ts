import {
	menuConfigToFlat,
	createMenu,
	findMetaByPath,
	process,
	generateNavigator,
} from "./../utils";

import { menu } from "./mock";

import { PageConfig } from "./../../../types";

describe("test proccess function", () => {
	it("first test", () => {
		const processedMenu = process(menu);

		expect(processedMenu[0].path).toEqual("/main");
		expect(processedMenu[1].path).toEqual("/history");

		expect(processedMenu[2].child![0].path).toEqual("/abiturient/memo");
		expect(processedMenu[2].child![1].path).toEqual("/abiturient/invite_rules");
		expect(processedMenu[2].child![2].path).toEqual("/abiturient/exams");
	});
});
