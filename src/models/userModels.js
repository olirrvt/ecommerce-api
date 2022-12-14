import { v4 as uuidv4 } from "uuid";
import { sha256 } from "js-sha256";

class User {

    validSenha(senha) {
        if (!senha) {
            return ''
        } else {
            return sha256(senha)
        }
    };

    constructor(nome, email, senha) {
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.senha = this.validSenha(senha);
    };
};

export default User;