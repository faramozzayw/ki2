import React from "react";

import { Title } from "bloomer";

import Layout from "./../layouts/Layout";

const ComingSoonPage = ({ location }) => (
	<Layout location={location}>
		<Title isSize={2} tag="h2">Ця сторінка на даний момент незаповнена</Title>
		<Title isSize={4} tag="h4">Але це не на довго</Title>
	</Layout>
);

export default ComingSoonPage;