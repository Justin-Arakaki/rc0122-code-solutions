delete from "films"
where "rating" != 'G'
returning "title", "rating";
