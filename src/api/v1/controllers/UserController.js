import {
  
    all_movie,
    create_movie,
    list_limit,
    update_movie,
    delete_movie,
    search_movie
} from '../services/User.js';
import { validationResult } from "express-validator";


 export const list_movie = async (req, res) => {
    return res.status(200).json(await all_movie(req.body));
}

export const add_movie = async (req, res) => {
    const errors = validationResult(req).errors;
    if (errors.length > 0) {
        return res.status(400).json({error: errors})
    }
    else{
        return res.status(201).json(await create_movie(req.body));
    }
}

export const list_movie_limit = async (req, res) => {
    return res.status(200).json(await list_limit(req.body, req.limit));
}

export const post_update_movie = async (req, res) => {
    return res.status(200).json(await update_movie(req.body, req.id));
}
export const post_delete_movie = async (req, res) => {
    return res.status(200).json(await delete_movie(req.body, req.id));
}

export const search_movie_list = async (req, res) => {
    return res.status(200).json(await search_movie(req.body, req.category));
}


