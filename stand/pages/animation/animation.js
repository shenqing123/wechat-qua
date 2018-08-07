// pages/animation/animation.js
Page({
  data:{
    timeHandle:null,
    timeHandle2:null
  },
  onLoad: function () {
    let fps = 0;
    let cxt = wx.createContext();
    let dd = [];
    let vw= wx.getSystemInfoSync().windowWidth;
    let vh= wx.getSystemInfoSync().windowHeight;
    
    //line对象，初始位置，加速度
    function Line(x, y, v) {
      this.x = x;
      this.y = y;
      this.a = x;
      this.b = y;
      this.v = v;
    }

    Line.prototype.update = function () {
      cxt.beginPath();
      cxt.setLineWidth(50);
      cxt.setStrokeStyle('red');
      cxt.moveTo(this.x, this.y);
      cxt.lineTo(this.a, this.b);
      cxt.stroke();
      cxt.closePath();
      this.a += this.v;
      this.b += this.v;
    }

    for (let i = 0; i < 30; i++) {
      let v = [4.5, 4.2, 3.7, 3.5, 4]
      let k = Math.floor(Math.random() * 5)
      dd.push(new Line(-10, i * 50, v[k]))
      dd.push(new Line(i * 50, -10, v[k]))
      console.log(k)
    }

    let render=function () {
      fps++;

     
      
      if (fps <= 300) {
        
        for (let i = 0; i < 30; i++) {
          dd[i].update();
        }
        
        drawFont(fps/10);
      }

      wx.drawCanvas({
        canvasId: 'canvas',
        actions: cxt.getActions()
      })

      
    }

    let drawFont= function (x) {
      let time = 3 - Math.floor(fps / 60);
      let size = (Math.sin(x) + 1) * 30 +20
      cxt.setFontSize(size)
      cxt.fillText(time, (vw-size/2) / 2,(vh-size/2) / 2)
    }

    this.setData({
      timeHandle2:setInterval(function(){
      render();
    },17)
    })

  },







  onReady(){
    
    this.setData({
      timeHandle:setTimeout(function(){
        wx.redirectTo({
          url: '../play/play?action=fast',
        })
      },3000),

      
    })
  },
  onUnload(){
    clearTimeout(this.data.timeHandle)
    clearInterval(this.data.timeHandle2)
  }


})
