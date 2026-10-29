create database lava_jato;
-- drop database if exists lava_jato;
use lava_jato;

create table cliente(
id_cliente int auto_increment primary key,
nome varchar (100) not null,
cpf  varchar (16) not null unique,
endereço varchar (100) not null,
telefone varchar(20) not null
);
insert into cliente (nome, cpf, endereço, telefone)
values ('pedro maia', '163.959.417-55', 'Rua orsina da fonseca, 141', '(21) 98690-5477'),
('João Silva', '123.456.789-01', 'Rua das Flores, 100', '(21) 98888-1111'),
('Marcos Santos', '234.567.890-12', 'Rua das Palmeiras, 200', '(21) 97777-2222'),
('Lucas Oliveira', '345.678.901-23', 'Avenida Brasil, 300', '(21) 96666-3333'),
('Carlos Souza', '456.789.012-34', 'Rua do Sol, 400', '(21) 95555-4444'),
('Rafael Costa', '567.890.123-45', 'Rua das Acácias, 500', '(21) 94444-5555'),
('Bruno Ferreira', '678.901.234-56', 'Avenida Central, 600', '(21) 93333-6666'),
('André Martins', '789.012.345-67', 'Rua do Comércio, 700', '(21) 92222-7777'),
('Felipe Almeida', '890.123.456-78', 'Rua Nova, 800', '(21) 91111-8888'),
('Gustavo Ribeiro', '901.234.567-89', 'Avenida das Américas, 900', '(21) 90000-9999');



create table funcionario( 
id_funcionario int auto_increment primary key,
nome varchar (100) not null,
cpf varchar (16) not null unique,
telefone varchar (20) not null,
cargo varchar (50) not null
);
insert into funcionario ( nome, cpf, telefone, cargo)
values ('vitoria maia','177.646.317-01', '(21)97525-4248', 'vendedor'),
('João Pereira', '111.222.333-44', '(21) 98888-1001', 'lavador'),
('Marcos Lima', '222.333.444-55', '(21) 97777-1002', 'lavador'),
('Lucas Rocha', '333.444.555-66', '(21) 96666-1003', 'gerente'),
('Carlos Mendes', '444.555.666-77', '(21) 95555-1004', 'lavador'),
('Rafael Gomes', '555.666.777-88', '(21) 94444-1005', 'caixa'),
('Bruno Carvalho', '666.777.888-99', '(21) 93333-1006', 'lavador'),
('André Barbosa', '777.888.999-00', '(21) 92222-1007', 'vendedor'),
('Felipe Castro', '888.999.000-11', '(21) 91111-1008', 'lavador'),
('Gustavo Nunes', '999.000.111-22', '(21) 90000-1009', 'gerente');

create table pagamento(
id_pagamento int auto_increment primary key,
valor varchar (70) not null, 
forma_pagamento varchar (100) not null,
status_pagamento varchar (100) not null, 
parcelas varchar (20) not null
);
insert into pagamento ( valor, forma_pagamento, status_pagamento, parcelas)
values ('300.00', 'financiamento', 'em processamento','2x'),
('50.00', 'pix', 'pago', '1x'),
('80.00', 'cartao de credito', 'pago', '1x'),
('100.00', 'cartao de credito', 'pago', '2x'),
('35.00', 'dinheiro', 'pago', '1x'),
('120.00', 'cartao de debito', 'pago', '1x'),
('75.00', 'pix', 'pago', '1x'),
('150.00', 'cartao de credito', 'em processamento', '3x'),
('60.00', 'dinheiro', 'pago', '1x'),
('90.00', 'pix', 'pago', '1x');

create table veiculo(
id_veiculo int auto_increment primary key,
modelo varchar (100) not null, 
placa varchar (50) not null,
cor varchar (40) not null,
ano varchar (50) not null
);
insert into veiculo( modelo, placa, cor, ano) 
values ('factor 150', 'luq4h81', 'vermelho', '2022'),
('Civic', 'ABC1D23', 'preto', '2020'),
('Corolla', 'DEF4G56', 'branco', '2021'),
('Onix', 'GHI7J89', 'prata', '2022'),
('HB20', 'JKL1M23', 'cinza', '2023'),
('Gol', 'MNO4P56', 'azul', '2019'),
('Polo', 'QRS7T89', 'preto', '2022'),
('Argo', 'UVW1X23', 'vermelho', '2021'),
('Cronos', 'YZA4B56', 'branco', '2023'),
('Kwid', 'CDE7F89', 'prata', '2020');

