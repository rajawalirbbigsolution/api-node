import { check } from "express-validator";

/**
 * REGISTER MODEL
 * ==============================
 * Created by Harival Tivani
 * Created at December 24, 2021
 * ==============================
 */
export const registerValidator = () => {
    return[
        check('pic_name').notEmpty().withMessage('Name cannot be empty'),
        check('email').notEmpty().withMessage('Email cannot be empty'),
        check('email').isEmail().withMessage('Email not valid, please input valid email format (example@mail.com)'),
        check('no_hp').notEmpty().withMessage('Phone Number cannot be empty'),
        check('no_hp').isNumeric().withMessage('Phone Number only number'),
        check('no_hp').isLength({min : 10}).withMessage('Phone number min 10 characters'),
        check('password').notEmpty().withMessage('Password cannot be empty'),
        check('password').isLength({min:8}).withMessage('Password min 8 characters'),
        check('confirm_password').notEmpty().withMessage('Password confirmation cannot be empty'),
        check('confirm_password').isLength({min:8}).withMessage('Password confirmation min 8 characters')
    ]
}

export const registerByAdminValidator = () => {
    return[
        check('pic_name').notEmpty().withMessage('Name cannot be empty'),
        check('email').notEmpty().withMessage('Email cannot be empty'),
        check('email').isEmail().withMessage('Email not valid, please input valid email format (example@mail.com)'),
        check('no_hp').notEmpty().withMessage('Phone Number cannot be empty'),
        check('no_hp').isNumeric().withMessage('Phone Number only number'),
        check('no_hp').isLength({min : 10}).withMessage('Phone number min 10 characters'),
        check('password').notEmpty().withMessage('Password cannot be empty'),
        check('password').isLength({min:8}).withMessage('Password min 8 characters'),
        check('confirm_password').notEmpty().withMessage('Password confirmation cannot be empty'),
        check('confirm_password').isLength({min:8}).withMessage('Password confirmation min 8 characters'),
        check('role_id').notEmpty().withMessage('User Role cannot be empty')
    ]
}


/**
 * PACKAGE VALIDATOR
 * ==============================
 * Created by Harival Tivani
 * Created at December 27, 2021
 * ==============================
 */
export const packageValidator = () => {
    return[
        check('marketplace_id').notEmpty().withMessage('Marketplace cannot be empty'),
        check('periode_id').notEmpty().withMessage('Periode cannot be empty'),
        check('package_name').notEmpty().withMessage('Package Name cannot be empty'),
        check('price').notEmpty().withMessage('Price cannot be empty'),
        check('start_date').notEmpty().withMessage('Start date cannot be empty'),
        check('start_date').isDate().withMessage('Start date should be date format'),
        check('end_date').notEmpty().withMessage('End date cannot be empty'),
        check('end_date').isDate().withMessage('End date should be date format'),
        check('desc').notEmpty().withMessage('Description cannot be empty')
    ]
}


/**
 * MARKETPLACE VALIDATOR
 * ==============================
 * Created by Harival Tivani
 * Created at December 27, 2021
 * ==============================
 */
 export const marketplaceValidator = () => {
    return[
        check('marketplace_name').notEmpty().withMessage('Marketplace Name cannot be empty')
    ]
}


/**
 * PERIODE VALIDATOR
 * ==============================
 * Created by Harival Tivani
 * Created at December 27, 2021
 * ==============================
 */
 export const periodeValidator = () => {
    return[
        check('periode_name').notEmpty().withMessage('Periode name cannot be empty'),
        check('jumlah_hari').notEmpty().withMessage('Jumlah hari cannot be empty')
    ]
}
