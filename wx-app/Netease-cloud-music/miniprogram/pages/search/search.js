// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: 'Send It - Austin Mahone',
    fontBlack: false,//搜索框颜色字体是否为黑    
    pastSearch: ['绿洲',  '与火星孩子的对话','Phoenix', '恋爱循环', '形容', '世间美好与你环环相扣'  ,'安河桥', '少一点天分', '虚拟', '谈恋爱前不如先养猫'],
    hotSearch: [
      {id:1, name:'Phoenix', tip: '循环一天一夜，提请醒脑别错过', count:3412287, },
      {id:2, name:'鬼怪', tip: 'CLC的EDM TRAP好过瘾！', count:2912287,  },
      {id:3, name:'世间美好与你环环相扣', tip: '愿世间的美好，与你环环相扣', count:2715998, },
      {id:4, name:'吴青峰新歌', tip: '青峰说，他在原地等你哦~', count:2497737, },
      {id:5, name:'天气之子', tip: '你那里的天气，还好吗？', count:1372664,  },
      {id:6, name:'大田后生仔', tip: '听了这首歌，来年有钱有快乐', count:1290334,},
      {id:7, name:'在夜深人静的时候想起他', tip: '不是老歌变好听了，而是我们都有了...', count:1023455, },
      {id:8, name:'甜而不腻', tip: '确认过耳朵，是要火的歌', count:1012121, },
      {id:9, name:'单身快乐', tip: '确你有一份今日惊喜，快来领取~', count:912121, },
      {id:10, name:'恋爱循环', tip: '花泽香菜要甜甜甜进心里啦', count:815921, },
      {id:11, name:'尤长靖连名带姓', tip: '你走向我，原来是为了路过我', count:749065, },
      {id:12, name:'薛之谦', tip: '老薛是那一片最认真的雪', count:653678, },
      {id:13, name:'我和我的祖国', tip: '童声合唱犹如天籁，祖国万岁~', count:572821, },
      {id:14, name:'女孩', tip: '主歌的慵懒和俏皮也不错哒', count:512121, },
      {id:15, name:'年轮说', tip: '歌词 特别 吴青峰', count:456210, },
      {id:16, name:'玫瑰花的葬礼', tip: 'VAE出道时期的歌曲，曾被一次次翻唱', count:456721, },
      {id:17, name:'by2', tip: '其实她们一点没变，还是记忆中能唱会跳', count:392210, },
      {id:18, name:'起风了', tip: '神仙嗓音，超强音域跨度', count:293848, },
      {id:19, name:'红色高跟鞋', tip: '月老是不是拿我的红线织秋裤去了', count:201333, },
      {id:20, name:'山海', tip: '所爱隔山海，山海不可平', count:92381, }
    ],
    modalHidden: true,//是否隐藏对话框
    isPastShow: true, // 是否显示历史记录
    scrollWidth: '',
    scrollHeight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData ({
          scrollWidth: res.windowWidth,
          scrollHeight:res.windowHeight
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
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
  backHome: function () {
    wx.navigateBack();   
  },
  getFocus: function () {
    this.setData({
      fontBlack: true
    })
  },
  addSearch: function (e) {
    console.log(e.detail.value);
    console.log(this.data.pastSearch)
    this.setData ({
      pastSearch: [e.detail.value,...this.data.pastSearch]
    })
    this.isDeletePast()
  },
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
  addSearch2: function (e) {
    console.log(e);
    console.log(this.data.pastSearch);
    this.setData ({
      // pastSearch: [this.hotSearch.name,...this.data.pastSearch]
    })
  }
})