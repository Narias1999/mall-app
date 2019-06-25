<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 10 : 2}`"
      color="blue-grey darken-2"
      style="cursor: pointer"
    >
      <v-card-title primary-title>
        <div>
          <div class="headline white--text">{{category.name}}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    category: Object
  }
};
</script>

<style>
</style>
