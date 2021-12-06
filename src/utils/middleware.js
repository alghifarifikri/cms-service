const jwt = require('jsonwebtoken')
const mysql = require('../config/dbconfig')

const auth = (req, res, next)=>{
    if(
        req.headers['authorization'] &&
        req.headers['authorization'].startsWith('Bearer')
    ){
        const jwt_token = req.headers['authorization'].substr(7)
        req.headers.auth_token = jwt_token
            mysql.execute('SELECT token from revoked_token WHERE token = ? and revoked = 1', [jwt_token], (err, result, field)=>{
                if(err){
                    res.status(400).send({
                        success : false,
                        msg : err
                    })
                } else {
                    if (result.length > 0) {
                        res.send({
                            success : false, 
                            msg : 'session expired '
                        })
                    } else {
                        try {
                            const user = jwt.verify(jwt_token, process.env.APP_KEY)
                            req.auth = user
                            next()
                        } catch (e) {
                            res.status(400).send({
                                success: false,
                                msg: e
                            })
                        }        
                    }
                }
            })
        } else {
            res.send({
                success: false,
                msg: 'Akses Ditolak !'
            })
    }
}

module.exports = {auth}