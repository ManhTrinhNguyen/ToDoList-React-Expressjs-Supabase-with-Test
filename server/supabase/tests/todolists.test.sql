begin; 
select plan (2);

select has_table('todo-lists');

select has_column( 'todo-lists', 'id' );

select * from finish();
rollback;