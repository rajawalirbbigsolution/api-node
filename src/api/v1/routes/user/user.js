import express from 'express';
import {
    list_movie,
    add_movie,
    list_movie_limit,
    post_update_movie,
    post_delete_movie,
    search_movie_list
} from'../../controllers/UserController.js'

const User = express.Router();

User.get('/movie', list_movie);
User.post('/add_movie', add_movie);
User.post('/list_limit', list_movie_limit);
User.post('/update_movie', post_update_movie);
User.post('/delete_movie', post_delete_movie);
User.post('/search_movie', search_movie_list);

export default User;