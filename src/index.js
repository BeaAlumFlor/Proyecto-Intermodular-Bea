const express = require("express"); //Variable que almacena a express ("como un objeto")
const app = express(); //Se inicializa el "objeto" express
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080); //puerto de entrada, permitirá ver en internet - 8080 puerto de testeo

app.use(morgan("dev")); //modulo middleware, controla datos que pasan entre front y backend
app.use(express.urlencoded({ extended: false }));

app.listen(app.get("port"), leerPuerto()); //Esta atento a lo que pasa en el puerto

function leerPuerto() {
  console.log(`Hola desde el puerto ${app.get("port")}`); //nos da el número de puerto
}

//acceso a las rutas
app.use(require("./routes/indexrutas"));
