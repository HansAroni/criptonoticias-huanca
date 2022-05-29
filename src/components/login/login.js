import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './login.css';


export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0 ();
    return <button className="login" onClick={() => loginWithRedirect()}>
        login
    </button>
}