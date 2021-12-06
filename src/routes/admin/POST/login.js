require('dotenv').config()
const jwt = require('jsonwebtoken')
const mysql = require('../../../config/dbconfig')
const uuid = require('uuid');
const { loginAdminQuery, insertTokenAdmin } = require('../../../model/query')

exports.loginAdmin = (req, res) => {
  const {username, password} = req.body
  const user = loginAdminQuery

    mysql.execute(user, [username], (err, result, field)=>{
      const roles= result[0].role
      req.headers.role = roles
      if(result.length > 0){
          if(password === result[0].password){
              const auth = jwt.sign({username, roles}, process.env.APP_KEY)
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
                  msg: 'Incorrect Password'
              })
          }
      } else {
          res.status(404).send({
              success: false,
              msg: 'Username not Found'
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