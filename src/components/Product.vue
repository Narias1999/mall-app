<template>
  <v-card
    :class="`pa-2`"
    :color="`blue-grey ${product.available ? 'darken-2' : 'lighten-1'}`"
  >
    <v-layout>
      <v-flex xs-8>
        <h2 class="headline white--text">{{product.name}}</h2>
        <span class="body-1 white--text">{{product.price}}</span><br>
        <span class="body-1 white--text">{{product.quantity}} en stock</span>
      </v-flex>
      <v-flex xs-4 text-xs-right class="right-center">
        <v-btn icon color="primary" :disabled="!product.available" @click="$emit('addToCart', product)">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<style scoped>
.right-center {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style>
</style>
