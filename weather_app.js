const request=require('request')

const url="http://api.weatherstack.com/current?access_key=3f1d10e6262f7cd0c9c43c7596620bf5&query=22.5726,88.3639"

request({ url: url},(err,response) =>{
    const data= JSON.parse(response.body)
    console.log(data.current.temperature)
})
