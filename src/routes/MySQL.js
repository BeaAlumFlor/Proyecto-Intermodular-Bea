const { Router } = require("express"); //solo utiliza el trocito de las rutas
const router = Router(); //llama a ese trocito
const mysql =require("mysql");

const db =mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"", 
  database: "dbusuarios",
});
db.connect((error) => {
  if(error) {
    console.log("error: " + error);
  } else {
    console.log("conexión establecida");
  }
});

//RUTAS BD
router.get("/getSQL", (req, res) => {
    console.log(db);
    let sql = "SELECT * FROM usuarios";
    let query = db.query(sql,(err, result) => {
      console.log(results);
      res.json(result);
    });
  });
  
  router.post("/postSQL", (req, res) => {
    let post = {usuario: "prueba", pontraseña: 12345 };
    let sql = "INSERT INTO usuarios SET ?";
    let query = db.query(sql, post, (err, result) => {
      console.log(result);
      res.json(result);
    });
  });

  
  module.exports = router