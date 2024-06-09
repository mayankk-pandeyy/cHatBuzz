import fruitImg from "../assets/fruit.svg"
import { IoMdEye } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";



function Signup(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function passwordHandler(){
        setShowPassword(!showPassword);
    }

    function confirmPasswordHandler(){
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="w-[35%] bg-[#333333] rounded-xl shadow-md mx-auto h-[95%]">
            <div className="w-[80%] mx-auto flex flex-col items-center gap-4 mt-10 bg">
                <div>
                    <img src={fruitImg} width={50}/>
                </div>
                <div className="text-2xl font-bold text-white font-poppins">
                    Welcome!
                </div>
                <div className="w-full mt-6">
                    <input 
                        type="text"
                        placeholder="Mayank Pandey"
                        className="w-full outline-none py-3 px-5 rounded-3xl bg-transparent border border-white text-white font-poppins"
                    />
                    <br/>
                    <br/>


                    <input 
                        type="text"
                        placeholder="mayankp7781@gmail.com"
                        className="w-full outline-none py-3 px-5 rounded-3xl bg-transparent border border-white text-white font-poppins"
                    />

                    <br/>
                    <br/>

                    <div className="flex items-center border border-white text-white font-poppins rounded-3xl px-5">
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Your Password"
                            className="w-full outline-none bg-transparent py-3"
                        />
                        <div className="text-3xl text-white cursor-pointer" onClick={passwordHandler}>
                            {
                                !showPassword ? (<IoMdEye />) : (<IoMdEyeOff />)
                            } 
                        </div>
                    </div>

                    <br/>

                    <div className="flex items-center border border-white text-white font-poppins rounded-3xl px-5">
                        <input 
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Your Password"
                            className="w-full outline-none bg-transparent py-3"
                        />
                        <div className="text-3xl text-white cursor-pointer" onClick={confirmPasswordHandler}>
                            {
                                !showConfirmPassword ? (<IoMdEye />) : (<IoMdEyeOff />)
                            }  
                        </div>
                    </div>
                    <br/>

                    <div className="flex items-center border border-white text-white font-poppins rounded-3xl px-5">
                        <input 
                            type="file"
                            accept="image/*"
                            className="w-full outline-none bg-transparent py-3"
                        />
                    </div>
                </div>
                <div className="bg-[#4269E2] px-6 py-3 rounded-3xl mt-4 text-white font-poppins font-bold flex items-center gap-2 cursor-pointer hover:animate-pulse">
                    Signup
                    <FaAngleDoubleRight />
                </div>
            </div>
        </div>
    );


}

export default Signup;