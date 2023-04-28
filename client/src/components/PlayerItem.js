import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const PlayerItem = observer(({playerInfo, index}) => {
  const {player} = useContext(Context)
  console.log(player.countries.find(i => i.id === playerInfo.countryId).img)
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{playerInfo.nickname}{<img
        src={process.env.REACT_APP_API_URL + player.countries.find(i => i.id === playerInfo.countryId).img} style={{
        width: '1.75rem',
        maxWidth: '100%',
        marginLeft: '5px'
      }}/>}</td>
      <td>{playerInfo.wins}</td>
      <td>{playerInfo.pts}</td>
    </tr>
  );
});

export default PlayerItem;