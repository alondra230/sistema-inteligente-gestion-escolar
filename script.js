*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#FFF5F8;
color:#444;
line-height:1.6;
}

header{
background:linear-gradient(90deg,#F8A5C2,#E75480);
padding:20px;
text-align:center;
color:white;
position:sticky;
top:0;
}

nav{
margin-top:15px;
}

nav a{
color:white;
text-decoration:none;
margin:0 12px;
font-weight:bold;
transition:.3s;
}

nav a:hover{
color:#FFE4EC;
}

.hero{
text-align:center;
padding:70px 20px;
}

.hero h2{
font-size:40px;
color:#C2185B;
margin-bottom:15px;
}

.hero p{
max-width:700px;
margin:auto;
margin-bottom:30px;
}

.btn{
display:inline-block;
padding:12px 25px;
background:#E75480;
color:white;
text-decoration:none;
border-radius:30px;
transition:.3s;
}

.btn:hover{
background:#C2185B;
}

section{
width:90%;
max-width:1000px;
margin:40px auto;
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
}

h2{
color:#C2185B;
margin-bottom:20px;
text-align:center;
}

form{
display:grid;
gap:15px;
}

input{
padding:12px;
border:2px solid #F8A5C2;
border-radius:10px;
font-size:16px;
}

button{
background:#E75480;
color:white;
border:none;
padding:12px;
border-radius:10px;
font-size:16px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#C2185B;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

th{
background:#E75480;
color:white;
padding:12px;
}

td{
padding:10px;
text-align:center;
border-bottom:1px solid #ddd;
}

footer{
background:#E75480;
color:white;
text-align:center;
padding:20px;
margin-top:40px;
}

@media(max-width:768px){

nav a{
display:block;
margin:10px 0;
}

.hero h2{
font-size:30px;
}

section{
width:95%;
}

}
