<template>
    <div id="interests">
        <header>
            <h2>MES ENVIES</h2>
        </header>
        <hr>
        <main>
            <div class="interest-group">
                <interest-setting v-for="interest of validatedInterests" :interest="interest" :key="interest.name"
                                @interest-change="interestChange"></interest-setting>
            </div>
            <div>
                <span @click="showOffers">Montre moi les offres</span>
            </div>
        </main>
    </div>
</template>

<script>
    import InterestSetting from './InterestSetting.vue'

    export default {
        name: "Interests",
        components: {InterestSetting},
        data() {
            return {
                interests: []
            }
        },
        computed: {
            validatedInterests() {
                return this.interests.filter(interest => interest.validated && !interest.removed)
            },
            detectedInterests() {
                return this.interests.filter(interest => !interest.removed && !interest.validated)
            }
        },
        methods: {
            interestChange(interest) {
                Adequa.API.runtime.sendMessage({what: "setInterest", interest}, () => {
                    Adequa.API.runtime.sendMessage({what: "getInterests"}, (interests) => this.interests = interests)
                })
            },
            showOffers(){
                Adequa.API.runtime.sendMessage({what: "pollCatalogs"})
                window.close();
            }
        },
        created() {
            Adequa.API.runtime.sendMessage({what: "getInterests"}, (interests) => this.interests = interests);
        }
    }
</script>

<style scoped lang="scss">
    #interests {
        flex: 1;
    }

    .interest-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    h2 {
        font-family: "Josefin Sans", sans-serif;
        padding-top: 4px;
        margin-top: -47px;
        margin-bottom: 40px;
        text-align: center;
        font-size: 25px;
        color: black;
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        margin-bottom: 5px;
    }

    main {
        max-height: 325px;
        height: 325px;
        overflow-y: overlay;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-right: 16px;
    }

    main > div:first-child {
        height: 300px;
        max-height: 300px
    }
    main > div:last-child {
        height: 25px;
        max-height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: grey;
            font-weight: 300;
            font-family: "Josefin Sans", sans-serif;
            cursor: pointer;
        }
    }
</style>
