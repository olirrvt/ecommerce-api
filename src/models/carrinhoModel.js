// import { v4 as uuidv4 } from "uuid";

class Carrinho {
    constructor(status, user_id, product_id) {
        this.status = status;
        this.user_id = user_id;
        this.product_id = product_id;
    };
};

export default Carrinho;