select fullName, format(sum(total),0) total from ventas group by (fullName) order by total;
select round(sum(total),2) from ventas group by(fullName);

