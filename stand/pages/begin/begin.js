//index.js
//获取应用实例
const app = getApp()
const util=require('../../utils/util.js')  //按钮音效
const wordList = require('../../utils/word.js')  //题库
Page({
 
  bindStart: function () {
    
    util.nextAudio.play();
    
    wx.redirectTo({   //页面
      url: '../play/play',
    })
  },

  bindInfo: function () {
    util.nextAudio.play();
    wx.redirectTo({
      url: '../info/info',
    })
  },
  
  bindFast: function () {
    util.nextAudio.play();
    wx.redirectTo({
      url: '../animation/animation',
    })
  },


  //生成不重复的随机整数序列
  getNumNoReapt: function () {
    let array=[]
   

    //1.初始化:按序列号依次赋值
  for (let i= 0; i < 10; i++)
  {
     array[i] = i;
  }
  //2.生成不同的随机数序列
  for (let i= 0; i < 10; i++) 
  {
    let rand = Math.floor(Math.random() * 10);
    let num1 = array[i];
    let num2 = array[rand];
    [num1,num2]=[num2,num1];
    array[i]=num1;
    array[rand]=num2;
   
  }
    //3.将题库中的题抽取出来
    for(let k=0;k<5;k++){
      let no=array[k];
      app.globalData.num.push(wordList.word[no])
    }
    console.log(app.globalData.num)
  },

  onReady:function(){
    //生成题目
    this.getNumNoReapt();
    //清除错题记录
    app.globalData.numValue.length = 0;
    
    
  }



})
