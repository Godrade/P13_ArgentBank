import {Action, configureStore, Store, ThunkDispatch} from "@reduxjs/toolkit";
import {AppState} from "./appState";
import {LoginGateway} from "../gateways/login";
import {useDispatch} from "react-redux";

import { loginReducer } from "../reducer/login.reducer";

interface Dependencies {
    login: LoginGateway
}

export const initReduxStore = (dependencies: Partial<Dependencies>) => {
    return configureStore({
            reducer: {
                //1
                loginReducer
            },
            devTools: true,
            middleware: getDefaultMiddleware =>
                getDefaultMiddleware({
                    thunk: {
                        extraArgument: dependencies
                    }
                })
        }
    );
}

export type ReduxStore = Store<AppState> & { dispatch: ThunkDispatch<AppState, Dependencies, Action> }
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppState, Dependencies, Action>>()