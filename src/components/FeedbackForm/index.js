import React, { useState, useEffect } from "react";
import {
	Modal,
	ModalBackground,
	ModalContent,
	ModalCard,
	ModalCardBody,
	Button,
	Field,
	Label,
	Control,
	Input,
	TextArea,
	Radio,
	Help,
} from "bloomer";

import FeedbackFormHeader from "./FeedbackFormHeader";
import FeedbackFormFooter from "./FeedbackFormFooter";

const FeedbackForm = () => {
	const [modalStatus, toggleModal] = useState(false);
	const [errorStatus, setError] = useState(false);

	const [title, setTitle] = useState("");

	useEffect(() => {
		const titleOverlen = maxTitleLen - title.length < 0;

		setError(titleOverlen);
	}, [title]);

	const changeTitle = e => {
		const { value } = e.target;

		setTitle(value);
	};

	const submitHandler = e => {
		e.preventDefault();
		console.log("send!");
	};

	const openModal = () => toggleModal(true);
	const closeModal = () => toggleModal(false);

	const maxTitleLen = 100;
	const currentLen = maxTitleLen - title.length;

	return (
		<>
			<Button onClick={openModal}>Знайшли помилку?</Button>
			<Modal isActive={modalStatus} style={{ textAlign: "left" }}>
				<ModalBackground />
				<ModalCard>
					<FeedbackFormHeader closeModal={closeModal} />
					<ModalCardBody>
						<form onSubmit={submitHandler} id="feedback_form">
							<Field>
								<Label>Короткий опис проблеми</Label>
								<Control>
									<Input
										type="text"
										placeholder="Короткий опис знахідки"
										value={title}
										onChange={changeTitle}
										required
									/>
									<Help
										isColor={currentLen >= 0 ? "success" : "danger"}
										hasTextAlign="right"
									>
										{currentLen}/{maxTitleLen}
									</Help>
								</Control>
							</Field>
							<Field>
								<Label>Детальний опис...</Label>
								<Control>
									<TextArea placeholder={"Детальний опис..."} required />
								</Control>
							</Field>
							{/*
								<Field>
									<Label>Зображення</Label>
									<Control>
										<input type="file" multiple />
									</Control>
								</Field>
							*/}
							<Field>
								<Control>
									<Radio name="req_type" defaultChecked> Помилка </Radio>
									<Radio name="req_type"> Побажання </Radio>
									<Radio name="req_type"> Ідея </Radio>
								</Control>
							</Field>
						</form>
					</ModalCardBody>
					<FeedbackFormFooter
						cancelHandler={closeModal}
						errorStatus={errorStatus}
					/>
				</ModalCard>
			</Modal>
		</>
	);
};

export default FeedbackForm;
