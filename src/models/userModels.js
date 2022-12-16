// import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

class User {

    validSenha(senha) {
        if (!senha) {
            return '';
        } else {
            return hash(senha, 8);
        }
    };

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = hash(senha, 8);
    };
};

export default User;