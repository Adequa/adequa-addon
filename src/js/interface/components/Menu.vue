<template>
    <div>
        <a v-if="showMenu()" href="#" @click="$router.go(-1)" class="close-menu"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEuMTEyIDMxLjExMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuMTEyIDMxLjExMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gcG9pbnRzPSIzMS4xMTIsMS40MTQgMjkuNjk4LDAgMTUuNTU2LDE0LjE0MiAxLjQxNCwwIDAsMS40MTQgMTQuMTQyLDE1LjU1NiAwLDI5LjY5OCAxLjQxNCwzMS4xMTIgMTUuNTU2LDE2Ljk3IA0KCTI5LjY5OCwzMS4xMTIgMzEuMTEyLDI5LjY5OCAxNi45NywxNS41NTYgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="></a>

        <nav>
            <router-link to="/cookies"><hover-button :text="'MES ' + nbCookies + ' COOKIES'"></hover-button></router-link>
            <router-link to="/choices"><hover-button text="MES CHOIX"></hover-button></router-link>
            <router-link to="/desires"><hover-button text="MES ENVIES"></hover-button></router-link>
            <span @click="onClick">Signaler et réparer un site non fonctionnel</span>
        </nav>
        <!--<span @click="onClick">Site cassé</span>-->
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
            onClick(){
                Adequa.API.runtime.sendMessage({what: 'brokenWebsite'})
            }
        },
        props: ['nb-cookies']
    }
</script>

<style scoped lang="scss">
    .close-menu {
        position: absolute;
        top: 5px;
        right: 5px;
        height: 15px;
        width: 15px;
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
