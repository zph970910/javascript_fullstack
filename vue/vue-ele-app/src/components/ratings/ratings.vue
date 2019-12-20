<template>
  <div>
    <div class="ratings">
      <div class="ratings-content" ref="ratingsWrapper">
        <div>
          <div class="header">
            <div class="header-left">
              <h1>{{seller.score}}</h1>
              <h2>综合评分</h2>
              <span>高于周边商家{{seller.rankRate}}%</span>
            </div>
            <div class="header-right">
              <div class="attitude-wrapper">
                <span class="title">服务态度</span>
                <div class="star">
                  <span class="star-item" :class="[seller.serviceScore>=1?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=2?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=3?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=4?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=5?'on':'off']"></span>
                </div>
                <span class="score">{{seller.serviceScore}}</span>
              </div>
              <div class="score-wrapper">
                <span class="title">商品评分</span>
                <div class="star">
                  <span class="star-item" :class="[seller.serviceScore>=1?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=2?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=3?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=4?'on':'off']"></span>
                  <span class="star-item" :class="[seller.serviceScore>=5?'on':'off']"></span>
                </div>
                <span class="score">{{seller.foodScore}}</span>
              </div>
              <div class="delivery-wrapper">
                <span class="title">送达时间</span>
                <span class="delivery">{{seller.deliveryTime}}分钟</span>
              </div>
            </div>
          </div>
          <div class="split"></div>
          <div class="content">
            <div class="content-header">
              <div class="rating-type border-1px">
                <span class="block positive" @click="selectBlockId=0" :class="{'active':selectBlockId==0}">
                  全部
                  <span class="count">24</span>
                </span>
                <span class="block positive" @click="selectBlockId=1" :class="{'active':selectBlockId==1}">
                  满意
                  <span class="count">18</span>
                </span>
                <span class="block negative" @click="selectBlockId=2" :class="{'active':selectBlockId==2}">
                  不满意
                  <span class="count">6</span>
                </span>
              </div>
              <div class="switch" @click="isContent=!isContent" :class="{'on':isContent}">
                <span class="icon-check_circle"></span>
                <span class="text">只看有内容的评价</span>
              </div>
            </div>
            <div class="content-footer">
              <ul>
                <li class="rating-item" v-for="(rating, index) in ratings.data" :key="index"
                    :class="{'off':(selectBlockId==1&&rating.rateType==1)||(selectBlockId==2&&rating.rateType==0)||
                    (isContent&&rating.text=='')}"
                >
                  <div class="avatar">
                    <img :src="rating.avatar" />
                  </div>
                  <div class="container">
                    <h1 class="name">{{rating.username}}</h1>
                    <div class="star-wrapper">
                      <div class="star star-24">
                        <span class="star-item" :class="[rating.score>=1?'on':'off']"></span>
                        <span class="star-item" :class="[rating.score>=2?'on':'off']"></span>
                        <span class="star-item" :class="[rating.score>=3?'on':'off']"></span>
                        <span class="star-item" :class="[rating.score>=4?'on':'off']"></span>
                        <span class="star-item" :class="[rating.score>=5?'on':'off']"></span>
                      </div>
                      <span class="delivery">{{rating.deliveryTime}}</span>
                    </div>
                    <p class="text">{{rating.text}}</p>
                    <div class="recommend">
                      <span class="icon-thumb_up" v-show="rating.recommend.length>0"></span>
                      <span
                        class="item"
                        v-for="(item, index) of rating.recommend"
                        :key="index"
                      >{{item}}</span>
                    </div>
                    <div class="time">{{rating.time}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
export default {
  props: {
    ratings: {
      type: Array
    },
    seller: {
      type: Object
    }
  },
  data () {
    return {
      selectBlockId: 0,
      isContent: true
    }
  },
  created() {
    this.$http
      .get("http://localhost:8080/static/data/ratings.json")
      .then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.ratings = res.data;
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
  },
  computed: {
    goodRatings () {
      let ratingcount = 0
      this.ratings.forEach(rating => {
        if (rating.rateType == 0) {
          ratingcount++
        }
      })
      return ratingcount
    },
    badRatings () {
      let ratingcount = 0
      this.ratings.forEach(rating => {
        if (rating.rateType == 1) {
          ratingcount++
        }
      })
      return ratingcount
    },
  },
  methods: {
    selectBlock (e) {
      console.log(e.currentTarget.innerHTML)
    },
    _initScroll() {
      this.ratingScroll = new BScroll(this.$refs.ratingsWrapper, {
        click: true
      });
      console.log(this.ratingScroll);
    }
  }
};
</script>

<style lang='stylus' scoped>
.header {
  display: flex;
  padding: 18px 0;

  .header-left {
    flex: 0, 0, 137px;
    width: 137px;
    padding: 6px 0;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;

    h1 {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 6px;
      color: #ff9900;
    }

    h2 {
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 8px;
      color: #07111b;
    }

    span {
      font-size: 12px;
      line-height: 12px;
      color: #93999f;
    }
  }

  .header-right {
    flex: 1;
    // width 237px
    padding: 6px 0 6px 24px;

    .attitude-wrapper, .score-wrapper, .delivery-wrapper {
      margin-bottom: 8px;

      .title {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        line-height: 18px;
        color: #07111b;
      }

      .star {
        display: inline-block;
        margin: 0 12px;
        vertical-align: top;

        .star-item {
          width: 15px;
          height: 15px;
          margin-right: 4px;
          display: inline-block;
        }

        .star-item.on {
          background-image: url('./star.png');
        }

        .star-item.off {
          background-image: url('./star2.png');
        }
      }

      .score {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        line-height: 18px;
        color: #ff9900;
      }

      .delivery {
        margin-left: 12px;
        font-size: 12px;
        color: #93999f;
      }
    }
  }
}

.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background: #f3f5f7;
}

