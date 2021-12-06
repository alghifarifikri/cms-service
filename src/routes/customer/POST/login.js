require('dotenv').config()
const jwt = require('jsonwebtoken')
const mysql = require('../../../config/dbconfig')
const bcrypt = require('bcryptjs')
const { loginCustomerQuery, insertTokenAdmin } = require('../../../model/query')

exports.loginCustomer = (req, res) => {
  const {email, password} = req.body
  const user = loginCustomerQuery

    mysql.execute(user, [email], (err, result, field)=>{
      const roles = result[0].role
      const id_customer = result[0].id_customer 
      const username = result[0].username
      req.headers.role = roles
      if(result.length > 0){
          if(bcrypt.compareSync(password, result[0].password)){
              const auth = jwt.sign({id_customer, username, email, roles}, process.env.APP_KEY)
              const created_on = new Date()
              const update_on = new Date()
              const token = auth
              const revoked = 0
              const priv = insertTokenAdmin
              const body = [token, revoked, created_on, update_on]

              mysql.execute(priv, body, (error, result, field) => {
                  if (result) {
                      res.send({
                          success: true,
                          token: auth,
                          data : roles
                      })
                  } else {
                      res.status(400).send({
                          success: false,
                          message: 'Login Gagal, Coba Lagi'
                      })
                  }
              })
          } else {
              res.status(400).send({
                  success: false,
                  message: 'Password atau Email Salah'
              })
          }
      } else {
          res.status(404).send({
              success: false,
              msg: 'Email Tidak Ditemukan'
          })
      }
      if (err) {
        res.status(400).send({
          success: false,
          message: err
        })
      }
  })
};