<template>
    <v-container>
        <v-tabs
            centered 
            color="black"
            v-model="tab"
        >
            <v-tab
                v-for="category in categoryes"
                :key="category.id"
            >
                {{category}}
            </v-tab>
        </v-tabs>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            tab: 0,
            categoryes: [
               'New',
               'Mens',
               'Womans',
               'Kids',
               'Sale',
            ]
        }),
        watch: {
            tab(val) {
                if(this.tab === 0) {
                    this.showAllEvents()
                }else {
                    this.showWEventByType()
                }
            }
        },
        methods: {
            showAllEvents() {
                console.log('all');
            },
            showWEventByType() {
                console.log('type');
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>