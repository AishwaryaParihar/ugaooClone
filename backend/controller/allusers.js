async function allUsers(req, res){
    try{
        console.log('userid all users',req.userId)
    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
          });
    }
}

module.exports = allUsers