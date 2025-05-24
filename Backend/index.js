const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user")
const accountRouter = require("./routes/account");

const allowedOrigins = ["http://localhost:5173/" , "https://secure-money-transfer-web-application.vercel.app/"]

app.use(cors({
    origin: function (origin, callback) {
      // allow requests with no origin like mobile apps or curl
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));



app.use(express.json())

app.use("/api", userRouter)
app.use("/api/account", accountRouter);

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})