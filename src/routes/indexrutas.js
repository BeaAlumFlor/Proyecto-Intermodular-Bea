const { Router } = require("express"); //solo utiliza el trocito de las rutas
const router = Router(); //llama a ese trocito
const path_html = require("path"); //para acceder a rutas internas

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
  req.body = "consulta de datos"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req.body);
  res.json({
    descripcion: `Hola soy la primera ruta post sin formulario`,
  });
});

router.post("/rutapost2conformulario", (req, res) => {
  //función flecha
  req.body = "consulta de datos 2"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req);
  //res.send(`Hola soy la segunda ruta post`);
  res.sendFile(path_html.join(__dirname, "../Formulario1-AP8.html")); //llamo a la ruta llamada x
});

router.post("/rutapost3conformulario", (req, res) => {
  //función flecha
  req.body = "consulta de datos 3"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req.body);
  res.sendFile(path_html.join(__dirname, "../Formulario2-AP8.html")); //llamo a la ruta llamada x
});

router.post("/rutapost4conformulario", (req, res) => {
  //función flecha
  req.body = "consulta de datos 4"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req.body);
  res.sendFile(path_html.join(__dirname, "../Formulario3-AP8.html")); //llamo a la ruta llamada x
});

router.post("/rutapost5sinformulario", (req, res) => {
  //función flecha
  req.body = "consulta de datos 5"; //donde se podran consultar datos de un formulario almacenado de req
  console.log(`enviada una petición post`);
  console.log(req.body);
  res.send(`Hola soy la quinta ruta post`);
});

module.exports = router; //exportación para que pueda usarlo el servidor
