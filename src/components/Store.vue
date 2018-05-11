<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ store.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content" padding>
      <ion-label>Nota: {{ store.rating }}</ion-label>

      <!-- TODO: This requires inapp-browser for Cordova, check vue-cordosa to use it -->
      <ion-button href="store.url">Acessar loja</ion-button>

      <ion-label>Categoria(s):</ion-label>
        <!-- <ion-scroll>
          <ion-list>
            <ion-item v-for="item of store.category" v-bind:key="item">{{ item }}</ion-item>
          </ion-list>
        </ion-scroll> -->

    </ion-content>
    <ion-footer>
      <ion-button @click="goHome" full>Voltar</ion-button>
    </ion-footer>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      store: null
    }
  },
  created () {
    let vm = this

    this.$http.get(`http://challenge.getmore.com.br/stores/${this.$route.params.id}`).then(response => {
      vm.store = response.body
    })
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
