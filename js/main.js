const bgm = new Audio();
const img = document.getElementById("gazou");

LoadTest();

document.getElementById("reload").addEventListener("click", Reload);

let mute = true;

let N = GetRandom(enemies.length) - 1;
let test = new battle(enemies[N].rate, enemies[N].name[0]);


function GetRandom(n) {
  const result = Math.floor(Math.random() * n) + 1;

  return result;
}

function Reload() {
  window.location.reload();
}

function removeDuplicateValues([...array]) { // 重複削除の関数
  return array.filter((value, index, self) => self.indexOf(value) === index);
}


function LoadTest() {
  BgmLoadTest(sounds[1].src.一回);
  BgmLoadTest(sounds[1].src.ループ);
  BgmLoadTest(sounds[4]);

}

function BgmLoadTest(s) {
  bgm.src = s;
  bgm.loop = false;
  bgm.volume = 0;
  // bgm.onloadstart();
  // bgm.play();
}