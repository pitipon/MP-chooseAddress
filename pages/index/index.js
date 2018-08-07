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
      scope: 'scope.address',
      success(res) {
          console.log(33,res)
          wx.chooseAddress({
            success: function (res) {
              console.log(44,res)
            }
          })
      },
      fail(err) {
        console.log(44,err)
      }
    })
  }
})
