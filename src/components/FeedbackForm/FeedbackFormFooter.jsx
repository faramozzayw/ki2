import React from "react";

import {
    ModalCardFooter,
    Button,
} from "bloomer";

const FeedbackFormFooter = ({ sendHandler = () => {}, cancelHandler = () => {}, errorStatus = false }) => (
    <ModalCardFooter>
        <Button
            form="feedback_form"
            type="submit"
            isColor={errorStatus ? "danger" : "success"}
            onClick={sendHandler}
            disabled={errorStatus}
        >Відправити</Button>
        <Button
            isColor="warning"
            onClick={cancelHandler}
        >Охрана отмєна</Button>
    </ModalCardFooter>
);

export default FeedbackFormFooter;