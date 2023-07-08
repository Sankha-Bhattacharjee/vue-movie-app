<template>
    <v-container>
        <h2 class="mb-4">{{ titleText }}</h2>
      <v-row>
        <v-col
          v-for="n in this.gridContent"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item >
            <v-card
              class="d-flex align-center"
              dark
              height="400"
              width="300"
            >
              <img :src="'https://image.tmdb.org/t/p/w500'+n.poster_path" height="400" width="300">
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>


export default {
  props: ["titleText","gridContent"],
}
</script>
