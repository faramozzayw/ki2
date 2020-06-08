import React from "react";
import { graphql } from "gatsby";

import RawMarkdown from "./RawMarkdown";

import Layout from "./../layouts/Layout";

const RawMarkdownPage = ({ location, data }) => {
	const { markdownRemark } = data;
	const { html } = markdownRemark;

	return (
		<Layout location={location}>
			<RawMarkdown html={html} />
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(fileAbsolutePath: 
			{ regex: $path }
		) {
			html
		}
	}
`;

export default RawMarkdownPage;