const express = require("express"); //Variable que almacena a express ("como un objeto")
const app= express(); //Se inicializa el "objeto" express

app.set("port", process.env.PORT || 8080); //puerto de entrada, permitirá ver en internet - 8080 puerto de testeo

app.listen(app.get("port"), leerPuerto()); //Esta atento a lo que pasa en el puerto

function leerPuerto(){
    console.log(`Hola desde el puerto ${app.get("port")}`); //nos da el número de puerto
}


//Rutas
app.get("/", function(req, res) { //primer parametro nombre de ruta, el segundo lo que quiero que haga (funcion anonima, solo se usa aqui, no necesita nombre)
    console.log(`Aviso: alguien ha accedido al indice en el servidor`);
    res.send(`Hola, ¡Bienvenido!`) 
});

app.get("/rutaget1", function(req, res) { 
console.log(`Aviso: alguien ha accedido a la 1ª ruta get`);
res.send(`Hola soy la ruta 1ª`)
});

app.get("/rutaget2", (req, res) => { //función flecha
    console.log(`Aviso: alguien ha accedido a la 2ª ruta get`);
    res.send(`Hola soy la ruta 2ª`)
});

app.get("/rutaget3", (req, res) => { //función flecha
    console.log(`Aviso: alguien ha accedido a la 3ª ruta get`);
    res.send(`Hola soy la ruta 3ª`)
});

app.get("/rutaget4", (req, res) => { //función flecha
    console.log(`Aviso: alguien ha accedido a la 4ª ruta get`);
    res.send(`Hola soy la ruta 4ª`)
});

app.get("/rutaget5", (req, res) => { //función flecha
    console.log(`Aviso: alguien ha accedido a la 5ª ruta get`);
    res.send(`Hola soy la ruta 5ª`)
});