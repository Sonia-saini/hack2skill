const mongoose=require("mongoose")
const model2Schema=mongoose.Schema({
full_name: String,
email: String,
team_name: String,
})
const Data2Model=mongoose.model("model2",model2Schema)
module.exports={
Data2Model
}