create table agendamento(
id_agendamento int auto_increment primary key, 
data1 varchar (20) not null,
horario varchar (30) not null,
nome varchar (100) not null
);
insert into agendamento(data1, horario, nome)
values ('29/03/2026', '15:30', 'pedro maia'),
('30/03/2026', '09:00', 'João Silva'),
('30/03/2026', '10:30', 'Marcos Santos'),
('30/03/2026', '13:00', 'Lucas Oliveira'),
('31/03/2026', '09:30', 'Carlos Souza'),
('31/03/2026', '11:00', 'Rafael Costa'),
('31/03/2026', '14:00', 'Bruno Ferreira'),
('01/04/2026', '08:30', 'André Martins'),
('01/04/2026', '10:00', 'Felipe Almeida'),
('01/04/2026', '15:30', 'Gustavo Ribeiro');

create table servico (
id_servico int auto_increment primary key,
valor varchar (100) not null
);
insert into servico(valor)
values ('1.000'),
('50.00'),
('70.00'),
('100.00'),
('120.00'),
('150.00'),
('80.00'),
('200.00'),
('60.00'),
('90.00');

SELECT * FROM cliente;
SELECT * FROM funcionario;
SELECT * FROM pagamento;
SELECT * FROM veiculo;
SELECT * FROM agendamento;
SELECT * FROM servico;

-- consultar com select e where 
select * from cliente where id_cliente;
select * from funcionario where id_funcionario;

-- 2 consultas com GROUP BY e ORDER BY com funções de agregação
select forma_pagamento, count(*) as quantidade from pagamento group by forma_pagamento order by quantidade;
select nome, count(*) as quantidade from funcionario group by nome order by quantidade;
select cor, count(*) as quantidade from veiculo group by cor order by quantidade;

-- 2 consultas com operadores aritméticos (+, -, *, /)
select valor, valor + 50 as valor_pagamento from pagamento;
select valor, valor - 20 as valor_pagamento from pagamento order by valor_pagamento;
select valor, valor * 160 as valor_pagamento from pagamento;
select valor, valor / 2 as casa_grande from pagamento;

-- 3 consultas com operadores de comparação (=, !=, <, >, etc.)
select * from cliente where nome = 'pedro maia';
select * from veiculo where ano < '2025';
select * from cliente where nome != 'pedro maia';
select * from pagamento where valor > '30';

-- 3 consultas com operadores lógicos (AND, OR)
select * from funcionario where cargo = 'vendedor' and nome = 'vitoria maia';
select * from funcionario where cargo = 'lavador' and nome = 'marcos lima' or nome = ' vitoria maia';
select * from funcionario where cargo = 'lavador' or nome = 'gustavo nunes';
-- 2 consultas com operadores lógicos e negação (NOT) 
select * from veiculo where not cor = 'preto';
-- consultas com operadores auxiliares (IS NULL, BETWEEN, LIKE, IN) 
select * from pagamento where valor between 50 and 100;
select * from cliente where telefone is null;
select * from funcionario where nome like 'M%' and cargo in ('lavador', 'vendedor');
-- 3 consultas com funções de agregação (SUM(), AVG(), etc.)
select sum(valor) as total_pagamentos from pagamento;
select avg(valor) as media_pagamentos from pagamento;
-- 2 consultas com funções de datas(NOW(), DATE(), YEAR(), etc.)
select now() as data_hora_atual;
select nome, data1, year(str_to_date(data1, '%d/%m/%Y')) as ano from agendamento;
-- 3 sub-consultas com agrupamento e união de dados
select * from pagamento where valor = (select max(valor)from pagamento);
select forma_pagamento, count(*) as quantidade from pagamento group by forma_pagamento having count(*) > 1;
select nome from cliente union select nome from funcionario;
-- 3 consultas com JOIN e visualização de tabelas
select cliente.nome, agendamento.data1, agendamento.horario from cliente join agendamento on cliente.nome = agendamento.nome;
select funcionario.nome, funcionario.cargo, agendamento.data1 from funcionario join agendamento on funcionario.nome = agendamento.nome;
select cliente.nome, agendamento.data1, agendamento.horario, agendamento.nome from cliente inner join agendamento on cliente.nome = agendamento.nome;
-- 4 consultas com tipos de JOIN: INNER, LEFT, RIGHT
select cliente.nome, agendamento.data1, agendamento.horario from cliente inner join agendamento on cliente.nome = agendamento.nome;
select cliente.nome, agendamento.data1, agendamento.horario from cliente left join agendamento on cliente.nome = agendamento.nome;
select cliente.nome, agendamento.data1, agendamento.horario from cliente right join agendamento on cliente.nome = agendamento.nome;
select funcionario.nome, funcionario.cargo, agendamento.data1 from funcionario left join agendamento on funcionario.nome = agendamento.nome;