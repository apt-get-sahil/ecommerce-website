const mongoose = require("mongoose");

const connectDatabase =()=> {
    mongoose.connect("mongodb://localhost:27017/Ecommerce").then((data)=>{
    console.log(`mongodb connected with server: ${data.connection.host}`)
}).catch((err)=> {
    console.log(err);
})
}

module.exports = connectDatabase;