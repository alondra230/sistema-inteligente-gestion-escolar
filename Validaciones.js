<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Registro de Estudiantes</title>

<link rel="stylesheet" href="style.css">

</head>


<body>


<header>

<h1>🎓 Sistema Inteligente de Gestión Escolar</h1>


<nav>

<a href="index.html">Inicio</a>
<a href="nosotros.html">Nosotros</a>
<a href="estudiantes.html">Estudiantes</a>
<a href="notas.html">Notas</a>
<a href="contacto.html">Contacto</a>

</nav>

</header>



<section>


<h2>📝 Registro de Estudiantes</h2>


<form id="formulario">


<input type="text" id="nombre" placeholder="Nombre completo" required>


<input type="number" id="edad" placeholder="Edad" required>


<input type="text" id="dpi" placeholder="DPI" required>


<input type="text" id="direccion" placeholder="Dirección" required>



<select id="genero" required>

<option value="">Seleccione género</option>

<option value="Femenino">Femenino</option>

<option value="Masculino">Masculino</option>

</select>



<input type="text" id="carrera" placeholder="Carrera" required>



<input type="file" id="fotografia">



<input type="text" id="pais" placeholder="País" required>


<input type="text" id="departamento" placeholder="Departamento" required>


<input type="text" id="municipio" placeholder="Municipio" required>



<input type="text" id="grado" placeholder="Grado académico" required>


<input type="tel" id="telefono" placeholder="Teléfono" required>


<input type="email" id="correo" placeholder="Correo electrónico" required>



<h3>📚 Calificaciones</h3>


<input type="number" id="nota1" placeholder="Nota 1" min="0" max="100" required>


<input type="number" id="nota2" placeholder="Nota 2" min="0" max="100" required>


<input type="number" id="nota3" placeholder="Nota 3" min="0" max="100" required>



<button type="submit">
Guardar estudiante
</button>



</form>


</section>



<footer>

<p>
© 2026 Sistema Inteligente de Gestión Escolar
</p>

</footer>



<script src="validaciones.js"></script>

<script src="script.js"></script>


</body>

</html>
