// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rule:'共两种模式，普通模式下答对一题得1分，快问快答模式下，每题仅有2秒作答时间，答对一题得3分。',
    info:''
  },

  bindStart: function () {
    wx.redirectTo({
      url: '../begin/begin',
    })
  },
})