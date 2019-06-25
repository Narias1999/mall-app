<template>
  <v-app>
    <v-toolbar color="blue-grey" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>El Baratón</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-hover>
        <v-badge
          slot-scope="{ hover }"
          overlap
          color="primary"
          class="cart_badge"
        >
          <template v-slot:badge v-if="cart.items.length">
            <span dark small>{{cart.items.length}}</span>
          </template>
          <v-btn icon>
            <v-icon>shopping_cart</v-icon>
          </v-btn>
          <cart-top :show="hover"></cart-top>
        </v-badge>
      </v-hover>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Categorías</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="categorie in categories"
          :key="categorie.id"
          :to="{ path: '/categories/'+categorie.id}"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ categorie.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <v-navigation-drawer v-model="right" right temporary fixed></v-navigation-drawer>
  </v-app>
</template>
<style>
.cart_badge > span {
  right: 0 !important;
  top: 0 !important;
}
</style>

<script>
import CartTop from "./components/CartTop";
import { categories } from "./api";
export default {
  name: "App",
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
  }),
  props: {
    source: String
  },
  components: {
    CartTop
  },
  computed: {
    cart() {
      return this.$store.state.shoppingCart;
    }
  },
  beforeMount() {
    this.categories = categories;
  }
};
</script>
