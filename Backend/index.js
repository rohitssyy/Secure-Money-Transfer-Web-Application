const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user")
const accountRouter = require("./routes/account");

const allowedOrigins = ["http://localhost:5173/" , "https://secure-money-transfer-web-application.vercel.app/"]


app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))



app.use(express.json())

app.use("/api", userRouter)
app.use("/api/account", accountRouter);

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})