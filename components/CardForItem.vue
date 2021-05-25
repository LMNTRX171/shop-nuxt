<template>
    <div>
        <v-card
        class="mx-auto"
        max-width="400"
        elevation="0"
        >
        <v-img
            class="white--text align-end"
            height="400px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
            {{title}}
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{description}}</div>

            <div>{{description}}</div>
            <div>{{categories}}</div>

            <div>{{price}} ₽</div>
        </v-card-text>
        
        <v-card-actions
            class="justify-center"
        >
            <v-btn
            color="orange"
            text
            >
            Add to card
            </v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['title', 'description', 'price', 'categories']
    }
</script>

<style lang="sass" scoped>

</style>