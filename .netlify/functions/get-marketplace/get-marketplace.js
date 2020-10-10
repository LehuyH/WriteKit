// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios')
exports.handler = async (event, context) => {

    const req = JSON.parse(event.body)
    const endpoint = "https://graphql.fauna.com/graphql"

    if(["blockPack","theme"].includes(req.type) == false){
      return {
        statusCode: 200,
        body: JSON.stringify({ success: false, error:"Could not find requsted theme." }),
      }
    }else{
      const res = await axios.post(endpoint,{
        query:`
        {
            ${req.type}ByOffical(official: true, _size: 500) {
              data {
                name
                desc
                _id
              }
            }
          }
          
       `
      },{headers:{
        "authorization": `Bearer ${process.env.DB}`
      }})

    
    const listing = res.data.data

    if(listing[`${req.type}ByOffical`] !== null){
      return { statusCode: 200, body: JSON.stringify({success: true, data: listing[`${req.type}ByOffical`].data }) }
    }else{
      return { statusCode: 200, body: JSON.stringify({success: false, error:"Could not find requsted theme."}) }
    }
  }
    
  
}
