// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serachValue: '新海诚这次拆散恋人了吗',
    fontBlack: false,//搜索框颜色字体是否为黑

    topSearch: ['RUNNINGMAN', '豫章书院', '明日方舟', '小米手表', '徐大SAO', '炫雅flower shower', '鬼灭之刃', '初恋那件小事', 'mamamoo', '撒贝宁', 'fpx', '偶然发现的一天', '搞笑', '蜡笔小新', '主持人大赛', '朱一龙', '家有儿女'],

    pastSearch: ['皇家骑士', '告白之夜', '主播真会玩', '龙之谷', '杰哥不要', '言叶之庭', '英雄联盟官方赛事', '三星', '华为折叠', '华为MATE30', '罗小黑大电影', '兰溪镇', '全职高手', '你的眼睛', '李健', '云顶之弈', '丹麦马戏团', '编不下去了', '乱写一点吧', '反正也没人看', '华农兄弟', '慎重勇者', '肖申克的救赎', '陈凯歌霸王别姬吃一辈子'],

    hotSwitch: true,//是否展开热搜
    pastSwitch: false,//是否展开历史记录
    clothSwitch: false, //是否隐藏黑幕
    modalHidden: true,//是否隐藏对话框
    isPastShow: true, // 是否显示历史记录
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

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
  //返回上一层
  backHome: function () {
    wx.navigateBack()
  },
  //获取到光标，删除默认内容 且输入字体为黑色
  getFocus: function () {
    this.setData({
      fontBlack: true
    })
  },
  // 展开热搜开关
  hot_on_off: function () {
    this.setData({
      hotSwitch: !this.data.hotSwitch
    })
  },
  // 展开历史记录开关
  past_on_off: function () {
    this.setData({
      pastSwitch: !this.data.pastSwitch
    })
  },
  // 清除历史记录开关,弹出清除历史记录对话框
  clearPast: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  //确定按钮点击事件
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      pastSearch: [],
      isPastShow: false
    })
  },
  //取消按钮点击事件
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  // 如果历史记录为空数组，就不显示历史记录框
  isDeletePast: function () {
    if (this.data.pastSearch == []) {
      this.setData({
        isPastShow: false
      })
    } else {
      this.setData({
        isPastShow: true
      })
    }
  },
  // 当搜索框输入值确认时，把value加入到历史记录 pastSearch 中
  inputConfirm: function (e) {
    console.log(e.detail.value)
    console.log(this.data.pastSearch)
    this.setData({
      // 问题1 如何实现向数组中加入值
      // 问题2 为什么值会拆开
      //已解决，解决办法如下代码
      pastSearch: [e.detail.value,...this.data.pastSearch]
    })
    this.isDeletePast()
  }
})