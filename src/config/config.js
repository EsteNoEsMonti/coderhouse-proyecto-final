import * as dotenv from 'dotenv'

dotenv.config({
  path: 'src/config/.env',
})

//entorno
const NODE_ENV = process.env.NODE_ENV || 'development'

//server

const PORT = process.env.PORT || 8080
// const PORT = process.env.NODE_PORT || 8080

//persitencia
const PERSISTENCIA = process.env.NODE_PERSISTENCIA || 'mongoose'

const MONGODB_CNX_STR =
  process.env.NODE_MONGODB_CNX_STR || 'mongodb://127.0.0.1:27017/ecommerce'

//auth
const JWT_PRIVATE_KEY = process.env.NODE_JWT_PRIVATE_KEY
const COOKIE_KEY = process.env.NODE_COOKIE_KEY

const CLIENTID_GIT = process.env.NODE_CLIENTID_GIT
const CLIENTSCR_GIT = process.env.NODE_CLIENTSCR_GIT
const CALLBACK_URL_GIT = process.env.NODE_CALLBACK_URL_GIT

const SESSION_SECRET = process.env.NODE_SESSION_SECRET

//email
const PROD_CONFIG_EMAIL = {
  service: "gmail",
  port: 587,
  auth: { 
    user: process.env.NODE_EMAIL_USER, 
    pass: process.env.NODE_EMAIL_PASS 
  },
}

const TEST_CONFIG_EMAIL = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.NODE_TEST_EMAIL_USER,
    pass: process.env.NODE_TEST_EMAIL_PASS,
  },
}

let CONFIG_EMAIL
if (NODE_ENV === 'production') {
  CONFIG_EMAIL = PROD_CONFIG_EMAIL
} else {
  CONFIG_EMAIL = TEST_CONFIG_EMAIL
}

//views
const PATH_NEW_PRODUCT = process.env.NODE_PATH_NEW_PRODUCT
const PATH_PRODUCT = process.env.NODE_PATH_PRODUCT
const PATH_CARTS = process.env.NODE_PATH_CARTS
const PATH_LOGIN = process.env.NODE_PATH_LOGIN
const PATH_REGIS = process.env.NODE_PATH_REGIS
const PATH_CHAT = process.env.NODE_PATH_CHAT
const PATH_TICKET = process.env.NODE_PATH_TICKET
const PATH_FORGOT = process.env.NODE_PATH_FORGOT
const PATH_RECOVER = process.env.NODE_PATH_RECOVER
const PATH_PROFILE = process.env.NODE_PATH_PROFILE
const PATH_DOCUMENTS = process.env.NODE_PATH_DOCUMENTS
const PATH_USERS = process.env.NODE_PATH_USERS

export {
  NODE_ENV,
  PORT,
  PERSISTENCIA,
  MONGODB_CNX_STR,
  COOKIE_KEY,
  JWT_PRIVATE_KEY,
  CLIENTID_GIT,
  CLIENTSCR_GIT,
  CALLBACK_URL_GIT,
  SESSION_SECRET,
  CONFIG_EMAIL,
  PATH_CARTS,
  PATH_LOGIN,
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_REGIS,
  PATH_CHAT,
  PATH_TICKET,
  PATH_FORGOT,
  PATH_RECOVER,
  PATH_PROFILE,
  PATH_DOCUMENTS,
  PATH_USERS,
}
