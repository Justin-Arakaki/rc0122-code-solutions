select
  "c"."firstName",
  "c"."lastName"
from "inventory"
join "rentals" using ("inventoryId")
join "customers" as "c" using ("customerId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
