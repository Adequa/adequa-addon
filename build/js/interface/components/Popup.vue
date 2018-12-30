<template>
    <div id="popup">
        <header>
            <h2>RÉGLAGES</h2>
            <button-group :current="defaultActive ? 1 : 2">
                <adequa-button @button-clicked="buttonClicked" text="PAR DÉFAUT" :button-id="1"
                               :active="defaultActive"></adequa-button>
                <adequa-button @button-clicked="buttonClicked" text="SUR CE SITE" :button-id="2"
                               :active="websiteActive"></adequa-button>
            </button-group>
        </header>
        <hr>
        <main>
            <router-view :website-settings="websiteActive"></router-view>
        </main>
        <nav>
            <router-link v-if="this.$route.path === '/'" to="/vendors" style="align-self: flex-end">PAR PARTENAIRE ></router-link>
            <router-link v-if="this.$route.path === '/vendors'" to="/">< PAR USAGE</router-link>
        </nav>
        <hr>
        <footer>
            <img src="img/icon_adequa.png" alt="logo adequa"/>
        </footer>
    </div>
</template>

<script>
    import AdequaButton from "./AdequaButton.vue";
    import ButtonGroup from "./ButtonGroup.vue";

    export default {
        name: "Popup",
        components: {ButtonGroup, AdequaButton},
        data: function () {
            return {
                defaultActive: false,
                websiteActive: true
            }
        },
        methods: {
            buttonClicked: function (e) {
                if (e.button === 1 && !this.defaultActive) {
                    this.defaultActive = true;
                    this.websiteActive = false;
                } else if (e.button === 2 && !this.websiteActive) {
                    this.defaultActive = false;
                    this.websiteActive = true;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #popup {
        margin: 5px;
    }

    main {
        overflow-y: auto;
        height: 300px;
        max-height: 300px;
    }

    h2 {
        text-align: center;
        font-family: "Josefin Sans", sans-serif;
        font-weight: normal;
        margin: 10px 0;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 40px;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        a {
            text-decoration: none;
            color: grey;
        }
    }
</style>
