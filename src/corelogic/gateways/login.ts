export interface LoginGateway {
    auth({email, password}:{email:string, password:string}): Promise<{ token: string}>;
}