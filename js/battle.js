class battle {
  constructor(rate, name) {
    this.rate = rate;
    this.name = name;

    this.win = 0;
    this.lose = false;

    this.round = 0;
    this.phase = 0;

    this.Init();
  }

  Init() {

    this.GetWin();

    console.log("継続率" + this.rate + "今回のwinは" + this.win);

    this.phase = 0;

    const next = document.getElementById("next");
    next.addEventListener('click', () => {
      this.GetBranch();
    });
    const music_on = document.getElementById("music_on");
    music_on.addEventListener('click', () => {
      this.BgmOn();
    });
    const music_off = document.getElementById("music_off");
    music_off.addEventListener('click', () => {
      this.BgmOff();
    });

    const comment1 = document.getElementById('comment1');
    const comment2 = document.getElementById('comment2');
    const comment3 = document.getElementById('comment3');

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

  }

  GetBranch() {
    let katisuu = this.win;
    
    this.phase++;

    if (this.round === 0 && this.phase === 4) {
      this.round++;
      this.phase = 0;
    }
    
    if (this.phase === 9) {
      this.round++;
      this.phase = 0;
    }
    if (this.round === 0) this.GetRule(this.phase);
    if (this.round === 1) this.story_win(this.phase);

    if (this.round === 1 && this.phase === 0) {
      this.GetBgm();

      img.src = "images/" + this.name + "登場.jpg";
    }

    if (katisuu === 3) katisuu = 2;
    if (this.round > katisuu + 1) {
      console.log("end");
      document.getElementById("next").classList.add("noclick"); // 攻撃不可
    } else {
      console.log(this.round + "-" + this.phase);
    }

  }

  GetRule(p) {

    const text = [
      [""],
      [
        "ルール",
        "50%,60%,70%,80%,90%,100%継続率",
        "各ラウンドで1〜100までの乱数取得",
      ],
      [
        "レバークリックで進む(連打不可予定)",
        "乱数が継続率以下ならそのラウンド突破",
        "現状小役による昇格抽選無し",
      ],
      [
        "次Gで対戦相手の表示",
        "　",
        "　",
      ],
    ];

    comment1.textContent = text[p][0];
    comment2.textContent = text[p][1];
    comment3.textContent = text[p][2];
  }

  story_win(p) {
    // 続く処理
    const text = [
      [
        "対戦相手: " + this.name,
        "継続率: " + this.rate + "%",
        "今回の結果: " + this.win + "勝",
      ],
      ["対峙", "　", "　"],
      ["AorBコメ", "　", "　"],
      ["2がAならBコメ、2がBならAコメ", "　", "　"],
      ["拳のぶつかり合い(星矢競り勝ち)", "　", "　"],
      ["seiyaの攻撃準備", "　", "　"],
      ["seiyaの攻撃(弱中強)", "　", "　"],
      ["敵吹き飛ぶ", "　", "　"],
      ["敵の感想or最後ならアテナのためにも〜", "　", "　"],

    ];

    comment1.textContent = text[p][0];
    comment2.textContent = text[p][1];
    comment3.textContent = text[p][2];
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

  GetBgm() {
    let r = this.round;

    if (r === 1) {
      bgm.src = sounds[r].src.一回;
      bgm.play();// bgm追加
      bgm.loop = false;
      bgm.volume = sounds[r].vol;
      bgm.addEventListener('ended', function () {
        bgm.src = sounds[r].src.ループ;
        bgm.play();
        bgm.loop = true;// bgm追加
        bgm.volume = sounds[r].vol;
      });
    } else {
      bgm.src = sounds[r].src;// bgm追加
      bgm.play();
      bgm.loop = true;// bgm追加
      bgm.volume = sounds[r].vol;
    }
  }

  BgmOn() {
    this.GetBgm();
    let r = this.round;

    mute = false;
    bgm.volume = sounds[r].vol;

    document.getElementById("music_on").disabled = true;
    document.getElementById("music_off").disabled = false;
  }

  BgmOff() {
    mute = true;
    bgm.volume = 0;
    document.getElementById("music_off").disabled = true;
    document.getElementById("music_on").disabled = false;
  }

}


