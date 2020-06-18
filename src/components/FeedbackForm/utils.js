import { setDescription } from "./store/action";

export const maxTitleLen = 100;

export const createIssue = ({ title, description, type }) => {
	const repo = "ki2";
	const owner = "faramozzayw";

	const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

	const token = process.env.REACT_APP_AUTH_TOKEN;

	fetch(process.env.REACT_APP_AUTH_TOKEN)
		.then(r => r.json())
		.then(console.log);

	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			title: title,
			body: description,
			labels: [type],
		}),
	});
};
