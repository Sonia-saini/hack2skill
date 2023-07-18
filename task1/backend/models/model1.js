const mongoose=require("mongoose")
const model1Schema=mongoose.Schema({
full_name: String,
email: String,
city: String,
url: String,
number:Number
})
const Data1Model=mongoose.model("model1",model1Schema)
module.exports={
Data1Model
}
