import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {checkAuth} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {fetchCommunities} from "./http/PlayerAPI";

const App = observer(() => {
    const {user,player} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        checkAuth().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))

        fetchCommunities().then(data => {
            player.setCommunity(data)
        })

    }, [])

    if (loading){
        return <Spinner animation={'grow'}/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
