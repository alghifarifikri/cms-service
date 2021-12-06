require('dotenv').config()
const mysql = require('../../../config/dbconfig')
const { count } = require('../../../model/query')

exports.updateCount = (req, res) => {
  const id_cart = req.params.id
  const {quantity} = req.body
  const sql = count
  const body = [quantity, id_cart]

  try {
    mysql.execute(sql, body, (err, result, field)=>{
      if (result) {
        res.send({
          success : true, 
          message : 'Data Berhasil Diperbarui'})
      } else if (err) {
        res.status(400).send({
          success: false,
          message: err
        })
      }
    })
  } catch(error) {
    console.log({error})
    res.status(400).json({ 
      success: false, 
      error: error.toString() 
    })
  }

};