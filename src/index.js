const express = require("express"); //Variable que almacena a express ("como un objeto")
const app = express(); //Se inicializa el "objeto" express
const morgan = require("morgan");
const cors = require("cors");

app.set("port", process.env.PORT || 8080); //puerto de entrada, permitirá ver en internet - 8080 puerto de testeo
app.set("json spaces",2);

app.use(morgan("dev")); //modulo middleware, controla datos que pasan entre front y backend
app.use(express.urlencoded({ extended: false })); //para que pueda entender los datos del formulario
app.use(express.json()); //para poder enviar y recibir peticions post en formato json
app.use(cors()); //"salvoconducto" que me permite el acceso sin darme error

//app.use(require("./index"));
app.use("/api/MySQL", require("./routes/MySQL"));


app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

//app.listen(app.get("port"), leerPuerto()); //Esta atento a lo que pasa en el puerto

function leerPuerto() {
  console.log(`Hola desde el puerto ${app.get("port")}`); //nos da el número de puerto
}

//acceso a las rutas
app.use(require("./routes/indexrutas"));
