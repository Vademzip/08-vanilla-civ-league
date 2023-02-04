import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createCommunity = async (community) => {

    /*console.log('size ' + size)
    console.log('img ' + img)*/
    const {data} = await $authHost.post('api/community/', community)
    return data
}

export const fetchCommunities = async () => {
    const {data} =  await $host.get('api/community/')
    return data
}


export const createPlayer = async (
    nickname,
    country,
    wins,
    pts,
    communityId
) => {
    const {data} = await $authHost.post('api/player/', {nickname,country,wins,pts,communityId})
    return data
}

export const fetchPlayers = async () => {
    const {data} =  await $host.get('api/player/')
    return data
}

export const fetchOnePlayer = async (id) => {
    const {data} =  await $host.get('api/player/' + id)
    return data
}