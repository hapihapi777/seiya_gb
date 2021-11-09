const bgm = new Audio();
const img = document.getElementById("gazou");

document.getElementById("reload").addEventListener("click", Reload);

let mute = true;

let N = GetRandom(enemies.length) - 1;
let test = new battle(enemies[N].rate, enemies[N].name);


function GetRandom(n) {
  const result = Math.floor(Math.random() * n) + 1;

  return result;
}

function Reload() {
  window.location.reload();
}