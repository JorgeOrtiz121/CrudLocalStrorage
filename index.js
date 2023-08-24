
document.getElementById("formulario").addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();
    const name = document.getElementById("Nombre").value;
    console.log(name);
    const apellido = document.getElementById("Apellido").value;
    console.log(apellido);
    const edad = document.getElementById("Edad").value;
    console.log(edad);
    const profesion = document.getElementById("Profesion").value;
    console.log(profesion);
   
    var listapersonas;
    if (localStorage.getItem("listapersonas") == null) {
        listapersonas = [];
   } else {
       listapersonas = JSON.parse(localStorage.getItem("listapersonas"));
         console.log(typeof listapersonas);
        listapersonas.push({
            name: name,
            apellido: apellido,
            edad: edad,
            profesion: profesion
        });
        console.log(listapersonas);
   }
  
    

  

   localStorage.setItem("listapersonas", JSON.stringify(listapersonas));

   verpersonajes();
});



function verpersonajes() {
    var listapersonas;
    if (localStorage.getItem("listapersonas") == null) {
        listapersonas = [];
        alert("No hay nada");
        console.log(listapersonas);
    } else {
        listapersonas = JSON.parse(localStorage.getItem("listapersonas"));
        console.log(listapersonas);

    }

    var bloque = "";
    listapersonas.forEach(function (element, index) {
        bloque += "<tr>";
        bloque += "<td>" + element.name + "</td>";
        bloque += "<td>" + element.apellido + "</td>";
        bloque += "<td>" + element.edad + "</td>";
        bloque += "<td>" + element.profesion + "</td>";
        bloque += '<td> <button onclick="Delete(' + index + ')" class="btn btn-danger">Delete</button> <button onclick="Update(' + index + ')" class="btn btn-primary">Update</button> </td>';
        bloque += "</tr>";
    });

    document.querySelector(".table-active").innerHTML = bloque;
}

function Delete(index) {
    var listapersonas = JSON.parse(localStorage.getItem("listapersonas"));
    console.log(listapersonas);
    listapersonas.splice(index, 1);
    localStorage.setItem("listapersonas", JSON.stringify(listapersonas));
    verpersonajes();
}

function Update(index) {
    var listapersonas = JSON.parse(localStorage.getItem("listapersonas"));
    var name = listapersonas[index].name;
    var apellido = listapersonas[index].apellido;
    var edad = listapersonas[index].edad;
    var profesion = listapersonas[index].profesion;
    document.getElementById('Nombre').value=name;
    document.getElementById('Apellido').value=apellido;
    document.getElementById('Edad').value=edad;
    document.getElementById('Profesion').value=profesion;

    document.getElementById("supersubmit").onclick=function(){
       
        name = document.getElementById("Nombre").value;
        console.log(name);
        apellido = document.getElementById("Apellido").value;
        console.log(apellido);
        edad = document.getElementById("Edad").value;
        console.log(edad);
        profesion = document.getElementById("Profesion").value;
        console.log(profesion);
        console.log("Estoy aqui");
        listapersonas[index] = {
            name: name,
            apellido: apellido,
            edad: edad,
            profesion: profesion
        };
        console.log(listapersonas[index]);
        localStorage.setItem("listapersonas", JSON.stringify(listapersonas));
         verpersonajes();
   
        };

    
    
}
