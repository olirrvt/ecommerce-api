import { v4 as uuidv4 } from "uuid";

class Carrinho {
    constructor(status) {
        this.id = uuidv4();
        this.status = status;
    };
};

export default Carrinho;