// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    scrollHeight: '',
    scrollWidth: '',
    recommend: [
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight,
          scrollWidth: res.windowWidth
        })
      }
    });
    console.log(this.data.scrollHeight)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 头部导航栏点击效果切换
  swichTab: function (e) {
    console.log(e.currentTarget.dataset.current)
    if (this.currentTab != e.currentTarget.dataset.current) {
      this.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },
  goSearch: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  changeBar: function (e) {
    console.log(e.detail.current)
    this.setData({
      currentTab: e.detail.current
    })
  }
})