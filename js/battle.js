class battle {
  constructor(rate, name) {
    this.rate = rate;
    this.name = name;

    this.sound = false;

    this.conti = 0;
    this.win = false;
    this.end = false;

    this.round = 0;
    this.phase = 0;

    this.story = [];

    this.Init();
  }

  Init() {

    this.GetWin();
    console.log("継続率" + this.rate + "今回の継続回数は" + this.conti);

    const comment1 = document.getElementById('comment1');
    const comment2 = document.getElementById('comment2');
    const comment3 = document.getElementById('comment3');

    // this.phase = 0;

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




  }

  GetWin() {
    this.story.push(this.GetRule());
    for (let i = 0; i < 3; i++) {
      let num = GetRandom(100);
      this.story[0][0].push(num);
      if (num <= this.rate) {
        this.story.push(this.story_win(this.conti));
        this.conti++;

        console.log("num:" + num, "continuation:" + this.conti);
        if (i == 2) {
          this.win = true;
          console.log(this.win);
        }
      } else {
        this.story.push(this.story_lose(this.conti));

        console.log("num:" + num, "lose");
        break;
      }
    }
  }

  DoTest(r, p) {
    comment1.textContent = this.story[r][p][0];
    comment2.textContent = this.story[r][p][1];
    comment3.textContent = this.story[r][p][2];
  }
  DoTest2(r, p) {

    comment1.textContent = this.story[r][p].コメ.a;
    comment2.textContent = this.story[r][p].コメ.b;
    comment3.textContent = this.story[r][p].コメ.c;
    img.src = this.story[r][p].src;
  }

  GetBranch() {
    this.phase++;

    if (this.round === 0 && this.phase === 4) {
      this.round++;
      this.phase = 0;
    }
    if (this.phase === 9) {
      this.round++;
      this.phase = 0;
    }

    if (this.round === 0 && this.phase > 0) {
      this.DoTest(this.round, this.phase);
      console.log(this.round + "-" + this.phase);
    }

    if (this.win) this.conti = 2;
    if (this.round > 0) {
      if (this.round > this.conti + 1) {
        this.end = true;
        bgm.volume = 0.2;
        console.log("end");
        let str = "乱数→ ";
        for (let i = 0; i < this.story[0][0].length; i++) {
          if(i > 0) str += ", ";
          str += "ラウンド"  + (i + 1) + ": " + this.story[0][0][i];
        }
        comment1.textContent = "継続率: " + this.rate + "％";
        comment2.textContent = str;
        comment3.textContent = "END";

        console.log(this.story);
        next.classList.add("noclick");
      } else {
        this.DoTest2(this.round, this.phase);
        console.log(this.round + "-" + this.phase);
      }
    }

    if (this.round === 1 && this.phase === 0) {
      this.GetBgm(this.round);
    }


    if (this.win) {
      if (this.round === 3 && this.phase === 1) {
        this.GetBgm(3);
        document.getElementById('hidokei').src = "images/火時計レインボー.gif";
      }
    }

    next.classList.add("wait_motion");
    next.addEventListener('animationend', () => {
      next.classList.remove('wait_motion');
    });
  }

  GetRule() {

    const text = [
      // "ルール",
      [],
      [
        "50%,60%,70%,80%,90%,100%継続率(振り分けは均等)",
        "各ラウンドで1〜100までの乱数取得",
        "読み込み時に上記で判定して結果算出済み"
      ],
      [
        "レバークリックで進む(連打不可予定)",
        "乱数が継続率以下ならそのラウンド突破",
        "現状小役による昇格抽選無し",
      ],
      [
        "星矢",
        "『君は小宇宙を感じた事があるか』",
        "次Gで対戦相手の表示",
      ],
    ];

    return text;
  }

  story_win(co) {
    // 続く処理
    const win_scenario = [
      {// 0
        コメ: { a: "対峙", b: "　", c: "　" },
        // src: "images/対峙.jpg"
        src: "images/対峙gif.gif"
      },
      {// 1
        コメ: { a: "星矢コメント", b: "　", c: "　" },
        src: "images/星矢コメント.jpg"
      },
      {// 2
        コメ: { a: "敵のコメント", b: "　", c: "　" },
        src: "images/" + this.name + "コメ.jpg"
      },
      {// 3
        コメ: { a: "拳のぶつかり合い(星矢競り勝ち)", b: "星矢", c: "『負けられないんだぁ！』" },
        src: "images/seiya_sensei.jpg"
      },
      {// 4
        コメ: { a: "星矢", b: "『みせてやるぜ！", c: "この流星拳でお前を撃つ』" },
        src: "images/seiya03.jpg"
      },
      {// 5
        コメ: { a: "星矢", b: "『喰らえ", c: "ジェネラル…』" },
        src: "images/星矢待機画面.png"
      },
      {// 6
        コメ: { a: "星矢", b: "『ペガサス", c: "流星拳！！』" },
        src: "images/流星拳.gif"
      },
      {// 7
        コメ: { a: "星矢", b: "『負けられないんだ！』", c: "バトル継続" },
        src: "images/継続2.jpg"
      },
      {// 8
        コメ: { a: hutatuna[this.name][0], b: hutatuna[this.name][1] + " " + this.name, c: "バトル継続率" + this.rate + "％OVER", },
        src: "images/" + this.name + "登場.jpg"
      },
      {// 9
        コメ: { a: (co + 1) + "ラウンド目", b: "　", c: "　" },
        src: "images/2ラウンド.jpg"
      },
      {// 10
        コメ: { a: (co + 1) + "ラウンド目", b: "　", c: "　" },
        src: "images/ラウンド.jpg"
      },
      {// 11
        コメ: { a: "星矢", b: "『アテナの為にも 俺は負けない』", c: "WIN" },
        src: "images/勝利.jpg"
      },
    
    ];


    let result = [];
    switch (co) {
      case 0:
        result.push(
          win_scenario[8]);
        break;
      case 1:
        result.push(
          win_scenario[9]);
        break;
      case 2:
        result.push(
          win_scenario[10]);
        break;
    }

    for (let i = 0; i < 7; i++) {
      result.push(
        win_scenario[i]);
    }
    if (co === 2) {
      result.push(
        win_scenario[11]);
    } else {
      result.push(
        win_scenario[7]);
    }

    // if (this.round === 3 && p === 0 && this.win === true) {
    //   this.GetBgm(3);
    // }
    // 1 対峙
    // 2 AorBコメ
    // 3 2がAならBコメ、2がBならAコメ
    // 4 拳のぶつかり合い(星矢競り勝ち)
    // 5 seiyaの攻撃準備
    // 6 seiyaの攻撃(弱中強)
    // 7 敵吹き飛ぶ
    // 8 敵の感想or最後ならアテナのためにも〜
    return result;
  }

  story_lose(co) {
    // 絶対に星矢が攻撃を受けて倒れる

    const lose_scenario = [
      {
        コメ: { a: "対峙", b: "　", c: "　" },
        // src: "images/対峙.jpg"
        src: "images/対峙gif.gif"
      },
      {
        コメ: { a: "敵のコメント", b: "　", c: "　" },
        src: "images/" + this.name + "コメ.jpg"
      },
      {
        コメ: { a: "星矢コメント", b: "　", c: "　" },
        src: "images/星矢コメント.jpg"
      },
      {
        コメ: { a: "拳のぶつかり合い(負け確定)", b: "　", c: "　" },
        src: "images/" + this.name + "登場.jpg"
      },
      {
        コメ: { a: this.name, b: "Bの攻撃準備", c: "Bの攻撃準備" },
        src: "images/" + this.name + "コメ.jpg"
      },
      {
        コメ: { a: this.name, b: "Bの攻撃(弱中強)", c: "Bの攻撃(弱中強)" },
        src: "images/" + this.name + "登場.jpg"
      },
      {
        コメ: { a: "星矢", b: "『うわ〜』", c: "星矢吹き飛ぶ(倒れる)" },
        src: "images/" + this.name + "登場.jpg"
      },
      {
        コメ: { a: "星矢", b: "『うううう", c: "みんなごめん』" },
        src: "images/敗北.jpg"
      },
      {
        コメ: { a: hutatuna[this.name][0], b: hutatuna[this.name][1] + " " + this.name, c: "バトル継続率" + this.rate + "％OVER", },
        src: "images/" + this.name + "登場.jpg"
      },
      {
        コメ: { a: (co + 1) + "ラウンド目", b: "　", c: "　" },
        src: "images/2ラウンド.jpg"
      },
      {
        コメ: { a: (co + 1) + "ラウンド目", b: "　", c: "　" },
        src: "images/ラウンド.jpg"
      },

    ];
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
    let result = [];
    switch (co) {
      case 0:
        result.push(lose_scenario[8]);
        break;
      case 1:
        result.push(lose_scenario[9]);
        break;
      case 2:
        result.push(lose_scenario[10]);
        break;
    }

    for (let i = 0; i < 8; i++) {
      result.push(lose_scenario[i]);
    }
    return result;
  }

  GetBgm(r) {
    // let r = this.round;

    if (r === 1) {
      bgm.src = sounds[r].src.一回;
      bgm.play();
      bgm.loop = false;
      bgm.volume = sounds[r].vol;
      bgm.addEventListener('ended', function () {
        bgm.src = sounds[r].src.ループ;
        bgm.play();
        bgm.loop = true;
        if (mute) {
          bgm.volume = 0;
        } else {
          bgm.volume = sounds[r].vol;
        }
        // bgm.volume = sounds[r].vol;
      });
    } else {
      bgm.src = sounds[r].src;
      bgm.play();
      bgm.loop = true;
    }

    if (mute) bgm.volume = 0;
    this.sound = true;
  }

  BgmOn() {
    let r = this.round;
    if (!this.sound) {
      this.GetBgm(r);
    }

    mute = false;
    
    if(this.end) {
      bgm.volume = 0.2;
    }else {
      bgm.volume = sounds[r].vol;
      
    }

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


