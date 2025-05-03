const express = require("express");
var server = express();

const mongoose = require("mongoose");
const router = express.Router();

const cors = require("cors");
server.use(express.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/proj_db").then(() => {
  console.log("connected succes");
});

const empData = new mongoose.Schema({
  name: { type: String },
  email: { email: String },
});

const empModel = mongoose.model("empData", empData);
router.post("/sendData", async (req, res) => {
  try {
    const { name, email } = req.body;
    const empData = await empModel.create({ name, email });
    res.status(201).send(empData);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/getData",async(req,res)=>{
    try{
        const data=await empModel.find();
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send()
    }
})
server.use(router);
server.listen(8080, () => {
  console.log("8080");
});
