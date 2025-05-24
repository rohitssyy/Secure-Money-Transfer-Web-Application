import { useEffect, useState } from "react";
import { AppBar } from "../../components/AppBar";
import { Balance } from "../../components/Balance";
import { Users } from "../../components/Users";
import api from "../api";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function funcAPI() {
      const token = localStorage.getItem("token");
      const response = await api.get(
        "/account/balance",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      setBalance(data.Balance);
    }
    funcAPI();
  }, []);

  return (
    <>
      <AppBar></AppBar>
      <div className="mx-6 mt-4">
        <Balance value={balance}></Balance>
        <Users></Users>
      </div>
    </>
  );
}
