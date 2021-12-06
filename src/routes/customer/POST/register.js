require('dotenv').config()
const bcrypt = require('bcryptjs')
const mysql = require('../../../config/dbconfig')
const uuid = require('uuid');

exports.register = (req, res) => {
  const {username, password, email} = req.body
  const enc_pass = bcrypt.hashSync(password)
  const created_on = new Date()
  const updated_on = new Date()
  const id_customer = uuid.v4()
  const sql = `SELECT username from customer WHERE username = ?`

  try {
    mysql.execute(sql, [username], 
      (err, result, field)=>{  
        if(result == ''){
            const sql1 = `INSERT INTO customer (id_customer, role, username, email, password, created_on, updated_on) VALUES (?,?,?,?,?,?,?)`
            try {
              mysql.execute(sql1, [id_customer, 2, username, email, enc_pass, created_on, updated_on], (err2, result2, field)=>{
                if (result2) {
                  res.send({
                      success : true,
                      message : 'Register Berhasil, Silahkan Login'
                  })
                } else if (err2) {
                  console.log({err2})
                  res.status(400).json({
                    success: false, 
                    error: err2.toString() 
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
        } else {
          res.status(400).send({
            success : false,
            message : 'Username atau Email Sudah Terdaftar'
          })
        }              
    })
  } catch(error) {

  }
};