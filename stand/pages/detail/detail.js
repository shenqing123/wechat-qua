// pages/detail/detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    //答案的对错表
    numValue:app.globalData.numValue,
    //当前问题
    nowQuestion: 0,
    //正确答案
    right:"",
    //你的答案
    yourAnswer:"",
    //解析
    why:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    let no = app.globalData.nowQuestion

    this.setData({
      //加载当前题目
      nowQuestion: app.globalData.num[no],
      //加载你的答案
      yourAnswer: app.globalData.answerList[no],

    })
    console.log(app.globalData.answerList)
    //加载正确答案
    for(let i=0;i<4;i++){
      if (this.data.nowQuestion.items[i].value==1){
        this.setData({
          right: this.data.nowQuestion.items[i].name
         
        })
      }
    }

  },

 bindBack:function(){
   wx.redirectTo({
     url: '../award/award',
   })
 }
})