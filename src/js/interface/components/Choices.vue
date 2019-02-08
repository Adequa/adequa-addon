<template>
    <div>
        <header>
            <h2>MES CHOIX</h2>
        </header>
        <hr>
        <div>
            <p>
                Lorsque vous naviguez, des cookies sont déposés sur votre navigateur.
                Pour certains d'entre eux, votre consentement est nécessaire.
                Cliquez sur chaque catégorie de cookies pour accepter ou refuser leur utilisation.
            </p>
            <span>
                Sur tous les sites (par défaut)
            </span>
            <main>
                <router-view :website-settings="false"></router-view>
            </main>
            <span class="link" @click="buttonClicked">Sur ce site</span>
        </div>
        <!--<nav>-->
        <!--<router-link to="/choices">Purposes</router-link>-->
        <!--<router-link to="/choices/vendors">Vendors</router-link>-->
        <!--</nav>-->
    </div>
</template>

<script>
    import AdequaButton from "./AdequaButton.vue";
    import ButtonGroup from "./ButtonGroup.vue";

    export default {
        name: "Choices",
        components: {ButtonGroup, AdequaButton},
        methods: {
            buttonClicked: function () {
                Adequa.API.runtime.sendMessage({what: "openModal"}, () => {
                    window.close();
                    void chrome.runtime.lastError;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    h2 {
        font-family: "Josefin Sans", sans-serif;
        padding-top: 4px;
        margin-top: -47px;
        text-align: center;
        font-size: 25px;
        color: black;
    }

    main {
        max-height: 220px;
        height: 220px;
        overflow-y: auto;
        margin: 10px 0;
    }

    div {
        font-family: "Josefin Sans", sans-serif;

        > p {
            text-align: justify;
            font-family: 'Josefin Slab', serif;
            font-size: 16px;
            margin-bottom: 15px;
        }
    }

    .link {
        color: grey;
        cursor: pointer;
        font-weight: 300;
        transition: color 0.2s ease;
    }

    .link:hover {
        color: black;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
