Page({

  onShow() {
    console.log('引导关注公众号');
  },

  goPage() {
    wx.navigateTo({
      url: '/pages/official-account/official-account',
    })
  }

})