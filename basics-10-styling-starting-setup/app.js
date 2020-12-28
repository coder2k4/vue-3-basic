const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false
    }
  },
  methods: {
    boxSelected(box) {
      if(box === 'A') {
        this.boxA = !this.boxA
      }
      if(box === 'B') {
        this.boxB = !this.boxB
      }
      if(box === 'C') {
        this.boxC = !this.boxC
      }
    },
  },
  computed: {
    methodWithReturn() {
      return 'active'
    }
  }
})

app.mount('#styling')