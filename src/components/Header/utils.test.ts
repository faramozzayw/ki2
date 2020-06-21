import {
	menuConfigToFlat,
	createMenu,
	findMetaByPath,
	process,
	generateNavigator,
} from ".//utils";

export const menu = [
	{
		path: "main",
		title: "Головна",
		icon_name: "fa fa-home fa-2x",
		child: null,
	},
	{
		path: "history",
		title: "Історія",
		icon_name: "fa fa-book fa-2x",
		child: null,
	},
	{
		path: "abiturient",
		title: "Абітурієнту",
		icon_name: "fa fa-users fa-2x",
		child: [
			{
				path: "memo",
				title: "Пам'ятка абітурієнту",
				icon_name: null,
				child: null,
			},
			{
				path: "invite_rules",
				title: "Правила прийому",
				icon_name: null,
				child: null,
			},
			{
				path: "exams",
				title: "Вступні іспити",
				icon_name: null,
				child: null,
			},
		],
	},
];

import { PageConfig } from "./../../types";

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
