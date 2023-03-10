const request=require('request')

const geoCode = (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibGFkaXJvaGl0IiwiYSI6ImNsZHVtNDcwYTAyc2wzdXJ6YzdxaDl2aDYifQ.pyH1U3yMeu3qjFSIDPV7bA&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        }
        else if(body.features.length===0){
            callback('Unable to find location. Try another search!',undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
            })
        }
    })
}

module.exports=geoCode