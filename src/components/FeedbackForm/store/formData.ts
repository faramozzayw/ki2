export type ResponseStatusOK = boolean | null;

export interface FeedbackFormState {
	title: string;
	description: string;
	errorStatus: boolean;
	type: string;
	responseStatusOK: ResponseStatusOK;
	isLoading: boolean;
}

export const initialState: FeedbackFormState = {
	title: "",
	description: "",
	errorStatus: false,
	type: "bug",
	responseStatusOK: null,
	isLoading: false,
};
