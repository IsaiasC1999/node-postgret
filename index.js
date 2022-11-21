console.clear();
const gg = require('./operaciones');
const express = require('express');
const {GetAllPersonas,setInsertPersonas} = require('./Services/servicesPersonas')






const app = express();
const PORT = 3000;



app.listen(PORT,()=>console.log("Servidor Escuchando Puerto 3000"));
app.use(express.json())


app.get('/personas', async (req,res)=>{
   
    const personas = await GetAllPersonas();
    res.status(200).send(personas)

})

  

app.post('/persona', async (req,res) =>{
    console.log("llega aqui ")
    const {name,lastName,descrip} = req.body
    
    try {
        await setInsertPersonas(name,lastName,descrip);
        
    } catch (error) {
        console.log("error aqui");
    }
    res.send("termino")
})  

