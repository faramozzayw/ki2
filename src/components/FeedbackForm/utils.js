import { setDescription } from "./store/action";

export const maxTitleLen = 100;

export const createIssue = async ({ title, description, type }) => {
	const repo = "ki2";
	const owner = "faramozzayw";

	const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

	const token = process.env.REACT_APP_AUTH_TOKEN;
	console.log(token ? "Token exist" : "wtf");

	return fetch(null);
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
