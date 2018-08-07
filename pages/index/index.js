//index.js
//获取应用实例
const app = getApp()

Page({

  openSetting: function () {
    wx.getSetting({
      success(res) {
        console.log(22,res)   
      }
    })
  },

  grantAuthorizeLocation: function () { 
    wx.authorize({
      scope: 'scope.userLocation',
      success(res) {
          console.log(33,res)
          wx.openLocation({
            latitude: 30.64242,
            longitude: 104.04311,
            scale: 28
          })
      },
      fail(err) {
        console.log(44,err)
      }
    })
  }
})
