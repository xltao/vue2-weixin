<template>
  <div class="container">
    <section class="other padding10">
      <div class="row">
        <div class="col col-2">
          <img class="headerPic" src="/static/friend/newFrinend.png"/>
        </div>
        <div class="col col-8 friend_info col-middle">
          新的朋友
        </div>
      </div>

      <div class="row">
        <div class="col col-2">
          <img class="headerPic" src="/static/friend/groupChat.png"/>
        </div>
        <div class="col col-8 friend_info col-middle">
          群聊
        </div>
      </div>

      <div class="row">
        <div class="col col-2">
          <img class="headerPic" src="/static/friend/lable.png"/>
        </div>
        <div class="col col-8 friend_info col-middle">
          标签
        </div>
      </div>

      <div class="row">
        <div class="col col-2">
          <img class="headerPic" src="/static/friend/subscription.png"/>
        </div>
        <div class="col col-8 friend_info col-middle">
          公众号
        </div>
      </div>
    </section>

    <div class="friendLst">
      <template v-for="friend in friendLst">
        <div class="group">
          <div class="category padding10" :data-item="friend.category">{{friend.category}}</div>
          <div class="padding10">
            <template v-for="tmp in friend.friends">
              <div class="row">
                <div class="col col-2">
                  <img class="headerPic" :src="tmp.headerPic"/>
                </div>
                <div class="col col-8 friend_info col-middle">
                  {{tmp.name}}
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>

    <div class="letter">
      <p v-for="letter in letterLst" class="letterItem" @touchmove="touchLetterMove()"
         @touchstart="touchLetterStart()"
         @touchend="touchLetterEnd()">
        {{letter}}
      </p>
    </div>

    <div class="toast" v-show="showToast">{{curLetter}}</div>
  </div>
</template>

<script>
  import Comm from "../../../../assets/javascript/Comm"
  export default {
    data() {
      return {
        letteres: 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
        curLetter: '',
        showToast: false,
        friendLst: [
          {
            category: "A",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }
            ]
          }, {
            category: "B",
            friends: [
              {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "C",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "D",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }
            ]
          }, {
            category: "G",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "L",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "O",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "Q",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "R",
            friends: [
              {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "S",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }
            ]
          }, {
            category: "T",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "U",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }, {
            category: "V",
            friends: [
              {
                headerPic: "/static/header/1.jpg",
                name: "张益达"
              }, {
                headerPic: "/static/header/2.jpg",
                name: "张大炮"
              }, {
                headerPic: "/static/header/3.jpg",
                name: "张斯奈克"
              }, {
                headerPic: "/static/header/4.jpg",
                name: "律政先锋"
              }
            ]
          }
        ]
      }
    },
    methods: {
      touchLetterMove: function () {
        const e = window.event;
        // 组织浏览器默认事件，防止页面滚动
        e.preventDefault();
        var x = e.changedTouches[0].clientX;
        var y = e.changedTouches[0].clientY;
        var target = document.elementFromPoint(x, y);
        if (this.letterLst.indexOf(target.innerText) != -1) {
          this.curLetter = target.innerText;
          const selector = ".category[data-item='" + this.curLetter + "']";
          const position = Comm.getElemPos(document.querySelector(selector));
          if (position) {
            window.scrollTo(position.x, position.y);
          }
        }
      },
      touchLetterStart: function () {
        document.getElementsByClassName("toast")[0].style.left = 'calc(50% - 0.8333333333333334rem)'
        document.getElementsByClassName("toast")[0].style.top = 'calc(50% - 0.8333333333333334rem)'
        const e = window.event;
        const tmp = this.letterLst.indexOf(e.target.innerText) != -1 ? e.target.innerText : "";
        this.curLetter = tmp ? tmp : this.curLetter;
        this.showToast = tmp ? true : false;
      },
      touchLetterEnd: function () {
        const e = window.event;
        this.showToast = false;
      }
    },
    computed: {
      letterLst: function () {
        return this.letteres.split(",");
      }
    },
    components: {}
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../../assets/style/func";

  .category {
    background-color: #EBEBEB;
    height: 0.8333333333333334rem;
    line-height: 0.8333333333333334rem;
    font-weight: 500;
  }

  .row:last-child {
    margin-bottom: 0 !important;
    border-bottom: 0 !important;
  }

  .letter {
    position: fixed;
    right: 0.01666666666666666rem;
    width: 0.6666666666666666rem;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    .setTextAlign(center);
    font-size: 8px;
  }

  @media screen and (min-width: 320px) {
    .letter {
      font-size: 8px;
    }
  }

  @media screen and (min-width: 360px) {
    .letter {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 640px) {
    .letter {
      font-size: 20px;
    }
  }

  @media screen and (min-height: 600px) {
    .letter {
      font-size: 12px;
    }
  }

  .letterItem {
    margin-top: 0.01666666666666667rem;
  }

  .toast {
    position: fixed;
    height: 1.6666666666666667rem;
    width: 1.6666666666666667rem;
    line-height: 1.6666666666666667rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 0.8666666666666667rem;
    .setTextAlign(center)
  }
</style>
