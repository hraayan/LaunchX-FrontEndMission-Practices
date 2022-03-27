// window.onload = function(){
//     alert("HOla Pokedex")

// }
const img = document.getElementById("pokeImg");
const names = document.getElementById("name");
const pokeId = document.getElementById("number");
const tipo = document.getElementById("tipo");
const move_1 = document.getElementById("mov-1");
const move_2 = document.getElementById("mov-2");
const move_3 = document.getElementById("mov-3");
const move_4 = document.getElementById("mov-4");
const stat_1 = document.getElementById("stat-1");
const stat_2 = document.getElementById("stat-2");
const stat_3 = document.getElementById("stat-3");
const stat_4 = document.getElementById("stat-4");

const getPokemon = () => {
    const search = document.getElementById("search");
    let pokeName = search.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) =>{
        
        if(res.status != "200"){
            img.src = "https://i.pinimg.com/originals/4e/5b/6b/4e5b6ba7a446f24be639163d5b58ecdc.gif"
        }else{
            return res.json();
        }
        console.log(res);
        
    }).then((data) =>{
        let pokeImg = data.sprites.front_default;
        img.src = pokeImg;
        let pokename = data.forms[0].name;
        names.innerHTML = pokename;
        let number = data.id
        pokeId.innerHTML = number;
        let type = data.types[0].type.name;  
        tipo.innerHTML = type; 

        // movimientos
        if( data.moves[0] != undefined){
            move_1.innerHTML = data.moves[0].move.name;
        }else{
            console.log("no encontrado");
            move_1.innerHTML = " ";
        }
        if( data.moves[1] != undefined){
            move_2.innerHTML = data.moves[1].move.name;
        }else{
            console.log("no encontrado");
            move_2.innerHTML = " ";
        }
        if( data.moves[2] != undefined){
            move_3.innerHTML = data.moves[2].move.name;
        }else{
            console.log("no encontrado");
            move_3.innerHTML = " ";
        }  

        // estadisticas
        if( data.stats[0] != undefined){
            let stat1 = data.stats[0].stat.name + " " + data.stats[0].base_stat;
            stat_1.innerHTML = stat1;
            //console.log("Estadisticas: "+ data.stats[0].stat.name + " " + data.stats[0].base_stat);
        }else{
            console.log("no encontrado");
            stat_1.innerHTML = " ";
        }
        if( data.stats[1] != undefined){
            let stat2 = data.stats[1].stat.name + " " + data.stats[1].base_stat;
            stat_2.innerHTML = stat2;
            //console.log("Estadisticas: "+ data.stats[0].stat.name + " " + data.stats[0].base_stat);
        }else{
            console.log("no encontrado");
            stat_2.innerHTML = " ";
        }
        if( data.stats[2] != undefined){
            let stat3 = data.stats[2].stat.name + " " + data.stats[2].base_stat;
            stat_3.innerHTML = stat3;
            //console.log("Estadisticas: "+ data.stats[0].stat.name + " " + data.stats[0].base_stat);
        }else{
            console.log("no encontrado");
            stat_3.innerHTML = " ";
        }

    })
}
// getPokemon();

// const renderPoke =() => {
//     const name = document.getElementById("name");
// }