.rating-type {
  padding: 18px 0;
  margin: 0 18px;
  position: relative;

  .block {
    display: inline-block;
    padding: 8px 12px;
    margin-right: 8px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 1px;
    color: #4d555d;
  }
    .positive {
      background rgba(0,160,220,.2)
    &.active {
        background #00a0dc
        color #fff
      }
    }
    .negative {
      background rgba(77,85,93,.2)
    &.active {
      background #4d555d
      color #fff
    }
    }
    .count {
      font-size: 8px;
      margin-left: 2px;
    }
}

.rating-type::after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid rgba(7, 17, 27, 0.1);
  content: '';
}

.switch {
  padding: 12px 18px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  color: #93999f;
  font-size: 0;
  
  &.on {
    color: #00c850;
  }

  .icon-check_circle {
      display: inline-block;
      vertical-align: top;
      margin-right: 4px;
      font-size: 24px;
    }

  .text {
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
  }
}

.content-footer {
  padding: 0 18px;

  .rating-item {
    display: flex;
    padding: 18px 0;
    position: relative;

    .avatar {
      flex: 0 0 28px;
      width: 28px;
      margin-right: 12px;

      img {
        border-radius: 50%;
        width: 28px;
        height: 28px;
      }
    }

    .container {
      position: relative;
      flex: 1;

      .name {
        margin-bottom: 4px;
        line-height: 12px;
        font-size: 10px;
        color: #07111b;
      }

      .star-wrapper {
        margin-bottom: 6px;
        font-size: 0;

        .star {
          display: inline-block;
          margin-right: 6px;
          vertical-align: top;

          .star-item {
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: 10px 10px;
            display: inline-block;
          }

          .star-item.on {
            background-image: url('./star.png');
          }

          .star-item.off {
            background-image: url('./star2.png');
          }
        }

        .delivery {
          display: inline-block;
          vertical-align: top;
          line-height: 12px;
          font-size: 10px;
          color: #93999f;
        }
      }

      .text {
        margin-bottom: 8px;
        line-height: 18px;
        color: #07111b;
        font-size: 12px;
      }

      .recommend {
        line-height: 16px;
        margin: 0 8px 4px 0;
        font-size: 9px;

        .icon-thumb_up {
          color: #00a0dc;
        }

        .item {
          display: inline-block;
          padding: 0 6px;
          border: 1px solid rgba(7, 17, 27, 0.1);
          border-radius: 1px;
          color: #93999f;
          background: #fff;
          margin: 2px 6px;
        }
      }

      .time {
        position: absolute;
        top: 0;
        right: 0;
        line-height: 12px;
        font-size: 10px;
        color: #93999f;
      }
    }
  }
}
</style>