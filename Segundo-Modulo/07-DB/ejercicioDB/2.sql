-- show databases;
-- if exist 
drop database if exists demo;
create database demo;
use demo;
create table Games(
id char(18) primary key default (uuid()),
nombre char(30) not null unique,
precio int,
detalle text,
created_at timestamp default (now())
)