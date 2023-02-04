import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCommunity} from "../../http/PlayerAPI";

const CreateCommunity = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [size, setSize] = useState(0)
    const [img, setImg] = useState(null)

    const addCommunity = (name,size, img) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('size', `${size}`)
        formData.append('img', img)
        createCommunity(formData).then(data => onHide())
/*
        createCommunity(name, size).then(data => {
            setName('')
            setSize(0)
            onHide()
        })*/

    }

    const selectFile = e => {
        setImg(e.target.files[0])
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить сообщество
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название сообщества"}
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                </Form>
                <Form>
                    <Form.Control
                        placeholder={"Введите размер сообщества"}
                        value={size}
                        onChange={(event) => setSize(+event.target.value)}
                    />
                </Form>
                <Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => {
                    addCommunity(name,size,img)
                }
                } >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCommunity;