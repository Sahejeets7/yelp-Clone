-- create database practice;

-- create table

create table products(
    id int,
    name varchar(50),
    price int,
    on_sale boolean
);

-- list tables --> \d
-- list database \l

create table restaurants(
    id bigserial not null primary key,
    name varchar(50) not null,
    location varchar(50) not null,
    price_range int not null check(price_range >= 1 and price_range <= 5 )
);

insert into restaurants(name, location, price_range) values('wendys','denver',4);