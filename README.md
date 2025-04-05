# 📘 Desafio 2 | Módulo de Back-end - API de Livros com Flask

Este projeto foi desenvolvido como parte do **segundo desafio do Módulo de Back-end** do curso. O objetivo é criar uma API RESTful utilizando **Flask** e **SQLite** para cadastrar e listar livros, aplicando boas práticas de desenvolvimento web e manipulação de banco de dados.

---

## 🚀 Descrição do Projeto

A API desenvolvida permite:

- 📥 **Cadastrar um livro** no banco de dados via rota `POST /doar`
- 📚 **Listar todos os livros** cadastrados via rota `GET /livros`
- 🏠 **Exibir uma página inicial personalizada** via rota `GET /`

Essa é uma aplicação simples, porém completa, que simula a construção de uma API real com banco de dados e boas práticas estruturais.

---

## ⚙️ Requisitos Técnicos

- ✅ Utilização do **Flask** para criação das rotas
- ✅ Banco de dados **SQLite** com uma tabela chamada `LIVROS`
- ✅ Rotas criadas:
  - `POST /doar` → cadastra um novo livro
  - `GET /livros` → lista todos os livros cadastrados
  - `GET /` → exibe uma mensagem personalizada
- ✅ Retorno em **JSON** para todas as respostas
- ✅ Resposta com código **HTTP 201** ao cadastrar novo livro
- ✅ Organização e boas práticas de código

---

## 🗃️ Estrutura do Banco de Dados

A tabela `LIVROS` contém os seguintes campos:

| Campo        | Tipo   | Descrição                      |
|--------------|--------|--------------------------------|
| `id`         | int    | Chave primária, autoincremento |
| `titulo`     | texto  | Título do livro (obrigatório)  |
| `categoria`  | texto  | Categoria (obrigatório)        |
| `autor`      | texto  | Nome do autor (obrigatório)    |
| `imagem_url` | texto  | URL da imagem (obrigatório)    |

