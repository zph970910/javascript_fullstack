// miniprogram/pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: 'Send It - Austin Mahone',
    cloudSelection: [
      {img: 'http://i2.hdslb.com/bfs/archive/f235e01c5a70333c1372d7ca228a2a45c2430fc1.jpg@320w_200h.jpg', text: '泰坦尼克号_泪点片段', fbCount: '6754', playtime: '02:08', dzCount: '695', plCount:'77',headImage: 'http://img4.imgtn.bdimg.com/it/u=493817149,1840500933&fm=26&gp=0.jpg', netname:'欧美电影剪辑'},
      {img: 'http://i1.hdslb.com/bfs/archive/3f2c2f9df3f8440b16c58b16dec490de733655e7.jpg@320w_200h.jpg', text: '小清新经典！《怦然心动》英文配音片段', fbCount: '45万', playtime: '01:02', dzCount: '5557', plCount:'269' ,headImage: 'http://img5.imgtn.bdimg.com/it/u=3409586425,3642889484&fm=26&gp=0.jpg', netname:'咿呀咿呀呀'},
      {img: 'http://i1.hdslb.com/bfs/archive/7ea5000c67ba2cab0cc367e588ff7525f4acf48d.jpg@320w_200h.jpg', text: '当我睁开双眼的那一刻！ 全世界都将为之颤抖！！！', fbCount: '247万', playtime: '06:55', dzCount: '22647', plCount:'4112',headImage: 'http://img3.imgtn.bdimg.com/it/u=1612901329,134475848&fm=26&gp=0.jpg', netname:'动漫之家' },
      {img: 'http://i2.hdslb.com/bfs/archive/700800e428fd4ed174100e01de299d784ab82d73.jpg@320w_200h.jpg', text: '超燃/综漫 The World Calling -~！！', fbCount: '105万', playtime: '03:02', dzCount: '21557', plCount:'2869' ,headImage: 'http://img4.imgtn.bdimg.com/it/u=1701767862,935209216&fm=26&gp=0.jpg', netname:'清风明月'},
      {img: 'http://i0.hdslb.com/bfs/archive/9856df5ffa9b523cbc5a47a348ea128b9337bec3.jpg@320w_200h.jpg', text: '魔道祖师2：蓝忘机醉酒偷鸡，反应可爱极了，魏无羡一脸宠溺', fbCount: '597万', playtime: '02:57', dzCount: '34604', plCount:'3422' ,headImage: 'http://img2.imgtn.bdimg.com/it/u=2240386390,942382252&fm=15&gp=0.jpg', netname:'知安'},
      {img: 'http://i2.hdslb.com/bfs/archive/c5b29131a1bb92eeb369937b58b08021b757e62a.jpg@320w_200h.jpg', text: '前方高萌，可爱真的可以为所欲为！', fbCount: '11万', playtime: '03:17', dzCount: '1030', plCount:'109',headImage: 'http://img3.imgtn.bdimg.com/it/u=2282939143,639451214&fm=26&gp=0.jpg', netname:'可爱就完事了' },
      {img: 'http://i0.hdslb.com/bfs/archive/26f8a38396e14f91ce2ed124665aad42da5d5737.jpg@320w_200h.jpg', text: '【补番推荐】少女心炸裂！盘点少女番心动瞬间|高甜混剪', fbCount: '37241', playtime: '01:25', dzCount: '365', plCount:'71',headImage: 'http://img5.imgtn.bdimg.com/it/u=4190001293,3208131070&fm=26&gp=0.jpg', netname:'长意' },
      {img: 'http://i1.hdslb.com/bfs/archive/287cec03b44c9aa5ed4166f913050000037ce2c7.jpg@320w_200h.jpg', text: '【狐妖小红娘 竹业篇】一生所爱', fbCount: '54768', playtime: '03:17', dzCount: '365', plCount:'96',headImage: 'http://img2.imgtn.bdimg.com/it/u=3842984543,2148073765&fm=11&gp=0.jpg' , netname:'动漫混剪'},
      {img: 'http://i1.hdslb.com/bfs/archive/2a9f60c58b53052b12fa8d886be2c4550725436b.jpg@320w_200h.jpg', text: '与《洛丽塔》齐名，10岁小女孩美得人神共愤！每帧都可以当壁纸！', fbCount: '7383', playtime: '04:55', dzCount: '365', plCount:'65' ,headImage: 'http://img4.imgtn.bdimg.com/it/u=2110685161,2279827435&fm=26&gp=0.jpg'},
      {img: 'http://i1.hdslb.com/bfs/archive/eba42a079bcb748e30c6bda8f11f6ff081bde8ab.jpg@320w_200h.jpg', text: '天气之子】百分之一百亿的晴天女孩', fbCount: '56万', playtime: '02:35', dzCount: '3642', plCount:'965',headImage: 'http://img2.imgtn.bdimg.com/it/u=1875291601,3102077009&fm=26&gp=0.jpg', netname:'云音乐视频酱' },
      {img: 'http://i2.hdslb.com/bfs/archive/e90ec97878d3b5b481808f7e4851ef7684656f8b.jpg@320w_200h.jpg', text: '【我的英雄学院】我已经用尽全力了，接下来就轮到你了！！', fbCount: '24万', playtime: '04:35', dzCount: '2615', plCount:'823',headImage: 'http://img5.imgtn.bdimg.com/it/u=1554554350,1629799357&fm=26&gp=0.jpg', netname:'混剪小音' },
      {img: 'http://i0.hdslb.com/bfs/archive/6456dc7cadd20e9043ea95cd8baf19ab5c19e7f3.jpg@320w_200h.jpg', text: '《罗小黑战记》嗯？你是男生啊？你的发型好可爱。', fbCount: '12万', playtime: '04:18', dzCount: '2198', plCount:'377',headImage: 'http://img0.imgtn.bdimg.com/it/u=3281286678,2661513322&fm=15&gp=0.jpg' , netname:'动漫之家'},
      {img: 'http://i0.hdslb.com/bfs/archive/2e2cb9795e03482ae8d14896da5112b95a41dcce.jpg@320w_200h.jpg', text: '【复联4/高燃踩点/1080P】复联4完整版超燃混剪。抢先体验！爱你三千遍！', fbCount: '8823', playtime: '01:18', dzCount: '625', plCount:'85',headImage: 'http://img0.imgtn.bdimg.com/it/u=1060105972,3817556742&fm=15&gp=0.jpg', netname:'漫宅小哥' },  
      {img: 'http://i1.hdslb.com/bfs/archive/f7a66727d148241cd2219c26d16924a4fe159d76.jpg@320w_200h.jpg', text: '前方高能！黑长直+名门大小姐！傲娇的千金大小姐也是有害羞的一面的！', fbCount: '78万', playtime: '02:28', dzCount: '3365', plCount:'965' ,headImage: 'http://img1.imgtn.bdimg.com/it/u=3457625298,3428265821&fm=15&gp=0.jpg', netname:'进击的巨人'},
      {img: 'http://i2.hdslb.com/bfs/archive/01bff916944a8e2c7b2baf14c3c7bd6c276a18e1.jpg@160w_100h.jpg', text: '前方高能！！大型亲吻现场（合集）', fbCount: '12079', playtime: '04:18', dzCount: '165', plCount:'47',headImage: 'http://img2.imgtn.bdimg.com/it/u=3282925844,1520571142&fm=26&gp=0.jpg' , netname:'国漫娘'},
      {img: 'http://i2.hdslb.com/bfs/archive/8e01f2b92e710f09067315474ba93cea998d8e14.jpg@160w_100h.jpg', text: '全程高燃！当我拔剑的那一刻，就算是神我也杀给你看！', fbCount: '128万', playtime: '03:25', dzCount: '3365', plCount:'965', headImage: 'http://img5.imgtn.bdimg.com/it/u=3729527196,1477877697&fm=26&gp=0.jpg', netname:'猫猫村长哟' },
      {img: 'http://i2.hdslb.com/bfs/archive/644e6d5fe822485c738cf3dd5a6d0b630756c76e.jpg@160w_100h.jpg', text: '【绿仙&amp;艾因】中日双语合唱分手名曲《绿色》【翻唱】', fbCount: '17万', playtime: '03:12', dzCount: '1465', plCount:'824',headImage: 'http://img0.imgtn.bdimg.com/it/u=1527831002,1887268750&fm=26&gp=0.jpg', netname:'动漫控' },
      {img: 'http://i1.hdslb.com/bfs/archive/9b12dcdf2b5499f82aeb9c0451503238fefa6bc9.jpg@160w_100h.jpg', text: '【hololive小剧场】【动画】养〇〇的结果wwwwwwwww', fbCount: '321万', playtime: '02:18', dzCount: '7983', plCount:'461',headImage: 'http://img1.imgtn.bdimg.com/it/u=2711649243,590249524&fm=26&gp=0.jpg' , netname:'热爱生活'},
      {img: 'http://i2.hdslb.com/bfs/archive/f7da55c289d77903a91fe7d614e1db575d5d8fba.png@320w_200h.jpg', text: '十大超甜/恋爱/日常动漫', fbCount: '492万', playtime: '04:16', dzCount: '37476', plCount:'2405',headImage: 'http://img4.imgtn.bdimg.com/it/u=2129343378,2448285848&fm=26&gp=0.jpg' , netname:'Do you like'},
      {img: 'http://i2.hdslb.com/bfs/archive/98716d6096317ba32d74fa5456234b0f5a760d22.jpg@320w_200h.jpg', text: '人间尤物 | 佳人千面 | 倾城之梦，美人绝世。', fbCount: '76万', playtime: '01:47', dzCount: '4065', plCount:'985',headImage: 'http://img2.imgtn.bdimg.com/it/u=1875291601,3102077009&fm=26&gp=0.jpg', netname:'甜甜的我呀' },
      {img: 'http://i2.hdslb.com/bfs/archive/c2c2de161c52ed5bb987b85851d51e2e0061626f.jpg@320w_200h.jpg', text: '「鹤灵」鬼刀·海琴烟仿妆', fbCount: '17万', playtime: '03:14', dzCount: '3165', plCount:'666',headImage: 'http://img3.imgtn.bdimg.com/it/u=2282939143,639451214&fm=26&gp=0.jpg', netname:'芒果芋圆仙草冻' },
      {img: 'http://i2.hdslb.com/bfs/archive/62560dbcad9d1e91c0c5ab2b30e8bee036894cb4.jpg@160w_100h.jpg', text: '最喜欢的女主播，竟然是我爸！？要疯了！', fbCount: '9063', playtime: '01:47', dzCount: '205', plCount:'65',headImage: 'http://img3.imgtn.bdimg.com/it/u=1612901329,134475848&fm=26&gp=0.jpg' , netname:'柚子'},
      {img: 'http://i2.hdslb.com/bfs/archive/39f458b51a5139f1f38b7ca2e4d47197e9acda08.jpg@160w_100h.jpg', text: '【百火缭乱】《活击/刀剑乱舞》超燃MAD--朝露般消散，此即吾生', fbCount: '190万', playtime: '03:01', dzCount: '18105', plCount:'809' ,headImage: 'http://img0.imgtn.bdimg.com/it/u=3281286678,2661513322&fm=15&gp=0.jpg', netname:'动漫之家'},
    ],
    hotHeadImage: [
      {img: 'http://p2.music.126.net/rQ8yXV3YZZPijaroho1C1Q==/109951164252526217.jpg?param=140y140'},
      {img: 'http://p2.music.126.net/_eq0Vxc4o7QC69TZbVCyqw==/109951164159782176.jpg?param=140y140'},
      {img: 'http://p2.music.126.net/a1HWnQUZ-C8FGh4SUPwT5A==/109951164256141084.jpg?param=140y140'},
      {img: 'http://p1.music.126.net/Onxu8UDb5toKy3Invi9Qdw==/109951164415808490.jpg?param=140y140'},
      {img: 'http://p1.music.126.net/WMB-tuqE-tYZyg0ZB5qIaw==/109951164228061642.jpg?param=140y140'}
    ],
    hotContent: [
      {img: 'http://p2.music.126.net/lEhUiQv_GdONSQlhLOgiFg==/109951164282094176.jpg?param=140y140', type: '互动', heat: '15万', text: '在吗 我超甜', name: '甜妹呀'},
      {img: 'http://p2.music.126.net/x2YhdtGjtRhLVER1XlG0YQ==/109951164228093061.jpg?param=140y140', type: '点歌', heat: '1.5万', text: '喜欢，就别走了', name: '草西'},
      {img: 'http://p2.music.126.net/lRE0QHTUkA_DxlB14uzSqg==/109951164207703933.jpg?param=140y140', type: '美少女', heat: '3479', text: '正在唱：有可能的夜晚', name: '小樱需要你哦'},
      {img: 'http://p2.music.126.net/wAlScHDZg2_Ma_Wk3_BGuQ==/109951163907148788.jpg?param=140y140', type: '推歌', heat: '7942', text: '就算候鸟归来也知是等你', name: 'Abby西儿'},
      {img: 'http://p2.music.126.net/bpY2q4jBGbDubzk2wgX_Qw==/109951164226051140.jpg?param=140y140', type: '陪伴', heat: '3.7万', text: '你什么时候来都不迟~', name: '温柔熙'},
      {img: 'http://p2.music.126.net/Vxq_4wwNY1Kb5Snd5n1QMw==/109951163584897631.jpg?param=140y140', type: '游戏', heat: '8888', text: '小哥哥小哥哥吃鸡吗', name: '小喵吃小鱼儿'},
      {img: 'http://p2.music.126.net/HVzlTlB8AkCa6S1m2VgQsg==/109951164366024860.jpg?param=140y140', type: '互动', heat: '4368', text: '嘿~冬天快乐', name: '小甜心'},
      {img: 'http://p2.music.126.net/ZmFCWX6HwzqeAr7iWlbedQ==/109951164164614973.jpg?param=140y140', type: '点歌', heat: '2万', text: '世界多浮沉，进来听歌', name: '奶猫太难了'},
      {img: 'http://p2.music.126.net/dMDg6KfQyAi1EXfpHpAR4Q==/109951164255936548.jpg?param=140y140', type: '游戏', heat: '2478', text: '没错，我就是大佬', name: 'ja-嚣张'},
      {img: 'http://p2.music.126.net/nS8BqYnV5bKtVfiiOhx7JA==/109951164346773446.jpg?param=140y140', type: '美少女', heat: '827', text: '新人开播，请多多指教', name: '灯灯Wtd'},
      {img: 'http://p2.music.126.net/1GDE1BXDqZQLANTQ_vxfMw==/109951164146677212.jpg?param=140y140', type: '陪伴', heat: '2.1万', text: '来来来，说说心里话', name: '黄头发妹妹'},
      {img: 'http://p1.music.126.net/c7Jt7h1HGgGTH7jkHrwaRg==/109951164419790491.jpg?param=140y140', type: '互动', heat: '4891', text: '我在等你，你知道吗', name: '甜妹呀'},
      {img: 'http://p2.music.126.net/NQW1OLXZxDT710zYZvKqaA==/109951164347024865.jpg?param=140y140', type: '美少女', heat: '22万', text: '每天都要笑呀', name: '花花都是我的'},
    ],
    currentTab: 0,
    scrollHeight: '',
    scrollWidth: '',
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
  goSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    });
 },
  switchHead: function (e) {
    if ( this.data.cueeentTab == e.target.dataset.cueeent ) {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {
    console.log(e.detail.current)
    this.setData({
      currentTab: e.detail.current
    })
  },
  switchMiddle: function (e) {
    console.log(e.currentTarget.dataset.current)
    var that = this;
    if( this.data.currentTab2 === e.target.dataset.current ) {
       return false;
     } else {
       that.setData({
         currentTab2: e.target.dataset.current
       })
       }
  },
  bindChange2: function (e) {
   console.log(e.detail.current)
   var that = this
   that.setData({
     currentTab2: e.detail.current
   })
 }
})