//index.js
const app = getApp()

// miniprogram/pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: 'Send It - Austin Mahone',
    imgUrls: [
      'http://p1.music.126.net/Wbki2MN37WWz54rxsS-RVQ==/109951164484832336.jpg?imageView&amp;quality=89',
      'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1841119.jpg?max_age=2592000',
      'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1841677.jpg?max_age=2592000',
      'http://p1.music.126.net/w86G5nh_4ik6XV9iYmnCZw==/109951164483188712.jpg?imageView&amp;quality=89',
      'http://p1.music.126.net/r7Plcj32KQECWXy6wjRpfA==/109951164483140984.jpg?imageView&quality=89',
      'http://p1.music.126.net/CBiQIpIBf1PHA8Pm95Vymw==/109951164483182830.jpg?imageView&quality=89',
      'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1839899.jpg?max_age=2592000',
      'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1835318.jpg?max_age=2592000',
      'http://img2.kwcdn.kuwo.cn/star/upload/11/11/1572418197883_.jpg',
    ],
    suggestSongs: [
      {img: 'http://p4.music.126.net/CxSo58e29DH7sUZIZPEK2w==/109951164475145653.jpg?param=200y200', text:'要把温柔和善良，留给值得的人', count:643},
      {img: 'http://p3.music.126.net/hlrorqeZpQusIkNgzJzeCg==/109951164481275759.jpg?param=200y200', text:'早安音乐盒 | 悦耳小调唤醒你', count:450},
      {img: 'http://p4.music.126.net/vXGDPLZV9cKETzjyhoxXmw==/18685100604570947.jpg?param=200y200', text:'干净日语女声|诗与飞鸟', count:234},
      {img: 'http://p3.music.126.net/ldSTq8NalbhRCyqPq1jJIQ==/109951164269383037.jpg?param=200y200', text: '一眼•三秒•十分•前奏即沉沦', count:670},
      {img: 'http://p4.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.jpg?param=200y200', text: '古风伤恋｜待到红颜消 杳杳无归期', count:9043},
      {img: 'http://p4.music.126.net/ow3CnHMPqa56OCSEmSWJGw==/18865420509947064.jpg?param=200y200', text: '支撑美术画画Or肝作业的杂食', count:2105}
    ],
    newDisc: [
      {img: 'http://p4.music.126.net/vXGDPLZV9cKETzjyhoxXmw==/18685100604570947.jpg?param=200y200',text: 'Regulars', name: 'RADWIMPS'},
      {img: 'http://p1.music.126.net/2gcByiD5IA2mlY3mceiJbw==/109951164469901057.jpg?param=177y177',text: '我在原地等你', name: '电影《我在原地等你》同名主题曲'},
      {img: 'http://p2.music.126.net/UHE7y1ksIgpV4VbVL1jg7Q==/109951164475306512.jpg?param=177y177',text: 'うたの☆プリンスさまっ♪ ソロベストアルバム 来栖 翔「Sweet Kiss」', name: '歌之王子殿下 Solo Best专辑 来栖翔「Sweet Kiss」'}
    ],
    newSong: [
      {img: 'http://p1.music.126.net/AFmJAcW7jFamQBNF68iKgw==/109951164452907718.jpg?param=130y130',text: '与火星的孩子对话', name: '华晨宇'},
      {img: 'http://p1.music.126.net/asKHHNuQsKDD39lvGoIqhw==/109951164457857234.jpg?param=130y130',text: '绿洲', name: '沈以诚'},
      {img: 'http://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=130y130',text: 'Lover', name: 'Taylor Swift'}
    ],
    listening: [
      {img: 'http://p3.music.126.net/qXiN7Bp6ETFPLldIljSDcQ==/109951164233224441.jpg?param=200y200', text: '陈逗逗翻唱原曲合集'},
      {img: 'http://p4.music.126.net/Un_Mh52lmNCIDZsdszNG9Q==/109951164254546426.jpg?param=200y200', text: '愿你被这个世界温柔以待'},
      {img: 'http://p4.music.126.net/yYsJIzQi0HOtALPJ37dQIw==/109951164457961174.jpg?param=200y200', text: '国风新潮大赏'}
    ],
    cloudSelection: [
      {img: 'http://i2.hdslb.com/bfs/archive/98716d6096317ba32d74fa5456234b0f5a760d22.jpg@320w_200h.jpg', text: '人间尤物 | 佳人千面 | 倾城之梦，美人绝世。', fbCount: '76万', playtime: '01:47', dzCount: '4065', plCount:'985',headImage: 'http://img2.imgtn.bdimg.com/it/u=1875291601,3102077009&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/c2c2de161c52ed5bb987b85851d51e2e0061626f.jpg@320w_200h.jpg', text: '「鹤灵」鬼刀·海琴烟仿妆', fbCount: '17万', playtime: '03:14', dzCount: '3165', plCount:'666',headImage: 'http://img3.imgtn.bdimg.com/it/u=2282939143,639451214&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/62560dbcad9d1e91c0c5ab2b30e8bee036894cb4.jpg@160w_100h.jpg', text: '最喜欢的女主播，竟然是我爸！？要疯了！', fbCount: '9063', playtime: '01:47', dzCount: '205', plCount:'65',headImage: 'http://img3.imgtn.bdimg.com/it/u=1612901329,134475848&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/39f458b51a5139f1f38b7ca2e4d47197e9acda08.jpg@160w_100h.jpg', text: '【百火缭乱】《活击/刀剑乱舞》超燃MAD--朝露般消散，此即吾生', fbCount: '190万', playtime: '03:01', dzCount: '18105', plCount:'809' ,headImage: 'http://img0.imgtn.bdimg.com/it/u=3281286678,2661513322&fm=15&gp=0.jpg'},
      {img: 'http://i2.hdslb.com/bfs/archive/700800e428fd4ed174100e01de299d784ab82d73.jpg@320w_200h.jpg', text: '超燃/综漫 The World Calling -~！！', fbCount: '105万', playtime: '03:02', dzCount: '21557', plCount:'2869' ,headImage: 'http://img4.imgtn.bdimg.com/it/u=1701767862,935209216&fm=26&gp=0.jpg'},
      {img: 'http://i0.hdslb.com/bfs/archive/9856df5ffa9b523cbc5a47a348ea128b9337bec3.jpg@320w_200h.jpg', text: '魔道祖师2：蓝忘机醉酒偷鸡，反应可爱极了，魏无羡一脸宠溺', fbCount: '597万', playtime: '02:57', dzCount: '34604', plCount:'3422' ,headImage: 'http://img2.imgtn.bdimg.com/it/u=2240386390,942382252&fm=15&gp=0.jpg'},
      {img: 'http://i2.hdslb.com/bfs/archive/c5b29131a1bb92eeb369937b58b08021b757e62a.jpg@320w_200h.jpg', text: '前方高萌，可爱真的可以为所欲为！', fbCount: '11万', playtime: '03:17', dzCount: '1030', plCount:'109',headImage: 'http://img3.imgtn.bdimg.com/it/u=2282939143,639451214&fm=26&gp=0.jpg' },
      {img: 'http://i0.hdslb.com/bfs/archive/26f8a38396e14f91ce2ed124665aad42da5d5737.jpg@320w_200h.jpg', text: '【补番推荐】少女心炸裂！盘点少女番心动瞬间|高甜混剪', fbCount: '37241', playtime: '01:25', dzCount: '365', plCount:'71',headImage: 'http://img5.imgtn.bdimg.com/it/u=4190001293,3208131070&fm=26&gp=0.jpg' },
      {img: 'http://i1.hdslb.com/bfs/archive/287cec03b44c9aa5ed4166f913050000037ce2c7.jpg@320w_200h.jpg', text: '【狐妖小红娘 竹业篇】一生所爱', fbCount: '54768', playtime: '03:17', dzCount: '365', plCount:'96',headImage: 'http://img2.imgtn.bdimg.com/it/u=3842984543,2148073765&fm=11&gp=0.jpg' },
      {img: 'http://i1.hdslb.com/bfs/archive/2a9f60c58b53052b12fa8d886be2c4550725436b.jpg@320w_200h.jpg', text: '与《洛丽塔》齐名，10岁小女孩美得人神共愤！每帧都可以当壁纸！', fbCount: '7383', playtime: '04:55', dzCount: '365', plCount:'65' ,headImage: 'http://img4.imgtn.bdimg.com/it/u=2110685161,2279827435&fm=26&gp=0.jpg'},
      {img: 'http://i1.hdslb.com/bfs/archive/eba42a079bcb748e30c6bda8f11f6ff081bde8ab.jpg@320w_200h.jpg', text: '天气之子】百分之一百亿的晴天女孩', fbCount: '56万', playtime: '02:35', dzCount: '3642', plCount:'965',headImage: 'http://img2.imgtn.bdimg.com/it/u=1875291601,3102077009&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/e90ec97878d3b5b481808f7e4851ef7684656f8b.jpg@320w_200h.jpg', text: '【我的英雄学院】我已经用尽全力了，接下来就轮到你了！！', fbCount: '24万', playtime: '04:35', dzCount: '2615', plCount:'823',headImage: 'http://img5.imgtn.bdimg.com/it/u=1554554350,1629799357&fm=26&gp=0.jpg' },
      {img: 'http://i0.hdslb.com/bfs/archive/6456dc7cadd20e9043ea95cd8baf19ab5c19e7f3.jpg@320w_200h.jpg', text: '《罗小黑战记》嗯？你是男生啊？你的发型好可爱。', fbCount: '12万', playtime: '04:18', dzCount: '2198', plCount:'377',headImage: 'http://img0.imgtn.bdimg.com/it/u=3281286678,2661513322&fm=15&gp=0.jpg' },
      {img: 'http://i0.hdslb.com/bfs/archive/2e2cb9795e03482ae8d14896da5112b95a41dcce.jpg@320w_200h.jpg', text: '【复联4/高燃踩点/1080P】复联4完整版超燃混剪。抢先体验！爱你三千遍！', fbCount: '8823', playtime: '01:18', dzCount: '625', plCount:'85',headImage: 'http://img0.imgtn.bdimg.com/it/u=1060105972,3817556742&fm=15&gp=0.jpg' },  
      {img: 'http://i1.hdslb.com/bfs/archive/f7a66727d148241cd2219c26d16924a4fe159d76.jpg@320w_200h.jpg', text: '前方高能！黑长直+名门大小姐！傲娇的千金大小姐也是有害羞的一面的！', fbCount: '78万', playtime: '02:28', dzCount: '3365', plCount:'965' ,headImage: 'http://img1.imgtn.bdimg.com/it/u=3457625298,3428265821&fm=15&gp=0.jpg'},
      {img: 'http://i2.hdslb.com/bfs/archive/01bff916944a8e2c7b2baf14c3c7bd6c276a18e1.jpg@160w_100h.jpg', text: '前方高能！！大型亲吻现场（合集）', fbCount: '12079', playtime: '04:18', dzCount: '165', plCount:'47',headImage: 'http://img2.imgtn.bdimg.com/it/u=3282925844,1520571142&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/8e01f2b92e710f09067315474ba93cea998d8e14.jpg@160w_100h.jpg', text: '全程高燃！当我拔剑的那一刻，就算是神我也杀给你看！', fbCount: '128万', playtime: '03:25', dzCount: '3365', plCount:'965', headImage: 'http://img5.imgtn.bdimg.com/it/u=3729527196,1477877697&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/644e6d5fe822485c738cf3dd5a6d0b630756c76e.jpg@160w_100h.jpg', text: '【绿仙&amp;艾因】中日双语合唱分手名曲《绿色》【翻唱】', fbCount: '17万', playtime: '03:12', dzCount: '1465', plCount:'824',headImage: 'http://img0.imgtn.bdimg.com/it/u=1527831002,1887268750&fm=26&gp=0.jpg' },
      {img: 'http://i1.hdslb.com/bfs/archive/9b12dcdf2b5499f82aeb9c0451503238fefa6bc9.jpg@160w_100h.jpg', text: '【hololive小剧场】【动画】养〇〇的结果wwwwwwwww', fbCount: '321万', playtime: '02:18', dzCount: '7983', plCount:'461',headImage: 'http://img1.imgtn.bdimg.com/it/u=2711649243,590249524&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/f7da55c289d77903a91fe7d614e1db575d5d8fba.png@320w_200h.jpg', text: '十大超甜/恋爱/日常动漫', fbCount: '492万', playtime: '04:16', dzCount: '37476', plCount:'2405',headImage: 'http://img4.imgtn.bdimg.com/it/u=2129343378,2448285848&fm=26&gp=0.jpg' },
      {img: 'http://i2.hdslb.com/bfs/archive/f235e01c5a70333c1372d7ca228a2a45c2430fc1.jpg@320w_200h.jpg', text: '泰坦尼克号_泪点片段', fbCount: '6754', playtime: '02:08', dzCount: '695', plCount:'77',headImage: 'http://img4.imgtn.bdimg.com/it/u=493817149,1840500933&fm=26&gp=0.jpg' },
      {img: 'http://i1.hdslb.com/bfs/archive/3f2c2f9df3f8440b16c58b16dec490de733655e7.jpg@320w_200h.jpg', text: '小清新经典！《怦然心动》英文配音片段', fbCount: '45万', playtime: '01:02', dzCount: '5557', plCount:'269' ,headImage: 'http://img5.imgtn.bdimg.com/it/u=3409586425,3642889484&fm=26&gp=0.jpg'},
      {img: 'http://i1.hdslb.com/bfs/archive/7ea5000c67ba2cab0cc367e588ff7525f4acf48d.jpg@320w_200h.jpg', text: '当我睁开双眼的那一刻！ 全世界都将为之颤抖！！！', fbCount: '247万', playtime: '06:55', dzCount: '22647', plCount:'4112',headImage: 'http://img3.imgtn.bdimg.com/it/u=1612901329,134475848&fm=26&gp=0.jpg' },
      
    ],
    // 页面配置  
    
  // tab切换 
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
  goSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    });
 },
 switchMusic: function (e) {
   console.log(e.currentTarget.dataset.current)
   var that = this;
   if( this.data.currentTab === e.target.dataset.current ) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      }
 },
 bindChange: function (e) {
  console.log(e.detail.current)
  var that = this
  that.setData({
    currentTab: e.detail.current
  })
}
})