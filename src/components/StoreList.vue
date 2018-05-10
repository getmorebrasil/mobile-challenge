<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Lojas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
          <ion-list>
            <ion-item v-for="store of stores" v-bind:key="store.id">
              <ion-label full>{{ store.name }}</ion-label>
            </ion-item>
          </ion-list>
      </ion-content>
      <ion-footer>
      <ion-button @click="goToPage2" full>Go to Page 2</ion-button>
  </ion-footer>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      stores: null
    }
  },
  created () { // As soon as the instance is created, get stores from the API
    this.getStores()
  },
  methods: {
    goToPage2 () {
      this.$router.push('/store')
    },
    getStores () {
      let vm = this

      this.$http.get('http://challenge.getmore.com.br/stores').then(response => {
        vm.stores = response.body
      })
    }
  }
}
</script>
