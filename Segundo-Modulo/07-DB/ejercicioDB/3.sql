
show databases;

drop table if exists usuario;

create database usuario;

use usuario;

create table uno(
user_id char(18) primary key default (uuid()),
user_alias char(30) not null unique,
email char(30) not null, 
first_name  char(30) not null,
surname char(30) ,
phone int(20)unique,
created_at timestamp not null default (now()), 
modified_at timestamp not null default (now())
);



drop table if exists notes;

  CREATE TABLE notes (
    id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    title VARCHAR(255) NOT NULL,
    is_important BOOLEAN DEFAULT FALSE,
    content TEXT,
    author BINARY(16) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    PRIMARY KEY (id),
    FOREIGN KEY (author) REFERENCES users(id)
  );

 
set foreign_key = 0;
drop table if exists user_others;
set foreign_key = 1;

CREATE TABLE user_others (
 first_user_id INT NOT NULL,
 second_user_id INT NOT NULL,
 relation_type ENUM('friend', 'enemy'),
 FOREIGN KEY(first_user_id) REFERENCES users,
 FOREIGN KEY(second_user_id) REFERENCES users ,
 PRIMARY KEY (source_user_id, target_user_id),
 created_at timestamp not null default (now()), 
 modified_at timestamp not null default (now())
)
