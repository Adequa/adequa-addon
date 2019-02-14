<template>
    <div>
        <a v-if="showMenu()" href="#" @click="$router.go(-1)" class="close-menu"><font-awesome-icon icon="times"></font-awesome-icon></a>

        <nav>
            <router-link to="/cookies"><hover-button :text="'MES ' + nbCookies + ' COOKIES'"></hover-button></router-link>
            <router-link to="/choices"><hover-button text="MES CHOIX"></hover-button></router-link>
            <router-link to="/desires"><hover-button text="MES ENVIES"></hover-button></router-link>
            <span @click="addToWhitelist" v-if="!website.whitelisted">Signaler et réparer un site non fonctionnel</span>
            <span v-else class="whitelisted">{{ website.hostname }} est whitelisté <span @click="removeFromWhitelist">(enlever)</span></span>
        </nav>
    </div>
</template>

<script>
    import HoverButton from "./HoverButton.vue";
    export default {
        name: "Menu",
        components: {HoverButton},
        methods: {
            showMenu() {
                return window.history.length > 1;
            },
            addToWhitelist(){
                Adequa.API.runtime.sendMessage({what: 'addToWhitelist'}, (website) => {
                    this.website = website
                })
            },
            removeFromWhitelist(){
                Adequa.API.runtime.sendMessage({what: 'removeFromWhitelist'}, (website) => {
                    this.website = website
                })
            }
        },
        data(){
            return {
                website: {
                    whitelisted: false,
                    hostname: "Ce site"
                }
            }
        },
        props: ['nb-cookies'],
        created(){
            Adequa.API.runtime.sendMessage({what: "getCurrentWebsite"}, (website) => {
                if(website) this.website = website
            });
        }
    }
</script>

<style scoped lang="scss">
    .close-menu {
        color: grey;
        transition: color 0.2s ease;
        position: absolute;
        top: 5%;
        right: 5%;
        height: 15px;
        width: 15px;
    }

    .close-menu:hover {
        color: black;
    }

    .whitelisted {
        color: var(--green)!important;
        cursor: auto!important;
    }
    .whitelisted:hover {
        text-shadow: none!important;
    }

    span {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 300;
        color: var(--red);
        cursor: pointer;
        transition: all .2s;
    }
    span:hover {
        /*font-weight: 400;*/
        text-shadow:
                -0.2px -0.2px 0 var(--red),
                0.2px -0.2px 0 var(--red),
                -0.2px 0.2px 0 var(--red),
                0.2px 0.2px 0 var(--red);
        transition: all .2s;
    }
    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 65px;
        padding-top: 55px;
        z-index: 9999999;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
    nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;

        a {
            color: grey;
            font-family: "Montserrat", sans-serif;
            text-decoration: none;
            font-weight: bold;
        }
    }
</style>
