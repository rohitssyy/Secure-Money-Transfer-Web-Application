import { Heading } from "../../components/Heading";
import { Inputbox } from "../../components/Inputbox";
import { Subeading } from "../../components/subheading";
import { ButtonC } from "../../components/ButtonC";
import { ButtonWarn } from "../../components/ButtonWarn";
import { Inputpassword } from "../../components/inputpassword";
import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export function Signin() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password , setPassword] = useState("")
    

    return (
        <div className="flex bg-slate-300 h-screen justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

            <Heading label={"Sign In"}></Heading>
            <Subeading label={"Enter your credentials to access your account"}></Subeading>
                    <Inputbox label={"Email"} placeholder={"Enter your email id"}
                    onChange={e => {setUsername(e.target.value)}}></Inputbox>
                    
                    <Inputpassword label={"Password"} placeholder={"Enter the password"}
                        onChange={e => {setPassword(e.target.value)}}></Inputpassword>
                    
            
                    <ButtonC label={"Sign In"}
                        onclick={async () => {
                            const response = await axios.post("http://localhost:3001/api/signin", {
                                username,
                                password
                            })
                            console.log(response.data)
                        localStorage.setItem("token", response.data.Token)
                        navigate("/dashboard")
                        }}>   </ButtonC>
            </div>
            <ButtonWarn label={"New Here?"} linktext={"Sign Up"} to={"/Signup"}></ButtonWarn>
                </div>
            
        </div>
    )
}