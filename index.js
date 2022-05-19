import http, { createServer } from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import moment from 'moment-timezone';
// import formidable from "express-formidable";

import { 
    User, 
    Marketplace, 
    MarketplaceUser,
    Package, 
    Periode, 
    Role, 
    Bank, 
    OrderPackage,
    Shopee,
    Transaction
} from "./src/api/v1/routes/index.js";
dotenv.config();

moment.tz.setDefault("Asia/Jakarta");

const router = express();

router.use(express.json());
// router.use(formidable());
router.use(express.urlencoded({extended:true}));



/** Rules of API */
router.use(cors({credentials: true, origin: '*'}));


/**
 * Create server and running server
 */
const httpServer = http.createServer(router);
httpServer.listen(process.env.SERVER_PORT, () => console.log(`Server running on port ${process.env.SERVER_PORT}`));

/**
 * Route
 */
//  router.use('/', function(req, res){
//      console.log('test');
//  });

router.use('/api/v1/user', User);
router.use('/api/v1/marketplace', Marketplace);
router.use('/api/v1/package', Package);
router.use('/api/v1/periode', Periode);
router.use('/api/v1/role', Role);
router.use('/api/v1/bank', Bank);
router.use('/api/v1/OrderPackage', OrderPackage);
router.use('/api/v1/user', MarketplaceUser);
router.use('/api/v1/transaction', Transaction);

/** 
 * Marketplace Routing
 */
router.use('/api/v1/shopee', Shopee);
router.use('/api/v1/sync/:marketplace', function(req, res){
    const marketplace = req.params.marketplace
    if(marketplace == 'shopee' || marketplace == 'Shopee'){
        res.redirect('/api/v1/shopee/shopee-auth');
    }
});
router.use('/files',express.static('public'));


