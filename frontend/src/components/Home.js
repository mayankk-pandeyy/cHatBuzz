import { useState } from "react";
import bgImage from "../assets/bgImage.svg"
import Login from "./Login";
import Signup from "./Signup";


function Home(){

    const [login, setLogin] = useState(true);

    function loginHandler(){
        setLogin(true);
    }

    function signupHandler(){
        setLogin(false);
    }

    return (
        <div className="w-[100vw] h-[100vh]" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="flex items-center w-full h-[100vh]">
                <div className="text-white flex items-center gap-2 ml-6 text-xl font-poppins font-semibold bg-[#111111] py-4 px-4 rounded-3xl">
                    <div className="cursor-pointer px-2 py-1 rounded-2xl" style={{backgroundColor : login ? "#4269E2" : ""}} onClick={loginHandler}>
                        Login
                    </div>
                    <div className="cursor-pointer px-2 py-1 rounded-2xl" style={{backgroundColor : login ? "" : "#4269E2"}} onClick={signupHandler}>
                        Signup
                    </div>
                </div>
                <div className="w-full h-full flex items-center">
                    {
                        login ? (<Login/>) : (<Signup/>)
                    }
                </div>
            </div>
        </div>
    );

}

export default Home;