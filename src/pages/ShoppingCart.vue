<template>
  <v-container>
    <v-layout text-xs-center wrap></v-layout>
    <v-btn :disabled="!cart.items.length" @click="buy">comprar</v-btn>
  </v-container>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  computed: {
    cart() {
      return this.$store.state.shoppingCart;
    },
    subtotal() {
      return this.$store.getters.totalCartValue;
    },
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    buy() {
      const cartLength = this.cart.items.length;
      // substract the bought quantity
      const productsUpdated = this.products.map(product => {
        for (let i = 0; i < cartLength; i++) {
          const item = this.cart.items[i];
          if (item.id === product.id) {
            product.quantity -= item.quantity;
            break;
          }
        }
        return product;
      });

      this.$store.commit("updateProducts", productsUpdated);
      this.$store.commit("cleanShoppingCart");
      Swal.fire("Excelente!", "Compra realizada con éxito!", "success");
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
