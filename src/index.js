const express = require("express"); //Variable que almacena a express ("como un objeto")
const app= express(); //Se inicializa el "objeto" express

app.set("port", process.env.PORT || 8080); //puerto de entrada, permitirá ver en internet - 8080 puerto de testeo

app.listen(app.get("port"), leerPuerto()); //Esta atento a lo que pasa en el puerto

function leerPuerto(){
    console.log(`Hola desde el puerto ${app.get("port")}`); //nos da el número de puerto
}

//acceso a las rutas
app.use(require("./routes/indexrutas"));