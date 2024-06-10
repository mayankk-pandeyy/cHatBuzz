//Import Models

const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

exports.registerUser = async (req, res) => {
    try{
        // Fetch Data From req Body
        const {name, email, password, pic} = req.body;


        // If any field is missing
        if(!name || !email || !password){
            res.status(400).json({
                error : "Please Enter All the Fields"
            })
        }

        // Chack if user Exixts

        const userExists = await User.findOne({email});

        if(userExists){
            res.status(400).json({
                error : "Email Already Exists"
            })
        }else{
            const newUser = User.create({
                name, email, password, pic
            })
    
            // Send a json with a success flag
            res.status(200).json(
                {
                    success : true,
                    data : newUser,
                    message : "New user Created Successfully",
                    token : generateToken(newUser._id)
                }
            )
        }

    }catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json({
            success : false,
            data : "Unable to create the user",
            message : error.message
        })
    }
}