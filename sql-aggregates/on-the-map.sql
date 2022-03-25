select
  "co"."name" as "country",
  count("ci"."countryId") as "numCities"
from "cities" as "ci"
join "countries" as "co" using ("countryId")
group by "country";
