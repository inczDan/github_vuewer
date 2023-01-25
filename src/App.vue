<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-btn      
        href="https://github.com/inczDan"
        target="_blank"
        text
      >
        <v-img
          alt="logotipo businsz"
          class="shrink mt-1 "
          contain
          src="data:image/png;base64,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"
          width="110"
        />
      </v-btn>
      </div>

      <v-spacer></v-spacer>

      
   
      
     
    </v-app-bar>

    <v-main>
      <GithubVuewer/>
    </v-main>
  </v-app>
</template>

<script>
import GithubVuewer from './components/GithubVuewer';

export default {
  name: 'App',

  components: {
    GithubVuewer,
  },

  data: () => ({
    //
  }),
};
</script>
