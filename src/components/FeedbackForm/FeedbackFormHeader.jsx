import React from "react";

import {
    ModalCardTitle,
    ModalCardHeader,
    Delete,
} from "bloomer";

const FeedbackFormHeader = ({ closeModal }) => (
    <ModalCardHeader>
        <ModalCardTitle>Опишіть свою знахідку</ModalCardTitle>
        <Delete onClick={closeModal} />
    </ModalCardHeader>
);

export default FeedbackFormHeader;