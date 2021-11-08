const bgm = new Audio();
// const img = document.getElementById("gazou");

const music_on = document.getElementById("music_on");
music_on.addEventListener("click", BgmOn);
const music_off = document.getElementById("music_off");
music_off.addEventListener("click", BgmOff);
// const next = document.getElementById("next");
// next.addEventListener("click", GetPhase);

// let phase = 0;
let mute = true;

let N = GetRandom(enemies.length) - 1;
let test = new battle(enemies[N].rate, enemies[N].name);
let round = battle.round;



function GetRandom(n) {
  const result = Math.floor(Math.random() * n) + 1;

  return result;
}

// let enemy = "";
// function GetPhase() {
//   const comment1 = document.getElementById('comment1');
//   const comment2 = document.getElementById('comment2');
//   const comment3 = document.getElementById('comment3');
//   if (round === 0 && phase === 0) {
//     enemy = enemies[n].name;
//   }

//   phase++;

//   if (round === 0 && phase === 1) {
//     comment1.textContent = "ルール";
//     comment2.textContent = "50%,60%,70%,80%,90%,100%継続率";
//     comment3.textContent = "各ラウンドで1〜100までの乱数取得";
//   }
//   if (round === 0 && phase === 2) {
//     comment1.textContent = "レバークリックで進む(連打不可予定)";
//     comment2.textContent = "乱数が継続率以下ならそのラウンド突破";
//     comment3.textContent = "現状小役による昇格抽選無し";
//   }

//   if (round === 0 && phase === 3) {
//     comment1.textContent = "次Gで対戦相手の表示";
//     comment2.textContent = "";
//     comment3.textContent = "";
//   }

//   if (round === 0 && phase === 4) {
//     round++;
//     phase = 0;

//     if (round === 1) {
//       // comment1.textContent = "継続率:" + enemies[n].rate + "％";
//       comment1.textContent = "対戦相手: " + enemies[n].name;
//       comment2.textContent = "継続率: " + enemies[n].rate + "%";
//       comment3.textContent = "今回の結果: " + test.win + "勝";
//       img.src = "images/" + enemy + "登場.jpg";
//       GetBgm(round);
//     }
//   }

//   if (round > 0) {
//     if (phase === 8) {
//       round++;
//       phase = 0;
//     }
//   }
//   if (round === 4) {
//     round = 1;
//   }


//   console.log("round: " + round);
//   console.log("phase: " + phase);
//   // GetImage();

//   return round;
// }

// function GetBgm(n) {
//   if (n === 1) {
//     bgm.src = sounds[n].src.一回;
//     bgm.play();// bgm追加
//     bgm.loop = false;
//     bgm.addEventListener('ended', function () {
//       bgm.src = sounds[n].src.ループ;
//       bgm.play();
//       bgm.loop = true;// bgm追加
//     });
//   } else {
//     bgm.src = sounds[n].src;// bgm追加
//     bgm.play();// bgm追加
//     bgm.loop = true;// bgm追加
//   }

//   if (!mute) {
//     bgm.volume = sounds[n].vol;
//   } else {
//     bgm.volume = 0;
//   }
// }

// function GetImage() {
//   // let images = [
//   //   "images/medium_thumb.png",
//   //   "images/original.gif",
//   //   "images/original (1).gif",
//   //   "images/medium.gif",
//   // ];
//   // img.src = images[round];

// }

function BgmOn() {
  // let round = battle.round;
  console.log(round);
  mute = false;
  if (round == 0) {
    bgm.src = sounds[round].src;// bgm追加
    bgm.play();// bgm追加
    bgm.loop = true;// bgm追加
    bgm.volume = sounds[round].vol;
  }

  document.getElementById("music_on").disabled = true;
  document.getElementById("music_off").disabled = false;
}

function BgmOff() {
  mute = true;
  bgm.volume = 0;
  document.getElementById("music_off").disabled = true;
  document.getElementById("music_on").disabled = false;
}
