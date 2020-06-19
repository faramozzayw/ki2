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
