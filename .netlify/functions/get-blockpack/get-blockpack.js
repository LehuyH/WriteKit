// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios')
exports.handler = async (event, context) => {

    const req = JSON.parse(event.body)
    const endpoint = "https://graphql.fauna.com/graphql"

    if(req.id == null || undefined){
      return {
        statusCode: 200,
        body: JSON.stringify({ success: false, error:"Could not find requsted blockPack." }),
      }
    }else{
      const res = await axios.post(endpoint,{
        query:`{
          findBlockPackByID(id:"${req.id}"){
            name
            author
            desc
            version
            blocks{
              name
              types{
                name
                prompt
                desc
                color
                starters
              }
            }
          }
        }`
      },{headers:{
        "authorization": `Bearer ${process.env.DB}`
      }})

    const blockPack = res.data.data

    if(blockPack.findBlockPackByID !==null){
      return { statusCode: 200, body: JSON.stringify({success: true, data: blockPack.findBlockPackByID}) }
    }else{
      return { statusCode: 200, body: JSON.stringify({success: false, error:"Could not find requsted blockPack."}) }
    }
  }
    
}
  