select
  "g"."name" as "genre",
  count("cm"."actorId") as "films"
from "genres" as "g"
join "filmGenre" using ("genreId")
join "castMembers" as "cm" using ("filmId")
join "actors" as "a" using ("actorId")
where
  "a"."firstName" = 'Lisa' and
  "a"."lastName" = 'Monroe'
group by "g"."name";
