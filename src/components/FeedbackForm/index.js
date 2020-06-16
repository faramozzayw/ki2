import React, { useState } from "react";
import {
    Modal,
    ModalBackground,
    ModalContent,
    ModalCard,
    ModalCardTitle,
    ModalCardHeader,
    ModalCardBody,
    ModalCardFooter,
    Delete,
    Button,
    Field,
    Label,
    Control,
    Input,
    TextArea,
    Help,
} from "bloomer";

const FeedbackForm = () => { 
    const [modalStatus, toggleModal] = useState(false);
    const [title, setTitle] = useState("");

    const maxTitleLen = 280;

    const changeTitle = e => {
        const { value } = e.target;

        setTitle(value);
    }



    const openModal = () => toggleModal(true);
    const closeModal = () => toggleModal(false);

    return (
        <>
            <Button onClick={openModal}>Знайшли помилку?</Button>
            <Modal isActive={modalStatus} style={{textAlign: "left"}}>
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader>
                        <ModalCardTitle>Опишіть свою знахідку</ModalCardTitle>
                        <Delete onClick={closeModal} />
                    </ModalCardHeader>
                    <ModalCardBody>
                        <form>
                            <Field>
                                <Label>Короткий опис проблеми</Label>
                                <Control>
                                    <Input
                                        type="text"
                                        placeholder="Короткий опис проблеми"
                                        value={title}
                                        onChange={changeTitle}
                                    />
                                    <Help>0/{maxTitleLen}</Help>
                                </Control>
                            </Field>
                            <Field>
                                <Label>Детальний опис...</Label>
                                <Control>
                                    <TextArea placeholder={'Детальний опис...'} />
                                </Control>
                            </Field>
                        </form>
                    </ModalCardBody>
                    <ModalCardFooter>
                        <Button isColor='success'>Відправити</Button>
                        <Button isColor='warning'>Cancel</Button>
                    </ModalCardFooter>
                </ModalCard>
            </Modal>
        </>
    )
}

export default FeedbackForm;