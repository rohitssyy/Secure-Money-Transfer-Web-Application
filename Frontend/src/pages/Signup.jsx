import { useState } from "react";
import { ButtonC } from "../../components/ButtonC";
import { ButtonWarn } from "../../components/ButtonWarn";
import { Heading } from "../../components/Heading";
import { Inputbox } from "../../components/Inputbox";
import { Subeading } from "../../components/subheading";
import { Inputpassword } from "../../components/inputpassword";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex bg-slate-300 h-screen justify-center ">
      <div className="flex flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
          <Heading label={"Sign Up"}></Heading>
          <Subeading
            label={"Enter your information to create an account"}
          ></Subeading>

          <Inputbox
            label={"First Name"}
            placeholder={"Rohit"}
            onChange={(e) => setFirstName(e.target.value)}
          ></Inputbox>

          <Inputbox
            label={"Last Name"}
            placeholder={"Singh"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Inputbox>

          <Inputbox
            label={"Email"}
            placeholder={"rohitssyy@gmail.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Inputbox>

          <Inputpassword
            label={"Password"}
            placeholder={"i am not telling you my password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Inputpassword>

          <ButtonC
            label={"Sign up"}
            onclick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3001/api/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              } catch (error) {
                console.error(
                  "Signup Error:",
                  error.response?.data || error.message
                );
              }
            }}
          ></ButtonC>
        </div>
        <ButtonWarn
          label={" Already have an account? "}
          linktext={"Sign In"}
          to={"/Signin"}
        ></ButtonWarn>
      </div>
    </div>
  );
}
