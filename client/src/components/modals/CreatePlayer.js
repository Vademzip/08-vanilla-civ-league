import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createPlayer} from "../../http/PlayerAPI";

const CreatePlayer = observer(({show, onHide}) => {
    const {player} = useContext(Context)
    const [nickname, setNickname] = useState('')
    const [country, setCountry] = useState('')
    const [wins, setWins] = useState(0)
    const [pts, setPts] = useState(0)
    const addPlayer = () => {
        createPlayer(
            nickname,
            country,
            wins,
            pts,
            player.selectedCommunity.id
        ).then(data => onHide())
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить игрока
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {player.selectedCommunity? player.selectedCommunity.name : "Выберите сообщество"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {player.communities.map(type =>
                                <Dropdown.Item
                                    onClick={() => player.setSelectedCommunity(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder={'Введите имя игрока'}
                        value={nickname}
                        onChange={(event) => setNickname(event.target.value)}

                    />
                    <Form.Control
                        className='mt-3'
                        placeholder={'Выберите страну'}
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}

                    />
                    <Form.Control
                        className='mt-3'
                        placeholder={'Введите количество побед'}
                        type={'number'}
                        value={wins}
                        onChange={(event) => setWins(event.target.value)}

                    />
                    <Form.Control
                        className='mt-3'
                        placeholder={'Введите количество очков'}
                        type={'number'}
                        value={pts}
                        onChange={(event) => setPts(event.target.value)}

                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPlayer}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePlayer;