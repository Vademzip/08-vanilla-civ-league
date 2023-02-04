import React from 'react';

const PlayerItem = ({player, index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{player.nickname}</td>
            <td>{player.wins}</td>
            <td>{player.pts}</td>
        </tr>
    );
};

export default PlayerItem;