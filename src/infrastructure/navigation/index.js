import {AppNavigator} from "./app.navigator";
import {useContext} from "react";
import {AuthenticationContext} from "../../services/authentication/authentication.context";
import {AccountNavigator} from "./account.navigator";

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext);
    return isAuthenticated ? (
        <AppNavigator/>
    ) : (
        <AccountNavigator/>
    );
}