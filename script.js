const formulario = document.getElementById("formulario");


if(formulario){


formulario.addEventListener("submit", function(e){


e.preventDefault();



const estudiante = {

nombre: document.getElementById("nombre").value,

edad: document.getElementById("edad").value,

dpi: document.getElementById("dpi").value,

direccion: document.getElementById("direccion").value,

genero: document.getElementById("genero").value,

carrera: document.getElementById("carrera").value,

pais: document.getElementById("pais").value,

departamento: document.getElementById("departamento").value,

municipio: document.getElementById("municipio").value,

grado: document.getElementById("grado").value,

telefono: document.getElementById("telefono").value,

correo: document.getElementById("correo").value,

nota1: Number(document.getElementById("nota1").value),

nota2: Number(document.getElementById("nota2").value),

nota3: Number(document.getElementById("nota3").value)

};



const promedio = (
(estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3
).toFixed(2);



estudiante.promedio = promedio;



if(promedio >= 61){

estudiante.estado = "Aprobado ✅";

}else{

estudiante.estado = "Reprobado ❌";

}




let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];


estudiantes.push(estudiante);


localStorage.setItem(
"estudiantes",
JSON.stringify(estudiantes)
);



alert("Estudiante registrado correctamente");


formulario.reset();



});


}





const tabla = document.querySelector("#tablaDatos");



if(tabla){


let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];



estudiantes.forEach(function(estudiante){



let fila = document.createElement("tr");



fila.innerHTML = `

<td>${estudiante.nombre}</td>

<td>${estudiante.dpi}</td>

<td>${estudiante.carrera}</td>

<td>${estudiante.promedio}</td>

<td>${estudiante.estado}</td>

<td>${estudiante.municipio}</td>

<td>${estudiante.correo}</td>

`;



tabla.appendChild(fila);



});


}
