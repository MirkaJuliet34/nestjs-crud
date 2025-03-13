# NestJS CRUD Application

## Descrição

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) desenvolvida com **NestJS**, **TypeScript**, **PostgreSQL**, e **JWT Authentication**. O sistema gerencia usuários, permitindo a criação, atualização, remoção e consulta de registros de usuários. Ele também implementa a autenticação baseada em JWT para segurança.

## Tecnologias Utilizadas

- **Backend**: NestJS, TypeScript
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT (JSON Web Token)
- **ORM**: TypeORM
- **Controle de Fluxo de Dados**: RESTful APIs
- **Ambiente de Desenvolvimento**: Docker, Node.js

## Funcionalidades Implementadas

A aplicação possui as seguintes funcionalidades principais:

### 1. **Cadastro de Usuário**
   - O usuário pode se cadastrar fornecendo um nome de usuário e senha.
   - A senha é criptografada antes de ser armazenada no banco de dados.
   
### 2. **Autenticação de Usuário**
   - O sistema oferece autenticação via JWT. Ao realizar login, o usuário recebe um token JWT que pode ser usado para autenticar solicitações subsequentes.
   
### 3. **Manipulação de Dados (CRUD)**
   - **Create**: Criar novos usuários.
   - **Read**: Consultar todos os usuários ou um usuário específico.
   - **Update**: Modificar os dados de um usuário existente.
   - **Delete**: Remover um usuário do sistema.

## Estrutura do Projeto

### `src`
- **`auth`**: Contém o serviço de autenticação, validando usuários e gerando JWT.
- **`users`**: Controladores e serviços responsáveis pela lógica de manipulação de usuários (CRUD).
- **`app.module.ts`**: Módulo principal que integra todos os módulos necessários.
  
### `config`
- **`config.module.ts`**: Configurações do ambiente e variáveis de configuração, carregando informações do arquivo `.env`.

## Processo de Desenvolvimento

### 1. **Planejamento e Arquitetura**
   - Iniciamos o desenvolvimento com a definição da arquitetura utilizando o **NestJS** como framework principal. Este framework é altamente escalável e segue boas práticas de desenvolvimento, como a estrutura baseada em módulos e injeção de dependências.
   
### 2. **Desenvolvimento das APIs RESTful**
   - A aplicação expõe endpoints RESTful para manipulação dos dados dos usuários. A comunicação entre cliente e servidor é feita via HTTP, utilizando o método `GET`, `POST`, `PUT` e `DELETE` conforme necessário para implementar as operações CRUD.

### 3. **Integração com o Banco de Dados PostgreSQL**
   - A aplicação utiliza o **TypeORM** para facilitar a integração com o banco de dados. A conexão é configurada para usar o PostgreSQL e as variáveis de ambiente carregadas do arquivo `.env`.
   - Foi criada a tabela `users` no banco de dados, com os campos `username`, `password`, e um campo `id` como chave primária.
   
### 4. **Autenticação e Segurança**
   - A autenticação é feita utilizando o **JWT** (JSON Web Token), garantindo que apenas usuários autenticados possam acessar recursos protegidos.
   - O **AuthService** gerencia a criação e validação dos tokens JWT.

### 5. **Boas Práticas e Testes**
   - O código foi desenvolvido seguindo as boas práticas de **Clean Code** e **SOLID** para garantir legibilidade, modularidade e escalabilidade.
   - **Testes automatizados** foram implementados, garantindo que o sistema funcione conforme esperado e que mudanças não quebrem funcionalidades existentes.
   - **Integração contínua** foi configurada para garantir que o código seja automaticamente testado e validado a cada alteração.

### 6. **Desenvolvimento Mobile**
   - Embora o foco principal do projeto tenha sido o backend, o código está estruturado de maneira que pode ser facilmente integrado a uma aplicação mobile utilizando **Capacitor** e **Next.js**, aproveitando os benefícios de SSR (Server Side Rendering) para performance e SEO.

## Instruções de Uso

### 1. **Clonar o Repositório**

```bash
git clone https://github.com/usuario/nestjs-crud.git
cd nestjs-crud
```

### **2. Instalar Dependências**

```bash
npm install
```

### **3. Configuração do Banco de Dados**

Crie um banco de dados no PostgreSQL chamado nestjs_crud:

```bash
createdb nestjs_crud
```
Crie o arquivo ``.env`` na raiz do projeto com as seguintes variáveis:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=****
DB_NAME=nestjs_crud
```
### **4. Rodar a Aplicação**

```bash
npm run start:dev
```
### **5. Acessar a Aplicação**

A aplicação estará rodando em ``http://localhost:3000``.

### **Responsabilidades**

O desenvolvimento da aplicação envolveu várias responsabilidades, incluindo:

- Desenvolvimento de aplicações web e APIs utilizando NestJS e TypeScript para construir uma aplicação robusta e escalável.
- Desenvolvimento de microsserviços para manipulação de dados de usuários, garantindo a performance e qualidade do sistema.
- Colaboração com as equipes de design e produto para traduzir requisitos de negócios em soluções técnicas.
- Revisão e otimização de código para assegurar que o sistema siga boas práticas e seja facilmente escalável.
- Testes automatizados para garantir que as funcionalidades funcionem corretamente e sem regressões.
- Integração contínua e controle de versão para garantir que o código fosse sempre válido e de alta qualidade.

### **Requisitos Atendidos**

**1. Experiência com APIs RESTful e boas práticas de integração**

O projeto implementa uma API RESTful com as operações CRUD para manipulação de dados dos usuários.

**2. Conhecimento em TypeScript**

O código é escrito em TypeScript, utilizando tipagem estática para garantir maior segurança e legibilidade.

**3. Familiaridade com NestJS**

NestJS foi utilizado para construir o backend da aplicação, aproveitando seus recursos de modularidade e injeção de dependências.

**4. Experiência com React e Next.js**

Embora a aplicação principal seja um backend, o projeto é facilmente integrável com React e Next.js para construção de interfaces dinâmicas e com SSR para performance.

**5. Conhecimento em bancos de dados relacionais**

Utilizamos PostgreSQL e TypeORM para comunicação com o banco de dados relacional, garantindo integridade e performance.

**6. Noções de desenvolvimento mobile**

O backend pode ser facilmente integrado com Capacitor para criação de aplicações móveis baseadas em tecnologias web.

**7. Desejo de aprender e se desenvolver em ambiente colaborativo**

A aplicação foi desenvolvida em colaboração, com revisões de código e discussões técnicas para garantir soluções eficientes e escaláveis.

**8. Inglês técnico**

A documentação e a leitura do código foram feitas com base nas melhores práticas internacionais e com atenção à documentação oficial das tecnologias utilizadas.