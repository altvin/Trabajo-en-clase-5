//Ejercicio 1 

function EjercicioUno(){
document.getElementById('createDiv').addEventListener('click', function() { 
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Soy un nuevo div';
    newDiv.style.backgroundColor = 'lightblue';
    document.body.appendChild(newDiv);
});
}

EjercicioUno();

// Ejercicio 2
// Cambia color de fondo a un párrafo

document.getElementById('changeColor').addEventListener('click', function() {    
    document.body.getElementById('myBox').style.backgroundColor = 'rgb(144, 100, 184)';
});

//Ejercicio 3
//Agregar y remover clases

document.getElementById('addClass').addEventListener('click', function() {    
    document.body.getElementById('myBox').classList.remove('highlight');
});
document.getElementById('removeClass').addEventListener('click', function() {    
    document.body.getElementById('myBox').classList.remove('highlight');
});

//Ejercicio 4
//Obtener lo que el usuario escribe en la caja de texto y que al darle click cree un nuevo elemento de la lista

document.getElementById('addItem').addEventListener('click', function() {    
    let newItem = document.createElement('li');
    let inputValue = document.getElementById('itemInput').value; //Obtener todo lo que el usuario vaya a escribir
    newItem.textContent = inputValue;
    document.body.getElementById('myList').appendChild(newItem); 
    document.body.getElementById('itemInput').value = ''; //Limpiar el input
});

//Ejercicio 5
//Mostrar y ocultar un texto

document.getElementById('toggleBtn').addEventListener('click', function() {    
    let paragraph = document.getElementById('myText');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
      paragraph.style.display = 'none';
    }            
});
