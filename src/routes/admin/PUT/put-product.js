require('dotenv').config()
const jwt = require('jsonwebtoken')
const mysql = require('../../../config/dbconfig')
const uuid = require('uuid');
const { updateProductAdmin } = require('../../../model/query')

exports.updateProduct = (req, res) => {
  const id_product = req.params.id
  const image = req.file ? (req.file.originalname) : null
  const product_name = req.body.product_name === undefined ? null : req.body.product_name
  const description = req.body.description === undefined ? null : req.body.description
  const price = req.body.price === undefined ? null : req.body.price
  const total_product = req.body.total_product === undefined ? null : req.body.total_product
  const categories = req.body.categories === undefined ? null : req.body.categories
  const updated_on = new Date()
  const body = [product_name, description, price, total_product, image, categories, updated_on, id_product]
  const sql = updateProductAdmin

  try {
    mysql.execute(sql, body, (err, result, field) => {
      if (result) {
        res.send({
          success: true,
          message: 'Data Berhasil Diperbarui'
        })
      } else if (err) {
          res.status(400).send({
          success: false,
          message: err
        })
      }
    })
  } catch (error) {
    console.log({error})
    res.status(400).json({ 
      success: false, 
      error: error.toString() 
    })
  }
};