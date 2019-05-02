Rodar o cliente:

instale as dependencias com yarn add [dependencia]
Dependencias:
bootstrap react react-bootstrap react-dom react-router react-router-dom axios react-scripts

yarn start

===============================================================================
Rodar o Backend:

abra a solucao no visual studio e rode no IISExpress

cliente espera servidor no http://localhost:58482

SQL Server:

Crie Database LibraryDB

===============================================================================

Backend(LibraryBackend):
* uso de Code First
* Modelos e context definidos na pasta Model
* Uso de Repository Pattern com interfaces definidos na pasta Services
* injeção de depencias com Ninject definidos no /app_start/NinjectResolver
* Modelos de transferencia de dados para serem trocados entre cliente e servidor


===============================================================================

Requisitos Funcionais
CRUD:
- O sistema deverá listar os livros ordenados de forma ascendente pelo título; 

- O sistema deverá adicionar um novo livro; 

- O sistema deverá editar um livro;

- O sistema deverá excluir um livro;

- O sistema não deverá permitir inserir um livro com o mesmo título(retorna mensagem de erro);


- O sistema deverá permitir adicionar mais de um exemplar por livro;

- O sistema não deverá permitir inserir o mesmo número de exemplar para livros diferente;

- O sistema não deverá permitir inserir um exemplar com o mesmo número
