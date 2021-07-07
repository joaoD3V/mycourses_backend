
##### Desafio Verzel - Sistema de Cadastro e Exibição de Módulos e Aulas

# My Courses - Backend

Sistema Web de cadastro e exibição de módulos e aulas, com a finalidade de deixar os mesmos mais acessíveis para a consulta e mais prático para cadastro pelo administrador.

------------
### Requisitos do Sistema

[ X ] Home page pública exibindo os módulos e conforme seleciona o módulo, exibe as aulas do módulo;

[ X ] Os módulos devem estar ordenados por ordem alfabética assim como as aulas;

[ X ] Os módulos devem contabilizar o total de aulas referente;

[ X ] Para cadastro das aulas e módulos, deverá haver um login administrativo;

[ ] As páginas de cadastros devem estar seguras e só acessadas após login autenticado;

[ X ] Todas as requisições privadas precisam de um token válido gerado no login para funcionamento da requisição;

[  ] O cadastro de aulas deverá ter listagem, criação e deleção de registros;

[ X ] Os atributos obrigatórios para a aula são: Id, Nome, Módulo e data que acontecerá a aula;

[ X ] O cadastro de módulos deverá ter listagem, criação e deleção de registros ;

[ X ] Os atributos obrigatórios para o módulo são: Id, e Nome;

[ X ] O Backend deverá ser uma API Rest;

[ X ] Todos os dados devem ser persistidos no banco de dados;

------------


### Tecnologias usadas durante o desafio

- **Node com Express**: para a criação de uma API Rest com operações backend;
- **Knex.js**: Construtor de consultas SQL que faz a comunicação com o bando de dados.
- **MySQL**: Banco de dados SQL.
- **Bcrypt**: Para criptografar senhas salvas no banco de dados.
- **Dotenv**: Para implementação de variáveis de ambiente.
- **JSON Web Token (JWT)**: para a criação de tokens de autenticação.
- **Nodemon**: Para o funcionamento do backend na máquina local.

------------

### Observação

- Nos arquivos do teste, foi disponibilizado um script SQL que **precisa obrigatoriamente** ser rodado no banco de dados antes dos passos de instalação das dependências do projeto. Esse arquivo se encontra na pasta script_mysql, dentro da raiz do projeto.
- Para evitar alguns problemas com a consulta e armazenamento de dados, **é necessário** baixar e instalar o [MySQL](https://dev.mysql.com/downloads/installer/) e o [MySQL Workbench](https://www.mysql.com/products/workbench/).
- Caso dê algum erro de execução do script no *MySQL Workbench*, basta ignorar a mensagem de erro clicando em "OK" e forçar a execução do script clicando no primeiro ícone do raio ⚡. Em seguida, ao atualizar os schemas, o schema "mycourses" irá aparecer.
- Execute o script antes de executar o backend, para poder fazer a criação do schema, das tabelas e popular as mesmas.
- Execute o backend antes do frontend para que o sistema possa ter o funcionamento conforme esperado. O backend está rodando na porta 3333.

Algumas observações importantes sobre o arquivo **.env**:
- *DATABASE_CLIENT=mysql2* -> (Cliente Banco de Dados - **Não deve ser alterado**)
- *DATABASE_HOST=localhost*  -> (Execução na máquina local - **Não deve ser alterado**)
- *DATABASE_USER=root*  -> (Usuário do banco de dados - **Pode ser alterado de acordo com o seu usuário do MySQL Workbench**)
- *DATABASE_PASSWORD=root*  -> (Senha do usuário do banco de dados - **Pode ser alterado de acordo com a sua senha do usuário do MySQL Workbench**)
- *DATABASE=mycourses* -> (Banco de Dados - **Não deve ser alterado**)


  



------------

### Instalação e Execução

**Instalação das dependências**
```
yarn
```

**Execução em ambiente de desenvolvimento**

```
yarn start
```
