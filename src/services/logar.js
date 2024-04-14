import Api from "./Api";

export const logar = async (login) => {
    return await Api.post('login/', login);
}