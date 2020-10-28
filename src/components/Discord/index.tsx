import React from "react";
import useDarkMode from "use-dark-mode";

export default () => {
	const { value } = useDarkMode();

	const widgetTheme = value ? "dark" : "light";
	const widgetSource = `https://discord.com/widget?id=703600269555925013&theme=${widgetTheme}`;

	return (
		<iframe
			src={widgetSource}
			width="450"
			height="500"
			allowTransparency={true}
			frameBorder="0"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		></iframe>
	);
};
