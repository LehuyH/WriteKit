// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios')
exports.handler = async (event, context) => {

    const req = JSON.parse(event.body)
    const endpoint = "https://graphql.fauna.com/graphql"

    if(req.id == null || undefined){
      return {
        statusCode: 200,
        body: JSON.stringify({ success: false, error:"Could not find requsted theme." }),
      }
    }else{
      const res = await axios.post(endpoint,{
        query:`
       {
         findThemeByID(id: "${req.id}") {
           name
           author
           desc
           theme
         }
       }
       `
      },{headers:{
        "authorization": `Bearer ${process.env.DB}`
      }})

    
    const theme = res.data.data

    if(theme.findThemeByID !==null){
      return { statusCode: 200, body: JSON.stringify({success: true, data: theme.findThemeByID}) }
    }else{
      return { statusCode: 200, body: JSON.stringify({success: false, error:"Could not find requsted theme."}) }
    }
  }
    
  
}
