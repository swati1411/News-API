var express=require("express")
const newsRouter=express.Router()
const axios=require('axios')

newsRouter.get('',async(req,res)=>{
    try{
            const newsAPI = await axios.get("https://test.spaceflightnewsapi.net/api/v2/articles")
            res.render('news',{ articles: newsAPI.data  })
        }catch(err){
            if(err.response){
                res.render('news',{ articles: null })
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.header)
            }else{
                console.error('error',err.message)
            }
        }
})

module.exports=newsRouter