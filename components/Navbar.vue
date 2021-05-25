<template>
  <div>
    <v-app-bar
      app
      flat
    >   
    <v-toolbar-title class="ml-4  display-2">
      <nuxt-link 
        to="/"
        v-text="title"
        class="main-title-font"
        />
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-for="link in links" :key="link.id">
            <v-toolbar-title class="mr-7">
      <nuxt-link 
        :to="link.path"
        v-text="link.title"
        />
    </v-toolbar-title>
      </div>
      <v-spacer />
      <div v-if="isAuthenticated">
            <v-btn 
              @click.prevent="logout"
              depressed
              small
            >
              Logout
            <v-icon right>mdi-logout</v-icon>
            </v-btn>

            <v-btn
              depressed
              small
              @click="messages++"
            >
              Basket
              <v-badge
                :content="messages"
                :value="messages"
                color="green"
                overlap
              >
                <v-icon right class="mr-2">
                  mdi-basket-outline
                </v-icon>
              </v-badge>
            </v-btn>
      </div>


      <div v-if="!isAuthenticated">
        <div>
          <v-btn 
            depressed
            to="/register"
            color="black"
            class="white--text mr-1"
            small
            
          >
            Register
            <v-icon right>mdi-account-plus</v-icon>
          </v-btn>
          <v-btn
            depressed
            to="/login"
            small
          >
            Login
            <v-icon right>mdi-lock-open</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {  },
    computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  data () {
    return {
      title: 'Shop',
      messages: 0,
      links: [
        { title: 'Mens', path: '/appBarLinks/Mens' },
        { title: 'Womans', path: '/appBarLinks/Womans' },
        { title: 'Kids', path: '/appBarLinks/Kids' },
        { title: 'Best Seller', path: '/appBarLinks/BestSeller' },
        { title: 'Collections', path: '/appBarLinks/Collections' },
        { title: 'Sale', path: '/appBarLinks/Sale' },
      ],
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
  a {
    text-decoration: none;
    color: black;
  }

  .main-title-font {
    font-family: 'Shadows Into Light', cursive;
  }
</style>
