const express= require("express");
const https=require("https");
const app=express();


app.get("/", function(req,res){
  const url="https://api.openweathermap.org/data/2.5/weather?q=corvallis,us&appid=9b207cb3d539c4cde1cb63dbed674153&units=metric"
  https.get(url,function(response){
    console.log(response);

    response.on("data",function(data){
      const weatherData=JSON.parse(data)
      const w=weatherData.main.temp

      console.log(w);
      const wd=weatherData.weather[0].description
      console.log(wd);
      res.send("The mock is working."+data);

        })

  })

})


app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
