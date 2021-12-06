require('dotenv').config()
const mysql = require('../../../config/dbconfig')
const { getProductDetail } = require('../../../model/query')

exports.getDataProductDetail = (req, res) => {
  const id_product = req.params.id
  const sql = getProductDetail

  try {
    mysql.execute(sql, [id_product], (err, result, field) => {
      if (result) {
        res.send({
          success: true,
          data: result
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