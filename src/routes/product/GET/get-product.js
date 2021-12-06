require('dotenv').config()
const mysql = require('../../../config/dbconfig')
const { getProduct } = require('../../../model/query')

exports.getDataProduct = (req, res) => {
  const sql = getProduct

  try {
    mysql.execute(sql, [], (err, result, field) => {
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