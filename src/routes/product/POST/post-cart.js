require('dotenv').config()
const mysql = require('../../../config/dbconfig')
const uuid = require('uuid');
const { postCartProduct } = require('../../../model/query')

exports.postCart = (req, res) => {
  const {id_customer, id_product, quantity} = req.body
  const created_on = new Date()
  const updated_on = new Date()
  const id_cart = uuid.v4()
  const query = postCartProduct
  const body = [id_cart, id_customer, id_product, quantity, created_on, updated_on]

  try {
    mysql.execute(query, body, (err, result, field)=>{
      if (result) {
          res.send({
            success: true,
            message: "Data Berhasil Ditambahkan",
          })
      } else if (err) {
          res.status(400).send({
            success: false,
            message: err
          })
      }
    })
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.toString() 
    })
  }
};