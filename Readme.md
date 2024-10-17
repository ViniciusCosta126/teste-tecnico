# Teste Tecnico

### Backend

O backend foi feito em php(laravel), ele esta bem simples, somente com duas rotas

- Rota get: Traz o layout que esta no banco de dados
- Rota post: Cria/atualiza o layout no banco de dados

#### Rodando o backend localmente

Depois de baixado o projeto do Git entre na pasta backend

```bash
    cd backend
```

Rode o comando para instalar as dependencias utilizando composer

```bash
    composer install
```

Rode o comando para fazer as migrations

```bash
    php artisan migrate
```

Rode o servidor local

```bash
    php artisan serve
```

### Frontend

O front foi todo feito em react utilizando bootstrap para estilizacao, para o gerenciamento de estados foi utilzado context api.

#### Rodando o frontend localmente

Depois de baixado o projeto do Git entre na pasta teste-tecnico

```bash
    cd teste-tecnico
```

Rode o comando para instalar as dependencias

```bash
    npm install
```

ou

```bash
    yarn install
```

Depois de instalados as as dependencias, rode o comando

```bash
    npm start
```

ou

```bash
    yarn start
```

Depois basta acessar a url

```bash
    http://localhost:3000/
```
