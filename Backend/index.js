const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user")
const accountRouter = require("./routes/account");

app.use(cors());
app.use(express.json())

app.use("/api", userRouter)
app.use("/api/account", accountRouter);

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})