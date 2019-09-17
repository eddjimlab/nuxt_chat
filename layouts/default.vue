<template>
  <v-app app dark>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-toolbar app>
      <v-btn icon @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{ user.room }}</v-toolbar-title>
    </v-toolbar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <div>
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['user']),
  methods: {
    exit () {}
  }
}
</script>
