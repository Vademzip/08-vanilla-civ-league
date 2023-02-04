import {makeAutoObservable} from "mobx";

export default class PlayerStore{
    constructor() {
        this._communities = [
        ]
        this._players = [
        ]
        this._selectedCommunity = null
        makeAutoObservable(this)
    }




    setCommunity(communities){
        this._communities = communities
    }
    setPlayers(players){
        this._players = players
    }

    setSelectedCommunity(community){
        this._selectedCommunity = community
    }



    get communities(){
        return this._communities
    }


    get players(){
        return this._players
    }

    get selectedCommunity () {
        return this._selectedCommunity
    }

}