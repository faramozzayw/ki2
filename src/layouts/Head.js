import React from "react";

import { Helmet } from "react-helmet";

import { menu } from "./../data/navbar.json";

import { findTitleByPath } from "./../components"; 

const Head = ({ location }) => {
	const subtitle = findTitleByPath(menu)(location);
	
	return (
		<Helmet>
			<title>Київський авіаційний технікум | {location} </title>
			<meta charset="utf-8" />
			<meta name="description" content="Київський авіаційний технікум" />
			<meta name="keywords" content="Київський авіаційний технікум, Київський авіаційний технікум сайт, КАТ, КіАТ" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Helmet>
	)
}

export default Head;