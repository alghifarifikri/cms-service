require('dotenv').config()
const mysql = require('../../../config/dbconfig')
const uuid = require('uuid');
const { inputProductAdmin } = require('../../../model/query')

exports.inputProduct = (req, res) => {
  const image = (req.file.originalname)
  const {product_name, price, description, total_product, categories} = req.body
  const created_on = new Date()
  const updated_on = new Date()
  const id_product = uuid.v4()
  const query = inputProductAdmin
  const body = [id_product, product_name, price, description, image, categories, total_product, created_on, updated_on]

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