const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//按钮音效对象
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = false

innerAudioContext.src = 'http://s.aigei.com/pvaud_mp3/aud/mp3/46/46563f59eede4acb85f1b75de1338b38.mp3?download/01_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3&e=1530548520&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:pxDTBckLtHp37u4X54RJJ8y0aNE='
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})

const innerAudioContext2 = wx.createInnerAudioContext()
innerAudioContext2.autoplay = false

innerAudioContext2.src = 'http://s.aigei.com/src/aud/mp3/ce/ce3c6df92e284318a3cc24c580c21f67.mp3?download/%E7%BB%93%E6%9D%9F%E5%8D%87%E7%BA%A7%E5%A4%B1%E8%B4%A5%E8%83%9C%E5%88%A9_0+_26.mp3_%E7%88%B1%E7%BB%99%E7%BD%91_aigei_com.mp3&e=1530548640&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:6WHswqLUmpHX4_-m0jeUdqnO5WY='
innerAudioContext2.onPlay(() => {
  console.log('开始播放2')
})
innerAudioContext2.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})


module.exports = {
  formatTime: formatTime,
  nextAudio: innerAudioContext,
  gradeAudio: innerAudioContext2
}


