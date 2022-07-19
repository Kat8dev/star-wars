import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
    let auth = true;
    return (
            <Route {...rest}>
                {auth ? <Element /> : <Navigate replace to="/welcome" />}
            </Route>
    )
}

export default PrivateRoute;

/*
    const PrivateShipListRoute = ({ exact, path, element }) => {
    return (
        <Route
            exact={exact}
            path={path}
            element={element}
        />
    )
}
*/