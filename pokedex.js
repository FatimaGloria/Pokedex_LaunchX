//Llamar al API
const fetchPokemon= () => {
    const pokeNameInput= document.getElementById("pokeName"); //Para solicitar info de la API a partir del Input
    let pokeName= pokeNameInput.value; //Valor se almacena en variable
    pokeName= pokeName.toLowerCase(); // Valor convertido en  minusculas para evitar error con mayusculas
    
    const url= `https://pokeapi.co/api/v2/pokemon/${pokeName}`; //dirección de la API con parametro de busqueda
    fetch(url).then((res) => { //Revisión carga de datos y prevención de errores
        if (res.status != "200") {  //Si hay un caso de error se hará lo siguiente
            console.log(res);
            pokeImage("./NoFound.png") // se despliega esta imagen de error/ pokemon no encontrado
        }
        else {
            return res.json();    // Si no hay error, regresa la información de la respuesta.
        }
    }).then((data) => {           // Solicita la información (API) de la respuesta.
        if (data) {
            console.log(data);    // Impresión en consola de la respuesta
            let pokeImg= data.sprites.front_default;   //ubicación de la imagen en el json
            pokeImage(pokeImg); //asociación de la función para el cambio de imagen.
            console.log(pokeImg); //impresión en consola (link)
            
            const pokeInfo= document.querySelector("#pokeInfo"); // Imprimir la siguiente información en el div pokeInfo
            let pokeDato1= data.abilities[0].ability.name;     //Localización de la información
            let pokeDato2= data.abilities[1].ability.name;     //Localización de la información
            pokeInfo.innerHTML= "Abilities: " + pokeDato1 + '\n' + pokeDato2; //Impresión de la info seleccionada en el div
            console.log(pokeDato1); // Impresión de la información en consola
            console.log(pokeDato2); // Impresión de la información en consola
        }
    });
}

const pokeImage= (url) => {
    const pokePhoto= document.getElementById("pokeImg"); // Función para el cambio de imagen
    pokePhoto.src= url;
}

    


