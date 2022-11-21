const {pool} = require('../conection');


const GetAllPersonas = async ()=>{

    try {
        const res = await pool.query("select * from personas")
        return res.rows;
    } catch (error) {
        console.log("Entro aqui")
    }

}


const setInsertPersonas = async (name , last_name , history) =>{

       console.log("servivi entre ---------------------------") 
    try {
         console.log("serviviv try")
          const res =  await pool.query(`INSERT INTO public.personas(
            firts_name, last_name, history)
           VALUES ('gerano', 'alem', 'blabalvlaasdasdasd');`);
            console.log("uraaaaaaaaaaaaaaaaaaaaa")
          return res;
            console.log( "-------------------------------------------------------" +res);
    } catch (error) {
        console.log(error)
    }

}



module.exports = {GetAllPersonas,setInsertPersonas}