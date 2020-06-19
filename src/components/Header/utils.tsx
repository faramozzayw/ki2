import React from "react";

import NavbarLink from "./../NavbarLink";
import LinkDropdownGroup from "./../LinkDropdownGroup";

import { PageMetadata, PageConfig } from "./../../types";

export const process = (array: PageConfig[]): PageConfig[] => {
	return array.map(item => {
		const newItem = { ...item };

		const { child } = newItem;
		const parentPath = newItem.path;

		if (Array.isArray(child)) {
			newItem.child = child.map(({ path, ...other }) => {
				const newPath = parentPath.concat(`/${path}`);

				return {
					path: newPath,
					...other,
				};
			});

			return {
				...newItem,
				child: process(newItem.child),
			};
		} else {
			return {
				...newItem,
				path: `/${parentPath}`,
			};
		}
	});
};

export const generateNavigator = (array: any[]): any => {
	return array.map(({ path, title, icon_name, child }) => {
		if (Array.isArray(child)) {
			return (
				<LinkDropdownGroup
					path={path}
					title={title}
					icon_name={icon_name}
					key={path}
				>
					{generateNavigator(child)}
				</LinkDropdownGroup>
			);
		} else {
			return (
				<NavbarLink
					path={path}
					title={title}
					icon_name={icon_name}
					key={path}
				/>
			);
		}
	});
};

export const menuConfigToFlat = (array: PageConfig[]): PageConfig[] => {
	// @ts-ignore // problem with flatMap
	return array.flatMap((item: PageConfig) => {
		if (Array.isArray(item.child)) {
			return menuConfigToFlat(item.child);
		} else {
			return { ...item };
		}
	});
};

export const createMenu = (config: PageConfig[]) =>
	generateNavigator(process(config));

export const findMetaByPath = (array: PageConfig[]) => (
	searchPath: string,
): PageConfig | undefined => {
	return menuConfigToFlat(array).find(({ path }) => path === searchPath);
};
