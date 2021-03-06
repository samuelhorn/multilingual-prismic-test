import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/samuelhorn/Sites/wlsn-nuxt-prismic/slices/${sliceName}.vue`), import(`/Users/samuelhorn/Sites/wlsn-nuxt-prismic/slices/${sliceName}/index.vue`), import(`/Users/samuelhorn/Sites/wlsn-nuxt-prismic/slices/${sliceName}/index.js`), import(`/Users/samuelhorn/Sites/wlsn-nuxt-prismic/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
