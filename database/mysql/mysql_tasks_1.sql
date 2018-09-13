-- 1. Get all customers that live in Berlin
select * from customers where city = 'Berlin';
-- 1b. Get all customers that live in Berlin and show them
-- in alphabetical order by their firstname
select * from customers where city = 'Berlin' order by firstname asc;
-- 2. Get all customers whoes firstname starts with the letter 'k'
select * from customers where firstname like 'K%';
-- 3. Get all customers whoes lastname ends with an 'a' or with an 'n'
select * from customers where lastname like '%a' or lastname like '%n';
-- 4a Get the current year and the year of the birthdates of all customers
select year(curdate()), year(birthdate) from customers;
-- 4b Get the firstname, the lastname and the age of all customers
select firstname, lastname, year(curdate()) - year(birthdate) as age from customers;
-- 4c Get the firstname, the lastname and the age of all customers, start with the oldest
select firstname, lastname, year(curdate()) - year(birthdate) as age from customers order by age desc;
-- 5 Get the firstname, the lastname and the age of customers whos are younger than 27 and put the youngest first
select firstname, lastname, year(curdate()) - year(birthdate) as age from customers where year(curdate()) - year(birthdate) < 28 order by age asc;
-- 6 Get all customers who are older than 27 and younger than 35
select * from customers where year(curdate()) - year(birthdate) > 27 and year(curdate()) - year(birthdate) < 35;
-- 7 Get the oldest 5 customers who have a google account
select * from customers where email like '%googlemail%' or email like '%gmail%' and year(curdate()) - year(birthdate) order by birthdate asc limit 5;
-- 8 Get all customers who registered after 7 pm
select * from customers where time(registered) > time('19:00:00');
-- 9 Get all lastnames and each lastname is only once
-- i.e. Tischler
--      Tischler,
--      Tischler
-- is not valid. Only once Tischler
select distinct lastname from customers;
-- 10 how many customers live in Berlin?
select count(*) from customers where city = 'Berlin';
-- 11 How many customers from Berlin or Leipzig
select count(*) from customers where city = 'Berlin' or city = 'Leipzig';

-- 12 Get all customers who bought something
select customers.*, orders.* from customers join orders on customers.id = orders.customer_id;
-- 13 Get all customers and if they ordered, also their orders
select * from customers left join orders on customers.id = orders.customer_id;
-- 14 Get all customers who have not ordered anything
select * from customers where not exists(select * from orders where orders.customer_id = customers.id);
-- 15 Get all products and their product categories
select products.*, product_categories.* from products join product_categories on products.category_id = product_categories.id;

-- insert users into 
insert into users (username) values ('max'), ('moritz'), ('peter'), ('lars');
select * from users;

-- Ctrl + Enter


