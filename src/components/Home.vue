<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lojas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="content" padding>

      <template v-if='apiReached == -1'>
        <p><i class="fa fa-5x fa-ellipsis-h"></i></p>
        <p>Buscando lojas, aguarde um momento...</p>
      </template>

      <template v-if='apiReached == 0'>
        <p><i class='fa fa-5x fa-wifi'></i></p>
        <p>Não foi possível encontrar as lojas, verifique a sua conexão de internet!</p>
      </template>

      <template v-else>
        <ion-list style="display: flex; justify-content: center;">
          <div>
              <ion-item v-for="store of stores" v-bind:key="store.id"
                style="padding-bottom: 15px; text-align: center;">
              <img @click='checkStore(store.id)'
                v-bind:src="store.image_blob" onerror="src='/static/empty-logo.png'"
                width=120 height=60 style="text-align: center;">

              <div style="padding-left: 10px">
                <p style="text-align: center">{{ store.name }}</p>
                <p style="text-align: center">(Takeback: {{ parseFloat(store.takeback).toFixed(2) }})</p>
                <ion-button @click='checkStore(store.id)'>+ Informações</ion-button>
              </div>
            </ion-item>
          </div>

        </ion-list>
      </template>

    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      stores: null,
      apiReached: -1
    }
  },
  created () { // As soon as the instance is created, get stores from the API
    let vm = this

    this.$http.get('http://challenge.getmore.com.br/stores', {'timeout': 5000}).then(
      response => { // SUCCESSFUL
        vm.$nextTick(function () {
          vm.stores = response.body
          vm.apiReached = 1
        })
      },
      response => { // ERROR
        vm.$nextTick(function () {
          vm.apiReached = 0
        })
      })
  },
  methods: {
    checkStore (id) {
      this.$router.push(`/store/${id}`)
    }
  }
}
</script>
