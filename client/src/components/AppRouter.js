import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Auth from "../pages/Auth";
import FavoriteList from "../pages/FavoriteList";
import Leaderboard from "../pages/Leaderboard";
import Admin from "../pages/Admin";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {/*{isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}*/}

            {user.isAuth && <Route key={'/admin'} path={'/admin'} element={<Admin/>} exact/>}
            {user.isAuth && <Route key={'/favorite'} path={'/favorite'} element={<FavoriteList/>} exact/>}
            <Route key={'/login'} path={'/login'} element={<Auth/>} exact/>}
            <Route key={'/leaderboard'} path={'/leaderboard'} element={<Leaderboard/>} exact/>}
            <Route key={'/registration'} path={'/registration'} element={<Auth/>} exact/>}
            <Route path='*' element={<Navigate to='/leaderboard'/>} /> {/*Если пути не существует*/}
        </Routes>
    );
};

export default AppRouter;