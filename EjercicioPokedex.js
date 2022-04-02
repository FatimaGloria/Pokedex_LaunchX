const fetchPokemon= () => {
    const url= `https://pokeapi.co/api/v2/pokemon/pikachu`;
    fetch (url).then ((res) => {
        //console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg= data.sprites.front_default;
        console.log(pokeImg)
    })
}

//fetchPokemon();

const pokeImage= (url) => {
    const pokeImg= document.getElementById("pokeImg");
    pokeImg.scr= url;
}
pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

const imprimir= () =>{
    const pokeName= document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("hola " + pokeInput);
}



/*const fetchPokemon= () => {
    const pokeNameInput= document.getElementById("pokeName");
    let pokeName= pokeNameInput.value;
    pokeName= pokeName.toLowerCase();
    const url= `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./NoFound.png")
            pokeInformacion("Error: Asegurate de escribir el nombre correctamente.")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg= data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);   
        }

    }).then ((data) =>{
            let pokeInfo= data.abilities;
            pokeInformacion(pokeInfo);
            console.log(pokeInfo);
        })
    } 

const pokeImage= (url) => {
    const pokePhoto= document.getElementById("pokeImg");
    pokePhoto.src= url;
}*/


/*
const pokeInformacion = (pokeInfo) => {
    const pokeDatos= document.getElementById("pokeInfo");
    pokeDatos= pokeInfo;
} */


//let pokeInfo= data.abilities;
//pokeInformacion(pokeInfo);

/*const pantalla= document.querySelector("#pokeInfo");
            const pokeDatos= (data) => `<li> ${abilities.ability} </li>`;
            pantalla.innerHTML= `<ul> ${pokeDatos} </ul>`;*/