const app = require("./app");
const dotenv = require("dotenv");
const PORT=4000;
const   connectDatabase = require("./config/database")
//config
//d//otenv.config({path:"backend/config/config.env"})

//connecting to database
connectDatabase();
app.listen(PORT,()=>{
    console.log('server is woorking on 4000')
})