import {createReducer} from "@reduxjs/toolkit";
import { AppState } from "../store/appState";
import { authentification } from "../usecases/authentification";


export const loginReducer =
    createReducer<AppState['auth']>({
        token: ""
    }, (builder) => {
        builder.addCase(authentification.fulfilled, (state, {payload}) => {
            return {
                token: payload.token
            }
        })
    });