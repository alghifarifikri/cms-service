require('dotenv').config()
const mysql = require('../../../config/dbconfig');
const { cart1, cart2, cart3 } = require('../../../model/query');

exports.cartCustomer = (req, res) => {
  const id_customer = req.params.id
  const sql = cart1
  const selectCount = cart2
  const cart = cart3

  try {
    mysql.execute(sql, [id_customer],(err,result1,field)=>{
      if (result1) {
        mysql.query(selectCount, [id_customer], (err,result,field)=>{
          const count = result[0].count
          let checkout = 0

          for (i = 0; i < count; i++) {
            let total = result1[i].price * result1[i].quantity
            checkout += total;
          }
          mysql.execute(cart, [id_customer],(err1,result,field)=>{
            if (result) {
              res.send({
                success: true,
                data: result,
                total: checkout
              })
            } else if (err1) {
              res.status(400).send({
                success: false,
                message_1: err1
              })
            }
          })
        })
      } else if (err) {
        res.status(400).send({
          success: false,
          message_2: err
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


  // try {
  //   mysql.execute(sql, [id_product], (err, result, field) => {
  //     if (result) {
  //       res.send({
  //         success: true,
  //         data: result
  //       })
  //     } else if (err) {
  //         res.status(400).send({
  //         success: false,
  //         message: err
  //       })
  //     }
  //   })
  // } catch (error) {
  //   console.log({error})
  //   res.status(400).json({ 
  //     success: false, 
  //     error: error.toString() 
  //   })
  // }
};