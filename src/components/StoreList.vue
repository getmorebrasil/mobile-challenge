<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lojas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content" padding>
        <ion-list>
          <ion-item v-for="store of stores" v-bind:key="store.id">
            <ion-label full>{{ store.name }}</ion-label>
            <ion-button @click='checkStore(store.id)'>+ Informações</ion-button>
          </ion-item>
        </ion-list>
    </ion-content>
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
    let vm = this

    this.$http.get('http://challenge.getmore.com.br/stores').then(response => {
      vm.stores = response.body
    })
  },
  methods: {
    checkStore (id) {
      console.log(`Clicked on store id ${id}`)
      this.$router.push(`/store/${id}`)
    }
  }
}
</script>
