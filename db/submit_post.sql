insert into post_input (
    post
) values (
    $1
) returning *;