//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  
  onLoad: function () {
   
  },
  openSetting: function () {
    wx.getSetting({
      success(res) {
        console.log(22,res)
      }
    })
  },

  checkAuthorize: function () {
    
    wx.authorize({
      scope: 'scope.userLocation',
      success(res) {
          console.log(333,res)
          
      },
      fail(err) {
        console.log(44,err)
      }
      })

  }
})
