class battle {
  constructor(rate, name, win) {
    this.rate = rate;
    this.name = name;

    this.win = 0;

    this.round = 0;
    this.phase = 0;

    this.Init();
  }

  Init() {

    this.GetWin();
    // this.GetBgm(this.round);

    
    console.log("継続率" + this.rate + "今回のwinは" + this.win);
    
    this.phase = 0;
    // for (let i = 0; i < this.win + 1; i++) {
    //   for (let j = 0; j < 8; j++) {
    //     this.GetBranch(); 
    //   }
    // }
    const next = document.getElementById("next");
    next.addEventListener('click', () => {
      // this.phase++;
      this.GetBranch();
  });
    const music_on = document.getElementById("music_on");
    music_on.addEventListener('click', () => {
      // this.phase++;
      // this.BgmOn();
  });
    const music_off = document.getElementById("music_off");
    music_off.addEventListener('click', () => {
      // this.phase++;
      // this.BgmOff();
  });
    // ("click", phase++); 

// next.addEventListener("click", function () {
//   this.phase++;

  // if(this.round == this.win && this.phase == 8) {
  //   console.log("end");
  //   document.getElementById("next").disabled = true;
  // } else {
  //   if(this.phase === 8) {
  //     this.round++;
  //     this.phase = 0;
  //   }
    // console.log(this.round + "-" + this.phase);
  // }

// });

  //   const comment1 = document.getElementById('comment1');
  // const comment2 = document.getElementById('comment2');
  // const comment3 = document.getElementById('comment3');
  // if (this.round === 0 && this.phase === 0) {
    // enemy = enemies[n].name;
  // }

  // this.phase++;

  // if (this.round === 0 && this.phase === 1) {
  //   comment1.textContent = "ルール";
  //   comment2.textContent = "50%,60%,70%,80%,90%,100%継続率";
  //   comment3.textContent = "各ラウンドで1〜100までの乱数取得";
  // }
  // if (this.round === 0 && this.phase === 2) {
  //   comment1.textContent = "レバークリックで進む(連打不可予定)";
  //   comment2.textContent = "乱数が継続率以下ならそのラウンド突破";
  //   comment3.textContent = "現状小役による昇格抽選無し";
  // }

  // if (this.round === 0 && this.phase === 3) {
  //   comment1.textContent = "次Gで対戦相手の表示";
  //   comment2.textContent = "";
  //   comment3.textContent = "";
  // }

  // if (this.round === 0 && this.phase === 4) {
  //   this.round++;
  //   this.phase = 0;

  //   if (this.round === 1) {
  //     // comment1.textContent = "継続率:" + enemies[n].rate + "％";
  //     comment1.textContent = "対戦相手: " + enemies[n].name;
  //     comment2.textContent = "継続率: " + enemies[n].rate + "%";
  //     comment3.textContent = "今回の結果: " + test.win + "勝";
  //     img.src = "images/" + enemy + "登場.jpg";
  //     // GetBgm(this.round);
  //   }
  // }

  // if (this.round > 0) {
  //   if (this.phase === 8) {
  //     this.round++;
  //     this.phase = 0;
  //   }
  // }
  // if (this.round === 4) {
  //   this.round = 1;
  // }


  // console.log("round: " + this.round);
  // console.log("phase: " + this.phase);

  }

  GetWin() {
    for (let i = 0; i < 3; i++) {
      let num = GetRandom(100);
      if (num <= this.rate) {
        this.win++;
        console.log("num:" + num, "win:" + this.win);
      } else {
        console.log("num:" + num, "lose");
        break;
      }
    }
    return this.win;
  }

  GetBranch() {
    if (this.round == 0 && this.phase == 0) {
      this.GetBgm(this.round);      
    }
    this.phase++;
    if (this.phase === 8) {
      this.round++;
      this.phase = 0;
    }

    if(this.round > this.win) {
      console.log("end");
      document.getElementById("next").disabled = true;
    } else {
      console.log(this.round  + "-" + this.phase);
    }
    // console.log(this.round,  + "-" + this.phase);

    return this.round;
  }

//   GetBgm(n) {
//     if (n === 1) {
//       bgm.src = sounds[n].src.一回;
//       bgm.play();// bgm追加
//       bgm.loop = false;
//       bgm.addEventListener('ended', function () {
//         bgm.src = sounds[n].src.ループ;
//         bgm.play();
//         bgm.loop = true;// bgm追加
//       });
//     } else {
//       bgm.src = sounds[n].src;// bgm追加
//       bgm.play();// bgm追加
//       bgm.loop = true;// bgm追加
//     }
  
//     if (!mute) {
//       bgm.volume = sounds[n].vol;
//     } else {
//       bgm.volume = 0;
//     }
//   }

//   BgmOn() {
//   mute = false;
//   if (round == 0) {
//     bgm.src = sounds[round].src;// bgm追加
//     bgm.play();// bgm追加
//     bgm.loop = true;// bgm追加
//     bgm.volume = sounds[round].vol;
//   }

//   document.getElementById("music_on").disabled = true;
//   document.getElementById("music_off").disabled = false;
// }

// BgmOff() {
//   mute = true;
//   bgm.volume = 0;
//   document.getElementById("music_off").disabled = true;
//   document.getElementById("music_on").disabled = false;
// }

  story_win() {
    // 続く処理

    // 1 対峙
    // 2 AorBコメ
    // 3 2がAならBコメ、2がBならAコメ
    // 4 拳のぶつかり合い(星矢競り勝ち)
    // 5 seiyaの攻撃準備
    // 6 seiyaの攻撃(弱中強)
    // 7 敵吹き飛ぶ
    // 8 敵の感想or最後ならアテナのためにも〜

  }

  story_lose() {
    // 絶対に星矢が攻撃を受けて倒れる

    // 1 対峙
    // 2 AorBコメ
    // 3 2がAならBコメ、2がBならAコメ
    // 4 拳のぶつかり合い(負け確定)
    // 5 Bの攻撃準備
    // 6 Bの攻撃(弱中強)
    // 7 星矢吹き飛ぶ(倒れる)
    // 8 終了(暗くなる&動かせない&消化ラウンドと乱数表示の処理)

    // 
    //     

  }



}


