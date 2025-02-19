show databases;
use demo;
show tables;

drop table if exists users;

create table if not exists users(
id varchar(36) default (uuid()),
id2 binary(16) default (uuid_to_bin(uuid())),
name varchar(40) not null
);

desc users;



insert into users(name) values(
'pepe'
);
select id, bin_to_uuid(id2), name from users;
