show databases;
use northwind;
show tables;

select * from products;

select productid, productname, suppliername 
from products p 
join suppliers s on p.SupplierID = s.SupplierID;