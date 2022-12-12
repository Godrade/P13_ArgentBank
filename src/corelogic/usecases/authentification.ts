import {createAsyncThunk} from "@reduxjs/toolkit";
import { LoginGateway } from "../gateways/login";
import { AppState } from "../store/appState";

export const authentification = createAsyncThunk<{ token:string },
string,
{
    extra: {
        loginGateway: LoginGateway
    }
}>(
    'auth/authentification',
    async (email, {extra: {loginGateway}}) => {
        console.log(email);
        const auth = await loginGateway.auth({ email, password: "" });
        return {token: auth.token};
    });