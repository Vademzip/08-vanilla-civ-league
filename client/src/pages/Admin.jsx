import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCommunity from "../components/modals/CreateCommunity";
import CreatePlayer from "../components/modals/CreatePlayer";

const Admin = () => {
    const [communityVisible, setCommunityVisible] = useState(false)
    const [playerVisible, setPlayerVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPlayerVisible(true)}
            >
                Добавить игрока
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCommunityVisible(true)}
            >
                Добавить сообщество
            </Button>
            <CreateCommunity show={communityVisible} onHide={() => setCommunityVisible(false)}/>
            <CreatePlayer show={playerVisible} onHide={() => setPlayerVisible(false)}/>
        </Container>
    );
};

export default Admin;