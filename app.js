const express = require("express")

const app = express()



function doWork(){

}

app.get('/',(req,res)=>{
    res.send('yoooooo')
})


app.listen('3000',()=>{
    console.log('running in 3000')
})