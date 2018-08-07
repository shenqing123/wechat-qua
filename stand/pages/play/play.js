//index.js
//获取应用实例
const app = getApp()
const util=require('../../utils/util.js')  //按钮音效
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    currentValue:0,
    total:0,//做题数
    score:0,//分数
    myQuesList: app.globalData.num,
    myQues:null,//我的答案
    current: 0,//当前题目编号
    scoreList: [],
    timeHandle:null,//定时器
    action:'normal'
  },
  


  onLoad: function (e) {
    this.setData({
      scoreList:wx.getStorageSync('allScore'),
      
    })

    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (e.action && e.action == 'fast') {
      let self = this;
      this.setData({
        action: 'fast',
        timeHandle: setInterval(function () {
          if (self.data.current < 4) {
            self.bindNext();
          } else {
            self.bindShowGrade();
          }
        }, 2000)
      })
    }


  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //存入我的答案
  tap:function(e){
    this.setData({
      myQues:e.target.dataset.name
    })
  },


  radioChange: function(e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
      

      var items = app.globalData.num;
      for (var i = 0, len = items.length; i < len; ++i) {
        items[i].checked = items[i].value == e.detail.value
        
      }
      //判断题目对错
      this.setData({
        items: items,
        currentValue: e.detail.value
      });
  },
// 下一题
  bindNext:function(){
    //按钮音效
    util.nextAudio.play();
    
    //记录题目对错
    app.globalData.numValue.push(this.data.currentValue)
    //记录我的答案
    app.globalData.answerList.push(this.data.myQues)
    this.setData({
      //移动下标
      current: this.data.current+1,

      
    })
    //更改分数
    if(this.data.currentValue==1){
      if(this.data.action=='fast'){
        this.setData({
          score: this.data.score + 3,
        })
      }else{
        this.setData({
          score: this.data.score + 1,
        })
      }
      
     
    }
    console.log(this.data.score)
  },


  //比较方式
  compare: function (x, y) {
    if (x < y) {
      return 1;
    } else if (x > y) {
      return -1;
    } else {
      return 0;
    }
  },


  //显示成绩
  bindShowGrade:function(){
    //按钮音效
    util.gradeAudio.play();
    //记录题目对错
    app.globalData.numValue.push(this.data.currentValue)
    //记录我的答案
    app.globalData.answerList.push(this.data.myQues)
    //更改分数
    if (this.data.currentValue == 1) {
      if (this.data.action == 'fast') {
        this.setData({
          score: this.data.score + 3,
        })
      } else{
        this.setData({

          score: this.data.score + 1,

        })
      }
      
    }
    //记录分数
    wx.setStorageSync('oneScore',this.data.score)

    //将本次成绩记录到排行榜,去除重复记录
    let flag=0
    for (let i = 0; i < this.data.scoreList.length;i++){
      if (this.data.score == this.data.scoreList[i]){
        flag++;
        break;
      }
    }
    if(flag==0){
      this.data.scoreList.push(this.data.score);
    }
    
    this.data.scoreList.sort(this.compare)
    this.setData({
      scoreList: this.data.scoreList.slice(0, 5)
    })
    
    wx.setStorageSync('allScore', this.data.scoreList)

    //关闭定时器
    clearInterval(this.data.timeHandle)

    wx.redirectTo({
      url: '../award/award'
    })
  },
 


})
