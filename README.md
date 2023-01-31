# E-Commerce API Documentation 🐱‍👤

Api developed for the FullStack project of the institution "Programadores do Amanhã"

## 1. User Routes 🔨

### List all users

* **URL:** /users
* **Method:** GET
* **Code:** 200

 Answer successfully:

```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "nome": "John Doe",
            "email": "johndoe@example.com",
            "senha": "fasdfiwoejr23890r",
        },
        {
            "id": 2,
            "nome": "Jane Doe",
            "email": "janedoe@example.com",
            "senha": "farewpogjme034j204"
        }
    ]
}

```


### Show a single user

* **URL:** /user/id
* **Method:** GET
* **Code:** 200

Answer successfully:

```
{
    "status": 200,
    "data": {
        "id": 1,
        "nome": "John Doe",
        "email": "johndoe@example.com",
        "senha": "fasdfiwoejr23890r"
    }
}

```

### Create a new user

* **URL:** /newUser
* **Method:** POST
* **Code:** 200

Request body example:

```
{
    "nome": "John Doe",
    "email": "johndoe@example.com",
    "senha": "123456"
}
```

Answer sucessfully:


```
{
    "status": 201,
    "message": "Usuário criado com sucesso"
}

```

### Update a User

* **URL:** /user/id
* **Method:** PUT
* **Code:** 200

Request body example:

```
{
    "nome": "Jane Doe",
    "email": "janedoe@example.com"
}
```

Answer sucessfully:

```
{
    "status": 200,
    "message": "Usuário atualizado com sucesso"
}

```

### Delete a User

* **URL:** /user/id
* **Method:** DELETE

Answer Sucessfully:

```
{
    "status": 200,
    "message": "Usuário deletado com sucesso"
}

```

## 2. Product Routes 🔨

### List all users

* **URL:** /products
* **Method:** GET
* **Code:** 200

```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "titulo": "Produto 1",
            "descricao": "Produto Novo"
            "preco": 9.99
        },
        {
            "id": 2,
            "titulo": "Produto 2",
            "descricao": "Produto Novo"
            "preco": 9.99
        }
    ]
}
```

### Show a single product

- **URL:** /product/id
- **Method:** GET
- **Code:** 200

```
   {
     "id": 1,
     "titulo": "Produto 1",
     "descricao": "Produto Novo"
     "preco": 9.99
   }
```


### Create a new Product

- **URL:** /newProduct
- **Method:** POST
- **Code:** 200

Request body example:

{
    "nome": "Produto 1",
    "descricao": "Descrição do produto 1",
    "preco": 100.0
}

### Update a product

- **URL:** /product/id
- **Method:** PUT
- **Code:** 200

Request body example:

```
{
    "titulo": "Product 3 updated",
    "descricao": "This is the third product, updated",
    "preco": 39.99
}

```

Success Response:

```
{
    "nome": "Produto atualizado",
    "descricao": "Descrição atualizada do produto"
}
```

### Delete a product

- **URL:** /product/id
- **Method:** DELETE
- **Code:** 200

## Stacks Utilizadas na API 👨‍💻

* **Node.js:** é uma plataforma de desenvolvimento de aplicativos web de código aberto baseada em JavaScript. 
É usado para criar aplicativos back-end de alta escalabilidade e performace.
* **SQLite:** é um banco de dados relacional de software livre embutido. 
É usado como banco de dados para armazenar e recuperar informações.
* **Express:** é uma biblioteca de framework de aplicativos web para Node.js. 
Ele fornece uma estrutura robusta para o desenvolvimento de aplicativos web, 
incluindo recursos como roteamento, middleware e gerenciamento de requisições HTTP.

## Agradecimentos

Agradeço por ler a documentação da API. 
Espero que você tenha encontrado todas as informações necessárias para começar a utilizá-la de maneira eficiente. 
Se houver alguma dúvida ou precisar de ajuda adicional, por favor, não hesite em entrar em contato. 
Obrigado por escolher essa API.

- 📩 taylorso2004@hotmail.com
