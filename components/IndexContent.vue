<template>
        <v-container >  
      <v-row>
          <v-col
            cols="12"
            sm="6"
            class="pl-0 pr-0 pt-3 ma-0"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            <v-card elevation="0">
              <v-img  
                height="840"
                width="900"
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                class="flex align-center white--text"
              >
                <v-card-title class="d-flex justify-center font-test">MENS COLLECTION</v-card-title>
              </v-img> 
            </v-card>
            </v-sheet>
          </v-col>


          <v-col
            cols="12"
            sm="6"
            class="pl-0 pr-0 pt-2 ma-0"
          >
            <v-sheet
              min-height="50vh"
              rounded="lg"
            >
            <v-card
              height="800"
              width="900"
              class="d-flex justify-center mb-6"
              elevation="0"
            >
              <v-card elevation="0" class="d-flex justify-center mb-6">
                <v-card-actions >
                  <v-btn                   
                    outlined
                    text 
                    color="indigo darken-4"
                    x-large
                    to="/appBarLinks/Mens"
                  >
                    SHOP MEN
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
            </v-sheet>
          </v-col>
        </v-row>
              <v-row>
          <v-col
            cols="12"
            sm="6"
            class="pa-0 ma-0"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            <v-card
              height="800"
              width="900"
              class="d-flex justify-center mb-6"
              elevation="0"
            >
              <v-card elevation="0" class="d-flex justify-center mb-6">
                <v-card-actions >
                  <v-btn
                  outlined
                  text 
                  color="indigo darken-4"
                  x-large
                  to="/appBarLinks/Womans"
                  >
                    SHOP WOMEN
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
            </v-sheet>
          </v-col>


          <v-col
            cols="12"
            sm="6"
            class="pl-0 pr-0 pb-2"
          >
            <v-sheet
              min-height="50vh"
              rounded="lg"
            >
            <v-card elevation="0">
              <v-img
                height="840"
                width="900"
                class="flex align-center black--text"
                src="https://images.unsplash.com/photo-1473861646675-0252edc45daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

              >
                <v-card-title class="d-flex justify-center font-test">WOMENS COLLECTION</v-card-title>
              </v-img>
            </v-card>
            </v-sheet>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            
        }),
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
.font-test {
  font-family: 'Poiret One', cursive;
  font-size: 70px;
}

/* .v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
} */
</style>