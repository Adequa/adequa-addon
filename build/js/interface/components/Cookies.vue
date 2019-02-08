<template>
    <div>
        <header>
            <h2>MES COOKIES</h2>
        </header>
        <hr>
        <main>
            <cookie-purpose v-for="purpose of purposes" :key="purpose.id" :purpose="purpose" :cookies="cookies" :domains="domains" @cookie-deleted="updateCookies"></cookie-purpose>
        </main>
    </div>
</template>

<script>
    import CookiePurpose from './CookiePurpose.vue'

    export default {
        name: "Cookies",
        components: {CookiePurpose},
        methods: {
            onClick(purposeId) {
                Adequa.API.runtime.sendMessage({what: "deleteCookiesByPurpose", purpose: purposeId});
                this.cookies[purposeId] = [];
            },
            updateCookies(){
                Adequa.API.runtime.sendMessage({what: "getCookiesByPurpose"}, (cookies) => {
                    this.cookies = cookies;
                });
                Adequa.API.runtime.sendMessage({what: "getCookieDomainsByPurpose"}, (domains) => {
                    this.domains = domains;
                });
            }
        },
        data() {
            return {
                purposes: [],
                cookies: {},
                domains: {}
            }
        },
        created() {
            Adequa.API.runtime.sendMessage({what: "getCookiePurposes"}, (purposes) => {
                this.purposes = purposes;
            });
            Adequa.API.runtime.sendMessage({what: "getCookiesByPurpose"}, (cookies) => {
                this.cookies = cookies;
            });
            Adequa.API.runtime.sendMessage({what: "getCookieDomainsByPurpose"}, (domains) => {
                this.domains = domains;
            });
        }
    }
</script>

<style scoped lang="scss">
    div {
        flex: 1;
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

    main {
        max-height: 300px;
        height: 300px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
    }

    .link {
        color: grey;
        cursor: pointer;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
