const multer = require('multer') 
const router = require('express').Router()
const { auth } = require('../utils/middleware');
const storage = multer.diskStorage(
  {destination : function(req, file, cb){
    cb(null, './storage/image')
  },
  filename : function(req, file, cb){
    cb(null, file.originalname)
  }
})
const upload = multer({storage:storage})
const uploadFile = upload.single('image')

const getProduct = require('./product/GET/get-product').getDataProduct
const getProductDetail = require('./product/GET/get-product-detail').getDataProductDetail
const getCartCustomer = require('./customer/GET/cart-customer').cartCustomer
const loginAdmin = require('./admin/POST/login').loginAdmin
const loginCustomer = require('./customer/POST/login').loginCustomer
const register = require('./customer/POST/register').register
const postProduct = require('./admin/POST/post-product').inputProduct
const postCart = require('./product/POST/post-cart').postCart
const updateProduct = require('./admin/PUT/put-product').updateProduct
const updateCart = require('./customer/PUT/count').updateCount
const deleteProduct = require('./admin/DELETE/delete-product').deleteDataProduct

router.get("/product/get-product", auth, getProduct)
router.get("/product/get-product-detail/:id", auth, getProductDetail)
router.get("/customer/cart-customer/:id", auth, getCartCustomer)
router.post("/admin/login", loginAdmin)
router.post("/customer/login", loginCustomer)
router.post("/customer/register", register)
router.post("/admin/post-product", auth, uploadFile, postProduct)
router.post("/product/post-cart", auth, postCart)
router.put("/admin/put-product/:id", auth, uploadFile, updateProduct)
router.put("/customer/count/:id", auth, updateCart)
router.delete("/admin/delete-product/:id", auth, deleteProduct)

module.exports = router