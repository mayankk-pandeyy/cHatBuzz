const User = require("../models/userModel");

// Define Route hnadler

exports.authUser = async (req, res) => {
    try{
        // Get email and password
        const {email, password} = req.body;

        // if any field is empty
        if(!email || !password){
            res.status(400).json({
                error : "Please Enter All the Fields"
            })
        }else{
            const user = await User.findOne({email});

            // Password Match Check

            let passwordMatch = (password == user.password);

            if(user && passwordMatch){
                res.json(
                    {
                        success: true,
                        id : user._id,
                        name : user.name,
                        email : user.email,
                        pic : user.image,
                        message : "Authentication Success"
                    }
                );
            }else{
                res.status(401).json({
                    success : false,
                    message : "Password do not match",
                })
            }
        }
    }catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json({
            success : false,
            data : "No user found",
            message : error.message
        })
    }
}