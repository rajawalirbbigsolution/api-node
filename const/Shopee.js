const SHOPEE_PARTNER_ID = '1000444'
const SHOPEE_PARTNER_KEY = '7e8dd671ca1ee7e3e7e4530f47658673506e67055762ca226bec634ff5fff2ca'
const REDIRECT_URL = 'http://localhost:3000/accept-login-marketplace/'
/**
 * DEVELOPMENT VERSION
 */
const SHOPEE_AUTH_HOST = 'https://partner.test-stable.shopeemobile.com'
/**
 * PRODUCTION VERSION
 */
// const SHOPEE_AUTH_HOST = 'https://partner.shopeemobile.com'

const SHOPEE_AUTH_PATH = '/api/v2/shop/auth_partner'
const SHOPEE_AUTH_TOKEN_URL = '/api/v2/auth/token/get'
const SHOPEE_GET_SHOP_PROFILE = '/api/v2/shop/get_profile'
const SHOPEE_REFRESH_TOKEN = '/api/v2/auth/access_token/get'
const UPDATE_PROFILE_SHOP = '/api/v2/shop/update_profile'
const UPLOAD_IMAGE = '/api/v2/media_space/upload_image'
const PRODUCT_LIST = '/api/v2/product/get_item_list'
const DELETE_ITEM = '/api/v2/product/delete_item'
const ADD_PRODUCT = '/api/v2/product/add_item'
const GET_CATEGORY_LIST = '/api/v2/product/get_category'
const GET_ATTRIBUTES_LIST = '/api/v2/product/get_attributes'
const GET_ITEM_LIMIT = '/api/v2/product/get_item_limit'
const GET_ITEM_BASE_INFO = '/api/v2/product/get_item_base_info'
const GET_ITEM_EXTRA_INFO = '/api/v2/product/get_item_extra_info'
const INIT_TIER_VARIATION = '/api/v2/product/init_tier_variation'
const UPDATE_TIER_VARIATION = '/api/v2/product/update_tier_variation'
const GET_MODEL_LIST = '/api/v2/product/get_model_list'
const ADD_MODEL_LIST = '/api/v2/product/add_model'
const UPDATE_MODEL_LIST = '/api/v2/product/update_model'
const DELETE_MODEL_LIST = '/api/v2/product/delete_model'
const UPDATE_PRICE = '/api/v2/product/update_price'
const UPDATE_STOCK = '/api/v2/product/update_stock'
const GET_ITEM_PROMOTION = '/api/v2/product/get_item_promotion'
const UPDATE_SIP_ITEM_PRICE = '/api/v2/product/update_sip_item_price'
const SEARCH_ITEM = '/api/v2/product/search_item'
const CATEGORY_RECOMMEND = '/api/v2/product/category_recommend'
const GET_ORDER_LIST = '/api/v2/order/get_order_list'
const GET_SHIPMENT_LIST = '/api/v2/order/get_shipment_list'
const GET_ORDER_DETAIL = '/api/v2/order/get_order_detail'
const SPLIT_ORDER = '/api/v2/order/split_order'
const UNSPLIT_ORDER = '/api/v2/order/unsplit_order'
const CANCEL_ORDER = '/api/v2/order/cancel_order'
const HANDLER_BUYER_CANCELATION = '/api/v2/order/handle_buyer_cancellation'
const ADD_INVOICE_DATA = '/api/v2/order/add_invoice_data'
const GET_RETURN_LIST = '/api/v2/returns/get_return_list'
const GET_RETURN_DETAIL = '/api/v2/returns/get_return_detail'
const GET_SHIPPING_PARAMETER = '/api/v2/logistics/get_shipping_parameter'
const GET_TRACKING_NUMBER = '/api/v2/logistics/get_tracking_number'
const SHIP_ORDER = '/api/v2/logistics/ship_order'
const UPDATE_SHIPPING_ORDER = '/api/v2/logistics/update_shipping_order'
const GET_SHIPPING_DOCUMENT_PARAMETER = 'api/v2/logistics/get_shipping_document_parameter'
const CREATE_SHIPPING_DOCUMENT ='/api/v2/logistics/create_shipping_document'
const GET_SHIPPING_DOCUMENT_RESULT ='/api/v2/logistics/get_shipping_document_result'
const GET_TRACKING_INFO = '/api/v2/logistics/get_tracking_info' 
const GET_ADDRESS_LIST = '/api/v2/logistics/get_address_list'
const GET_CHANNEL_LIST = '/api/v2/logistics/get_channel_list'
const UPDATE_CHANNEL = '/api/v2/logistics/update_channel'
const BATCH_SHIP_ORDER ='/api/v2/logistics/batch_ship_order'
const GET_UNBIND_ORDER_LIST ='/api/v2/first_mile/get_unbind_order_list'
const GET_DETAIL_DELIVERY ='/api/v2/first_mile/get_detail'
const GENERATE_FIRST_MILE_TRACKING_NUMBER = '/api/v2/first_mile/generate_first_mile_tracking_number'
const BIND_FIRST_MILE_TRACKING_NUMBER = '/api/v2/first_mile/bind_first_mile_tracking_number'
const UNBIND_FIRST_MILE_TRACKING_NUMBER ='/api/v2/first_mile/unbind_first_mile_tracking_number'
const GET_TRACKING_NUMBER_LIST = '/api/v2/first_mile/get_tracking_number_list'
const GET_WAYBILL ='/api/v2/first_mile/get_waybill'
const GET_CHANNEL_ORDER_LIST ='/api/v2/first_mile/get_channel_list' 
const ADD_DISCOUNT ='/api/v1/discount/add' 
const ADD_DISCOUNT_ITEM ='/api/v1/discount/items/add' 
const DELETE_DISCOUNT ='/api/v1/discount/delete' 
const DELETE_DISCOUNT_ITEM ='/api/v1/discount/item/delete' 
const GET_DISCOUNT_DETAIL ='/api/v1/discount/detail' 
const GET_DISCOUNT_LIST ='/api/v1/discounts/get' 
const UPDATE_DISCOUNT ='/api/v1/discount/update' 
const UPDATE_DISCOUNT_ITEM ='/api/v1/discount/items/update' 




