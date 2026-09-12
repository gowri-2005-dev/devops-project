const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req,res) => {
    res.send("Hello! My devops project is running on AWS EC2");
});
app.listen(PORT,() => {
    console.log(`server is runnning on port ${PORT}`);
});
