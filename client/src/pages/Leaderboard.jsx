import React, {useContext, useEffect} from 'react';
import {Table} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PlayerItem from "../components/PlayerItem";
import {fetchPlayers} from "../http/PlayerAPI";

const Leaderboard = observer(() => {
    const {player} = useContext(Context)

    useEffect(() => {
        fetchPlayers().then(data => {
            player.setPlayers(data.rows)
        })
    }, [player])

    return (
        <div className={'container'}>
            <h1>Таблица лидеров</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>nickname</th>
                    <th>Wins</th>
                    <th>PTS</th>
                </tr>
                </thead>
                <tbody>
                {player.players.map((player, index) =>
                    <PlayerItem key={player.id} index={index} player={player}/>
                )}
                </tbody>
            </Table>
        </div>
    );
});

export default Leaderboard;