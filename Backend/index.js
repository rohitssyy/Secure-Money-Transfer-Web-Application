const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user")
const accountRouter = require("./routes/account");

const allowedOrigins = ["http://localhost:5173",
  "https://secure-money-transfer-web-application.vercel.app",
  "https://secure-money-transfer-web-application-55vin1866.vercel.app",
  "https://secure-money-transfer-web-a-git-d40487-rohits-projects-faa774b9.vercel.app"]

  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  };


app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))
app.use(cors(corsOptions));


app.use(express.json())

app.use("/api", userRouter)
app.use("/api/account", accountRouter);

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})