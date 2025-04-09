Relatório Técnico - Sistema de Tarefas 

Este projeto é uma aplicação Full Stack para gerenciamento de tarefas. O sistema é composto por um backend construído com FastAPI e um banco de dados MySQL, além de um frontend em React que permite a visualização e manipulação das tarefas cadastradas.  

Tecnologias Utilizadas: 
- FastAPI 
- SQLAlchemy 
- PyMySQL 
- MySQL (Workbench) 
- React (Create React App) 
- Fetch API 
- Styled Components 
- Python 
- JavaScript 
- Node.js e NPM 

Estrutura do Projeto: 

Backend (FastAPI): 
O backend foi implementado com FastAPI. Utilizou-se SQLAlchemy para mapeamento objeto-relacional (ORM) e PyMySQL para conexão com o banco de dados. O projeto conta com rotas de CRUD (Create, Read, Update e Delete), e está documentado automaticamente via Swagger UI, acessível em /docs ao iniciar o servidor. 

Banco de Dados (MySQL): 
O banco de dados utilizado foi o MySQL, gerenciado por meio do MySQL Workbench. Foi criado um banco chamado 'sistema_db', contendo uma tabela 'tarefas' com os campos id, titulo, descricao e status. 

Frontend (React): 
A interface do sistema foi construída com React, utilizando a biblioteca Styled Components para a estilização. O consumo da API foi feito por meio da Fetch API. A aplicação possui três páginas principais: listagem de tarefas, cadastro de novas tarefas e edição de tarefas existentes. 


Como Executar a Aplicação: 

Pré- Requisitos: 

- Ter o Node.js (com npm) e o Python 3.10+ instalados em sua máquina. 

- Ter o MySQL rodando e o MySQL Workbench configurado. 

Passo a passo: 

1. Clone o repositório no GitHub. 
2. Configure o banco de dados MySQL conforme o script SQL fornecido. 
3. No diretório do backend, crie um ambiente virtual e instale as dependências com pip install -r requirements.txt. 
4. Execute o backend com uvicorn main:app --reload. 
5. No diretório do frontend, instale as dependências com npm install e execute com npm start. 
 