const ShopeeAPI = {
    SHOPEE_PARTNER_ID : SHOPEE_PARTNER_ID,
    SHOPEE_PARTNER_KEY : SHOPEE_PARTNER_KEY,
    SHOPEE_AUTH_HOST : SHOPEE_AUTH_HOST,
    SHOPEE_AUTH_PATH : SHOPEE_AUTH_PATH,
    SHOPEE_AUTH_TOKEN_URL : SHOPEE_AUTH_TOKEN_URL,
    REDIRECT_URL : REDIRECT_URL,
    SHOPEE_GET_SHOP_PROFILE:SHOPEE_GET_SHOP_PROFILE,
    SHOPEE_REFRESH_TOKEN : SHOPEE_REFRESH_TOKEN,
    UPDATE_PROFILE_SHOP : UPDATE_PROFILE_SHOP,
    UPLOAD_IMAGE : UPLOAD_IMAGE,
    PRODUCT_LIST : PRODUCT_LIST,
    DELETE_ITEM:DELETE_ITEM,
    ADD_PRODUCT:ADD_PRODUCT,
    GET_CATEGORY_LIST : GET_CATEGORY_LIST,
    GET_ATTRIBUTES_LIST:GET_ATTRIBUTES_LIST,
    GET_ITEM_LIMIT : GET_ITEM_LIMIT,
    GET_ITEM_BASE_INFO : GET_ITEM_BASE_INFO,
    GET_ITEM_EXTRA_INFO:GET_ITEM_EXTRA_INFO,
    INIT_TIER_VARIATION : INIT_TIER_VARIATION,
    UPDATE_TIER_VARIATION:UPDATE_TIER_VARIATION,
    GET_MODEL_LIST : GET_MODEL_LIST,
    ADD_MODEL_LIST : ADD_MODEL_LIST,
    UPDATE_MODEL_LIST:UPDATE_MODEL_LIST,
    DELETE_MODEL_LIST:DELETE_MODEL_LIST,
    UPDATE_PRICE : UPDATE_PRICE,
    UPDATE_STOCK : UPDATE_STOCK,
    GET_ITEM_PROMOTION:GET_ITEM_PROMOTION,
    UPDATE_SIP_ITEM_PRICE : UPDATE_SIP_ITEM_PRICE,
    SEARCH_ITEM : SEARCH_ITEM,
    CATEGORY_RECOMMEND:CATEGORY_RECOMMEND,
    GET_ORDER_LIST:GET_ORDER_LIST,
    GET_SHIPMENT_LIST:GET_SHIPMENT_LIST,
    GET_ORDER_DETAIL:GET_ORDER_DETAIL,
    SPLIT_ORDER:SPLIT_ORDER,
    UNSPLIT_ORDER:UNSPLIT_ORDER,
    CANCEL_ORDER:CANCEL_ORDER,
    HANDLER_BUYER_CANCELATION:HANDLER_BUYER_CANCELATION,
    ADD_INVOICE_DATA:ADD_INVOICE_DATA,
    GET_RETURN_LIST:GET_RETURN_LIST,
    GET_RETURN_DETAIL:GET_RETURN_DETAIL,
    GET_SHIPPING_PARAMETER:GET_SHIPPING_PARAMETER,
    GET_TRACKING_NUMBER:GET_TRACKING_NUMBER,
    SHIP_ORDER:SHIP_ORDER,
    UPDATE_SHIPPING_ORDER:UPDATE_SHIPPING_ORDER,
    GET_SHIPPING_DOCUMENT_PARAMETER:GET_SHIPPING_DOCUMENT_PARAMETER,
    CREATE_SHIPPING_DOCUMENT:CREATE_SHIPPING_DOCUMENT,
    GET_SHIPPING_DOCUMENT_RESULT:GET_SHIPPING_DOCUMENT_RESULT,
    GET_TRACKING_INFO : GET_TRACKING_INFO,
    GET_ADDRESS_LIST:GET_ADDRESS_LIST,
    GET_CHANNEL_LIST: GET_CHANNEL_LIST,
    UPDATE_CHANNEL:UPDATE_CHANNEL,
    BATCH_SHIP_ORDER:BATCH_SHIP_ORDER,
    GET_UNBIND_ORDER_LIST:GET_UNBIND_ORDER_LIST,
    GET_DETAIL_DELIVERY:GET_DETAIL_DELIVERY,
    GENERATE_FIRST_MILE_TRACKING_NUMBER:GENERATE_FIRST_MILE_TRACKING_NUMBER,
    BIND_FIRST_MILE_TRACKING_NUMBER:BIND_FIRST_MILE_TRACKING_NUMBER,
    UNBIND_FIRST_MILE_TRACKING_NUMBER:UNBIND_FIRST_MILE_TRACKING_NUMBER,
    GET_TRACKING_NUMBER_LIST:GET_TRACKING_NUMBER_LIST,
    GET_WAYBILL:GET_WAYBILL,
    GET_CHANNEL_ORDER_LIST:GET_CHANNEL_ORDER_LIST,
    ADD_DISCOUNT:ADD_DISCOUNT,
    ADD_DISCOUNT_ITEM:ADD_DISCOUNT_ITEM,
    DELETE_DISCOUNT:DELETE_DISCOUNT,
    DELETE_DISCOUNT_ITEM:DELETE_DISCOUNT_ITEM,
    GET_DISCOUNT_DETAIL:GET_DISCOUNT_DETAIL,
    GET_DISCOUNT_LIST:GET_DISCOUNT_LIST,
    UPDATE_DISCOUNT:UPDATE_DISCOUNT,
    UPDATE_DISCOUNT_ITEM:UPDATE_DISCOUNT_ITEM
}

export default ShopeeAPI;