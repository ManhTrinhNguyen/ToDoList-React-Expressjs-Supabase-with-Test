alter table "public"."todo-lists" drop constraint "todo-lists_description_key";

drop index if exists "public"."todo-lists_description_key";

alter table "public"."todo-lists" drop column "description";


