const formulario = document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit", function(e){

e.preventDefault();


const estudiante = {

nombre: document.getElementById("nombre").value,

edad: document.getElementById("edad").value,

grado: document.getElementById("grado").value,

direccion: document.getElementById("direccion").value,

telefono: document.getElementById("telefono").value,

correo: document.getElementById("correo").value,

nota1: Number(document.getElementById("nota1").value),

nota2: Number(document.getElementById("nota2").value),

nota3: Number(document.getElementById("nota3").value)

};



const promedio = ((estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3).toFixed(1);


estudiante.promedio = promedio;


if(promedio >= 61){

estudiante.estado = "Aprobado ✅";

}else{

estudiante.estado = "Reprobado ❌";

}



let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];


estudiantes.push(estudiante);


localStorage.setItem("estudiantes", JSON.stringify(estudiantes));


alert("Estudiante registrado correctamente");


formulario.reset();


});


}




const tabla = document.querySelector("#tabla tbody");


if(tabla){


let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];


estudiantes.forEach(function(estudiante){


const fila = document.createElement("tr");


fila.innerHTML = `

<td>${estudiante.nombre}</td>

<td>${estudiante.grado}</td>

<td>${estudiante.promedio}</td>

<td>${estudiante.estado}</td>

<td>${estudiante.telefono}</td>

<td>${estudiante.correo}</td>

<td>${estudiante.direccion}</td>

`;


tabla.appendChild(fila);



});


}
