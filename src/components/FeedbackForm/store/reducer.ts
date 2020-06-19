import { initialState } from "./formData";

import {
	setDescription,
	setTitle,
	setError,
	setType,
	setResponseStatusOK,
	toggleIsLoading,
	reset,
} from "./action";

import { maxTitleLen } from "./../utils";

import { ReducerAction } from "./../../../types";
import { FeedbackFormState, ResponseStatusOK } from "./formData";

export const reducer = (
	state: FeedbackFormState = initialState,
	action: ReducerAction,
) => {
	switch (action.type) {
		case setTitle: {
			const title = action.payload;

			return {
				...state,
				title,
				errorStatus: state.errorStatus || maxTitleLen - title.length < 0,
			};
		}
		case setDescription:
			return {
				...state,
				description: action.payload,
			};
		case setType:
			return {
				...state,
				type: action.payload,
			};
		case setResponseStatusOK: {
			const responseStatusOK: ResponseStatusOK = action.payload;

			return {
				...state,
				responseStatusOK,
			};
		}
		case toggleIsLoading:
			return {
				...state,
				isLoading: action.payload,
			};
		case reset:
			return { ...initialState };
		default:
			throw new Error();
	}
};
