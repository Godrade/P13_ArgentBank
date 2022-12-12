//call api (fetch)

import { LoginGateway } from "../../corelogic/gateways/login";

export const AuthRest:LoginGateway = {
    auth:async ({email, password}):Promise<{token:string}> => {
        return new Promise((resolve, reject) => {
            resolve({ token: '' })
        })
    },
}