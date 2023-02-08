import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={'/leaderboard'} style={{color: "white", textDecoration: "none"}}>Vanilla
                        League</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: "white"}}>
                            {user.user.role === 'ADMIN' && <Button variant={"light"} onClick={() => navigate(ADMIN_ROUTE)}
                                     style={{marginRight: "10px"}}>Админ Панель</Button>}
                            <Button variant={"light"} onClick={logOut}>Выйти</Button>
                        </Nav>
                        : <Nav className="ml-auto">
                            <Button variant={"light"} onClick={() => navigate(LOGIN_ROUTE)}
                            >Авторизация</Button>
                        </Nav>
                    }

                </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;