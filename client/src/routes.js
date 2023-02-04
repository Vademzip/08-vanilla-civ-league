import Admin from "./pages/Admin";
import {ADMIN_ROUTE, FAVORITE_LIST_ROUTE, LEADERBOARD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import FavoriteList from "./pages/FavoriteList";
import Auth from "./pages/Auth";
import Leaderboard from "./pages/Leaderboard";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVORITE_LIST_ROUTE,
        Component: FavoriteList
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: LEADERBOARD_ROUTE,
        component: Leaderboard
    }
]