import {makeAutoObservable} from "mobx";

export default class PlayerStore{
    constructor() {
        this._communities = [
        ]
        this._players = [
        ]
        this._countries = [
        ]
        this._selectedCommunity = null
        this._selectedCountry = null
        makeAutoObservable(this)
    }




    setCommunity(communities){
        this._communities = communities
    }
    setPlayers(players){
        this._players = players
    }

    setCountry(country){
        this._countries = country
    }

    setSelectedCommunity(community){
        this._selectedCommunity = community
    }

    setSelectedCountry(country){
        this._selectedCountry = country
    }



    get communities(){
        return this._communities
    }


    get players(){
        return this._players
    }

    get countries(){
        return this._countries
    }

    get selectedCountry () {
        return this._selectedCountry
    }

    get selectedCommunity () {
        return this._selectedCommunity
    }

}