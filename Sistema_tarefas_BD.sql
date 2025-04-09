CREATE DATABASE sistema_db;

USE sistema_db;

CREATE TABLE tarefas (
id INT auto_increment PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
descricao TEXT,
status VARCHAR(20) DEFAULT 'Pendente'
);

INSERT INTO tarefas (titulo, descricao, status) 
VALUES
("Estudar para a prova de Banco de Dados", "Praticar conteúdos passados em sala e o conteúdo do trabalho", "Pendente"),
("Prova de IHC", "Fazer a prova de Interface Humano-Computador", "Concluído");


SELECT * FROM tarefas;


