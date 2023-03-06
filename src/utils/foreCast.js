const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=ca8db7d20f4383b0afa55035f68c7806&query=37.8267,-122.4233&units=f'
// const url='http://api.weatherstack.com/current?access_key=ca8db7d20f4383b0afa55035f68c7806&query=37.8267,-122.4233&units=f'
// request({url:url,json:true},(error,response,body)=>{
//     console.log('It is currently',body.current.temperature,'degrees out.','There is',body.current.precip,'% chance of rain.')
// })

const foreCast=(latitude,longitutde,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=ca8db7d20f4383b0afa55035f68c7806&query='+latitude+','+longitutde
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find weather of location. Try another search!',undefined)
        }
        else{
            callback(undefined,{
                temperature: body.current.temperature,
                precipitation: body.current.precip,
                location: body.location.name
            })
        }
    })
}

module.exports=foreCast