create view ventas as
select 
	concat_ws(' ',FirstName,LastName) as fullName,
	o.orderID,
    od.ProductID,
    p.ProductName,
	p.Unit,
    od.quantity,
    p.Price,
	format(od.quantity *   p.Price, 0)  total
from employees e 
Join orders o
using (employeeid)
join orderdetails od
on  o.OrderID = od.OrderID
join products p
on od.ProductID = p.ProductID
order by e.LastName;

select * from ventas;