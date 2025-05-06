const { Router } = require("express"); //solo utiliza el trocito de las rutas
const router = Router(); //llama a ese trocito
const mysql =require("mysql");


//const path_html = require("path"); //para acceder a rutas internas

const OpenAI = require("openai");

//Rutas
router.get("/", function (req, res) {
  //primer parametro nombre de ruta, el segundo lo que quiero que haga (funcion anonima, solo se usa aqui, no necesita nombre)
  console.log(`Aviso: alguien ha accedido al indice en el servidor`); //mensaje para consola
  res.send(`Hola, ¡Bienvenido!`); //mensaje para usuario
});

router.get("/rutaget1", (req, res) => {
  //función flecha (eficiencia en código)
  console.log(`Aviso: alguien ha accedido a la 1ª ruta get`);
  res.send(`Hola soy la ruta 1ª`);
});

router.get("/rutaget2", (req, res) => {
  //función flecha
  console.log(`Aviso: alguien ha accedido a la 2ª ruta get`);
  res.send(`Hola soy la ruta 2ª`);
});

router.get("/rutaget3", (req, res) => {
  //función flecha
  console.log(`Aviso: alguien ha accedido a la 3ª ruta get`);
  res.send(`Hola soy la ruta 3ª`);
});

router.get("/rutaget4", (req, res) => {
  //función flecha
  console.log(`Aviso: alguien ha accedido a la 4ª ruta get`);
  res.send(`Hola soy la ruta 4ª`);
});

router.get("/rutaget5", (req, res) => {
  //función flecha
  console.log(`Aviso: alguien ha accedido a la 5ª ruta get`);
  res.send(`Hola soy la ruta 5ª`);
});

router.get("/rutagetjson", (req, res) => {
  //función flecha
  console.log(`Aviso: alguien ha accedido a la ruta con json`);
  res.json({
    nombre: "Hola soy la ruta JSON",
  });
});

router.post("/rutapost1", (req, res) => {
  //función flecha
  //req.body = "consulta de datos"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req.body);
  res.json({
    descripcion: `Hola soy la primera ruta post sin formulario`,
  });
});

router.post("/rutapost2conformulario", (req, res) => {
  //función flecha
  //req.body = "consulta de datos 2"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post con formulario`);
  //Todo lo siguiente me devolverá en consola
  console.log(req.body.nombre);
  console.log(req.body.apellidos);
  console.log(req.body.email);
  console.log(req.body.sexo);
  console.log(req.body.nacimiento);
  console.log(req.body.contraseña);
  console.log(req.body.movil);
  res.redirect("https://beaalumflor.github.io/Web-Frontend/");
  //res.sendFile(path_html.join(__dirname, "../Formulario1-AP8.html")); //llamo a la ruta llamada x
});

router.post("/rutapost3conformulario", (req, res) => {
  //función flecha
  //req.body = "consulta de datos 3"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post con formulario`);
  console.log(req.body); //muestra todo lo que rellenas en el formulario
  //res.redirect("http://127.0.0.1:5500/Proyecto/src/Formularios/Formulario2-AP8.html");
  res.send("El formulario ha sido enviado")
  //res.sendFile(path_html.join(__dirname, "../Formulario2-AP8.html")); //llamo a la ruta llamada x
});

router.post("/rutapost4conformulario", (req, res) => {
  //función flecha
  //req.body = "consulta de datos 4"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post con formulario`);
  console.log(req.body);
  res.json({
    nombre: req.body.Nombre,
    apellidos: req.body.Apellidos,
    email: req.body.Email,
    fecha_nacimiento: req.body.nacimiento,
    condición: req.body.Condiciones,
  }) //mostrará en la página un json con las cosas indicadas

});

router.post("/rutapost5sinformulario", (req, res) => {
  //función flecha
  req.body = "consulta de datos 5"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req.body);
  res.send(`Hola soy la quinta ruta post`);
});

router.post("/rutaPOST_AI", (req, res) => {
  const openai = new OpenAI({
    apiKey: ""
      
  });

  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "developer",
        content: "Eres un ordenador provocador, divertido y sabelotodo" + req.body.pregunta,
      },
    ],
  });

  completion.then((result) => {
    res.send(result.choices[0].message);
  });
});

module.exports = router; //exportación para que pueda usarlo el servidor
