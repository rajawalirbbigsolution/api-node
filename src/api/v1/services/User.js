import User from "../models/UserModel.js";
import Movie from "../models/Movie.js";
import { Sequelize } from 'sequelize';


 export const all_movie = async () => {
    try {
        return({status : 200, data : await Movie.findAll({},{type : Movie.sequelize.QueryTypes.SELECT})});
    } catch (error) {
        return error;
    }
}


export const create_movie = async (req) => {
    console.log(req);
    try {
       
       
        
        return Movie.create(
            { 
                name : req.name,
                description: req.description, 
                category: req.category,
                thumbnail : req.thumbnail
            }
        )
        .then((result) => {
            return result;
        })

    } catch (error) {
        return error
    }
}


export const list_limit = async (req) => {
    return Movie.sequelize.query(`
        SELECT * from tb_movie limit $1
    `,
        { bind: [req.limit],type: Sequelize.QueryTypes.SELECT }
    ).then( async (result) => {
        return result
    });
}

export const update_movie = async (req) => {
    console.log(req);
    try {
        return Movie.update({ name: req.name, description : req.description,category: req.category }, {
            where: {
              id: req.id
            },
            type : Movie.sequelize.QueryTypes.update
        })
        .then(result => {
            if(result == 1){return ({status : 200, message : 'Data updated successfully'})}
            else{return ({status : 400, message : 'Data update failed'})}
        })
    } catch (error) {
        return error
    }
}

export const delete_movie = async (req) => {
    console.log(req)
    return Movie.sequelize.query(`
    delete from tb_movie where id = $1
`,
{ bind: [req.id],type: Sequelize.QueryTypes.DELETE }
).then( async (result) => {
    return 'delete success'
});
}

export const search_movie = async (req) => {
    return Movie.sequelize.query(`
            select * from tb_movie
            where category like '%`+req.category+`%'
    `,
        { bind: [req.category],type: Sequelize.QueryTypes.SELECT }
    ).then( async (result) => {
        return result
    });
}

export const login = async (data) => {
    try {
        return User.findOne({where:{email : data.email, status : 1}})
            .then((results) => {
                if(results === null){
                    return ({status : 204, message : "Email tidak ditemukan"});
                }else if(!bcrypt.compareSync(data.password, results.password)){
                    return ({status : 204, message : "Password yang diinputkan salah"});
                }else{
                    return GenerateToken(results);
                }
            })
    } catch (error) {
        return error;
    }
}

export const register_service = async (req) => {
    try {
       
        if(await RegisterChecker('email', req.email) !== null){ 
            return ({status : 204, message : "E-mail yang diinputkan telah digunakan"});
        }
        if(await RegisterChecker('nohp', req.no_hp) !== null){ 
            return ({status : 204, message : "No HP yang diinputkan telah digunakan"});
        }
        
        return User.create(
            { 
                pic_name : req.pic_name,
                email: req.email, 
                nohp: req.no_hp,
                password: bcrypt.hashSync(req.password, 10),
                role_id : 2,
                status: 0,
                forget_code : OTP,
                forget_date : moment().format('YYYY-MM-DD HH:mm:ss')
            }
        )
        .then((result) => {
            return result;
        })

    } catch (error) {
        return error
    }
}

export const confirm_otp_service = async (id) => {
    try {
        const query = {
            attributes: [
              'created_at',
              [Sequelize.literal(`now()`), 'current'],
              [Sequelize.literal(`CASE WHEN(TIMESTAMPDIFF(MINUTE, forget_date, now()) > 1) THEN 'expired' ELSE 'valid' END`), 'diff'],
            ],
            where: {
              user_id: id
            },
            raw: true
        };
        return User.findOne(query).then(result => {
            if(result.diff == 'expired'){
                return ({status:204, message : "OTP Expired"})
            }
            else {
                return User.update({ status: 1 }, {
                    where: {
                      user_id: id
                    },
                    type : User.sequelize.QueryTypes.update
                })
                .then(result => {
                    if(result == 1){return ({status : 200, message : 'Data updated successfully'})}
                    else{return ({status : 400, message : 'Data update failed'})}
                })
            }
        });
    } catch (error) {
        return error;
    }
}

export const reset_otp_service = async (id) => {
    try {
        return Movie.update({ forget_code: OTP, forget_date : moment().format('YYYY-MM-DD HH:mm:ss') }, {
            where: {
              user_id: id
            },
            type : User.sequelize.QueryTypes.update
        })
        .then(result => {
            if(result == 1){return ({status : 200, message : 'Data updated successfully'})}
            else{return ({status : 400, message : 'Data update failed'})}
        })
    } catch (error) {
        return error
    }
}

export const all_user = async () => {
    try {
        return({status : 200, data : await User.findAll({},{type : User.sequelize.QueryTypes.SELECT})});
    } catch (error) {
        return error;
    }
}

export const user_role_service = async () => {
    try {
        return await Role.findAll({},{type : User.sequelize.QueryTypes.SELECT});
    } catch (error) {
        return error;
    }
}

export const register_byadmin_service = async (req) => {
    try {
        
        return User.findOne({where:{email : req.email}})
        .then((results) => {
            if(results === null){
                return User.create(
                        { 
                            pic_name : req.pic_name,
                            email: req.email, 
                            nohp: req.no_hp,
                            password: bcrypt.hashSync(req.password, 10),
                            role_id : 2,
                            status: req.status,
                            forget_code : OTP,
                            forget_date : moment().format('YYYY-MM-DD HH:mm:ss')
                        }
                    )
                    .then((result) => {
                        return result;
                    })
            }
            else{
                return ({status : 204, message : "E-mail yang diinputkan telah digunakan"});
            }
        })
    } catch (error) {
        return error
    }
}

export const user_byid_service = async (user_id) => {
    try {
        return({status : 200, data : await User.findOne({where : {user_id : user_id}},{type : User.sequelize.QueryTypes.SELECT})});
    } catch (error) {
        return error;
    }
}

export const update_user_service = async (req, id) => {
    try {
        
        const data = { 
                pic_name : req.pic_name,
                email: req.email, 
                nohp: req.no_hp,
                password: bcrypt.hashSync(req.password, 10),
                role_id : req.role_id,
                status: req.status
        }

        return User.update(data, {
            where: {
              user_id: id
            },
            type : User.sequelize.QueryTypes.update
        })
        .then(result => {
            if(result == 1){return ({status : 200, message : 'Data updated successfully'})}
            else{return ({status : 400, message : 'Data update failed'})}
        })
    } catch (error) {
        return error
    }
}