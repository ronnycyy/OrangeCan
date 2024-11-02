Component({

  properties: {
  },

  data: {
    show: true,
  },

  methods: {
    onError(e) {
      console.log(e);
    },
    onLoaded(e) {
      console.log(e);
    },
    onClose() {
      this.setData({ show: false });
    }
  }
})
