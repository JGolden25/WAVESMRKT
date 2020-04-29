let admin = (req,res,next) =>{
    if(req.user.role === 0){
        return res.send('Not admin, cannot access.')
    }
    next();
}

module.exports = { admin }