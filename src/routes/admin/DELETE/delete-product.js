require('dotenv').config()
const mysql = require('../../../config/dbconfig')
const { deleteProductAdmin } = require('../../../model/query')

exports.deleteDataProduct = (req, res) => {
  const id_product = req.params.id
  const sql = deleteProductAdmin

  try {
    mysql.execute(sql, [id_product], (err, result, field) => {
      if (result) {
        res.send({
          success: true,
          message: 'Data Berhasil Dihapus'
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