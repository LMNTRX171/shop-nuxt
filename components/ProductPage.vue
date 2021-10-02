<template>
<div>
<div>
<v-container>
    <v-row>
        <v-col
            cols="12"
            sm="6"
        >
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
            <CardForItem 
                :title = thisProduct.title
                :description= thisProduct.description
                :price= thisProduct.price
            />
            </v-sheet>
        </v-col>

        <v-col
            cols="12"
            sm="6"
        >
        <v-sheet
            rounded="lg"
            min-height="268"
        >
            <p>Cols3</p>
        </v-sheet>
        </v-col>
    </v-row>
</v-container>
</div>
</div>
</template>

<script>
import CardForItem from '../components/CardForItem.vue'
export default {
    components: {
        CardForItem
    },
    props: ['thisPtoduct']
}
</script>