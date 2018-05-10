<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Ionic 4 + Vue Application </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        This is page 2
      </ion-content>
      <ion-footer>
        <ion-button @click="goHome" full>Go home</ion-button>
      </ion-footer>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
