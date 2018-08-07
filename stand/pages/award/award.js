//index.js
//获取应用实例
const app = getApp()
console.log("dd")
Page({
  data: {
    fscore: 0,
    num: 0,
    numValue: app.globalData.numValue,
    scoreList:[]
  },


  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function () {

    console.log(this.data.scoreList)
    this.setData({
      fscore: wx.getStorageSync('oneScore'),
      scoreList : wx.getStorageSync('allScore'),
      num: app.globalData.num

    })
  },



  bindStart: function () {

    
    //清空本次成绩
    wx.removeStorageSync('score');
    //清空本次题目序列
    app.globalData.num.length=0;
    wx.redirectTo({
      url: '../begin/begin',
    })
  },

  select:function(e){
   //获取当前题号
    let no=e.target.dataset.num;
    app.globalData.nowQuestion=no;
    console.log("tihao1 " + no)
    console.log("tihao "+app.globalData.nowQuestion)
    wx.redirectTo({
      url: '../detail/detail',
    })
  }
  
})
