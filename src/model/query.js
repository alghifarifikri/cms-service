const getProduct = `SELECT * FROM product`
const getProductDetail = `SELECT * FROM product WHERE id_product = ?`
const loginAdminQuery = `SELECT * FROM admin WHERE username = ?`
const loginCustomerQuery = `SELECT * FROM customer WHERE email = ?`
const insertTokenAdmin = `insert into revoked_token (token, revoked, created_on, update_on) values (?,?,?,?)`
const inputProductAdmin = `INSERT INTO product (id_product, product_name, price, description, image, categories, total_product, created_on, updated_on) VALUES (?,?,?,?,?,?,?,?,?)`
const updateProductAdmin = `UPDATE product SET product_name = COALESCE(?, product_name), description = COALESCE(?, description), price = COALESCE(?, price), 
                            total_product = COALESCE(?, total_product), image  = COALESCE(?, image), categories = COALESCE(?, categories), updated_on = ? WHERE id_product = ?`
const deleteProductAdmin = `DELETE from product WHERE id_product = ?`
const postCartProduct = `INSERT INTO cart (id_cart, id_customer, id_product, quantity, created_on, updated_on) VALUES (?,?,?,?,?,?)`
const cart1 = `SELECT product.price, cart.quantity FROM cart INNER JOIN product on cart.id_product = product.id_product WHERE id_customer = ?`
const cart2 = `SELECT COUNT(product.price) AS count FROM cart INNER JOIN product on cart.id_product = product.id_product WHERE id_customer = ?`
const cart3 = `SELECT customer.username, customer.id_customer, product.id_product, product.image, product.product_name, product.price, cart.quantity, product.ratings FROM cart 
                INNER JOIN product ON cart.id_product = product.id_product
                INNER JOIN customer ON cart.id_customer = customer.id_customer WHERE cart.id_customer = ?`
const count = `UPDATE cart SET quantity = ? WHERE id_cart = ?`

exports.getProduct =  getProduct
exports.getProductDetail =  getProductDetail
exports.loginAdminQuery =  loginAdminQuery
exports.loginCustomerQuery =  loginCustomerQuery
exports.insertTokenAdmin =  insertTokenAdmin
exports.inputProductAdmin =  inputProductAdmin
exports.updateProductAdmin =  updateProductAdmin
exports.deleteProductAdmin =  deleteProductAdmin
exports.postCartProduct =  postCartProduct
exports.cart1 =  cart1
exports.cart2 =  cart2
exports.cart3 =  cart3
exports.count =  count