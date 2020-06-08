import React from "react";
import { Container, Title, Content, Box } from "bloomer";

import { useStaticQuery, graphql } from "gatsby";

const RawMarkdown = ({ markdown }) => {
	return (
			<Container>
				<Box>
					<Content>
						<div dangerouslySetInnerHTML={{ __html: markdown }} />
					</Content>
				</Box>
			</Container>
	);
}

export default RawMarkdown;
