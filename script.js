let nombre =  prompt("Ingrese el nombre del jugador: ");
let cantJugadas = parseInt(prompt("Ingrese cantidad de jugadas: "));
let jugada; //declaración de variable que esta en bloque do while
let tipo =["Piedra","Papel","Tijeras"]; //arreglo para mostrar en el alert
let emojis = ["\u{1F44A}", "\u{270B}", "\u{270C}\u{FE0F}"]; //arreglo para mostrar emojis en los alert
let ganada = 0, perdida = 0, empatada = 0; //declaración de variables que esta en bloque for
for (i = 1; i <= cantJugadas; i++) { //controla cantidad de jugadas

  
  do {
    jugada = parseInt(prompt(`elije tu jugada 1=Piedra ${emojis[0]}, 2=Papel ${emojis[1]}, 3=Tijeras ${emojis[2]}`));
  } while (jugada > 3 || jugada < 1); //Control de opciones que no sea mayor a 3 o menor a 1

  let resultado = Math.floor(Math.random() * 3 + 1); //número random sumando uno para que salga entre 1 a 3

  
  if (jugada != resultado) {    //preguntamos si es distinta la jugada sobre el resultado random
    if (                        //If que para jugada ganada 1=Piedra, 2=Papel, 3=Tijeras
      (jugada === 1 && resultado === 3) ||
      (jugada === 2 && resultado === 1) ||
      (jugada === 3 && resultado === 2)
    ) {
      ganada++;
      alert(`Felicidades ${nombre} ganaste!!!\n Tu: ${tipo[jugada-1]}  ${emojis[jugada-1]} vs   CPU: ${tipo[resultado-1]}  ${emojis[resultado-1]}`);
    } else if (                 //else if para jugada perdida 1=Piedra, 2=Papel, 3=Tijeras
      (jugada === 1 && resultado === 2) ||
      (jugada === 2 && resultado === 3) ||  
      (jugada === 3 && resultado === 1)
    ) {
      perdida++;
      alert(`${nombre}, lo siento perdiste!!!\n Tu: ${tipo[jugada-1]}  ${emojis[jugada-1]} vs   CPU: ${tipo[resultado-1]}  ${emojis[resultado-1]}`); //se resta 1 a jugada y resultado para que coincida con el indice del arreglo
    }
  } else {
    empatada++;
    alert(`${nombre} empataste!!!\n Tu: ${tipo[jugada-1]}  ${emojis[jugada-1]} vs   CPU: ${tipo[resultado-1]}  ${emojis[resultado-1]}`); //si la jugada y el resultado son iguales es empate
  }
}
alert(`De las ${cantJugadas} jugadas:\nGanaste: ${ganada} \nPerdiste: ${perdida} \nEmpataste: ${empatada} `) //mensaje resumen de resultados
