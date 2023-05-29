<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card max-width="600" id="search-bar">
          <v-card-text class="mx-auto" >
            <div >
              <v-card-title class="text-h3 mb-4">Welcome</v-card-title>
              <v-card-subtitle class="mb-5">Discover millions of Movies and TV shows</v-card-subtitle>
            </div>
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Search Movies, Shows..."
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              clearable
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    loading: false,
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>

<style scoped>
#search-bar {
  margin: 120px auto 0 auto;
  padding: none;
}
/* #search-container-text{
    margin: 0 auto;
} */
.v-card{
    border: none;
    box-shadow: none;
}
</style>