<template>
    <div id="popup">
        <div>
            <transition :name="transition" class="transition" mode="in-out">
                <router-view :nb-cookies="cookies.length"></router-view>
            </transition>
            <router-link v-if="$route.path !== '/'" to="/" class="open-menu"><img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4=">
            </router-link>
        </div>
        <footer>
            <hr>
            <div @click="openSite">
                <img src="img/adequa.svg" height="20" width="20" alt="Adequa Logo">
                <span>Adequa</span>
            </div>
            <font-awesome-icon :icon="['far', 'question-circle']" title="Aide" @click="openHelp"></font-awesome-icon>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Popup",
        data(){
            return {
                transition: 'menu-slide',
                cookies: []
            }
        },
        methods: {
            openSite() {
                Adequa.API.runtime.sendMessage({what: "openTab", url: "https://adequa.me/"})
            },
            openHelp(){
                Adequa.API.runtime.sendMessage({what: "openTab", url: "https://adequa.me/help"})
            }
        },
        watch: {
            '$route' (to, from) {
                this.transition = to.path === '/' ? 'view-slide' : 'menu-slide'
            }
        },
        created(){
            Adequa.API.runtime.sendMessage({what: "openPopup"});
            Adequa.API.runtime.sendMessage({what: "getCookies"}, (cookies) => {
                this.cookies = cookies;
            });
            setInterval(()=> {
                Adequa.API.runtime.sendMessage({what: "getCookies"}, (cookies) => {
                    void Adequa.API.runtime.lastError;
                    this.cookies = cookies;
                });
            }, 2000)
        }
    }
</script>

<style scoped lang="scss">
    /*.menu-slide-enter,*/
    .menu-slide-leave-to {
        transform: translateX(-100%);
    }

    /*.menu-slide-enter-to,*/
    .menu-slide-leave {
        transform: translateX(0%);
    }

    /*.menu-slide-enter-active,*/
    .menu-slide-leave-active {
        transition: transform 0.2s linear;
    }

    .view-slide-enter {
        transform: translateX(-100%);
    }

    .view-slide-enter-to {
        transform: translateX(0%);
    }

    .view-slide-enter-active {
        transition: transform 0.2s linear;
    }

    #popup {
        padding: 55px 5px 5px;
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        > div {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin: 0 8%;
        }
    }

    .open-menu {
        position: absolute;
        top: 5px;
        left: 5px;
    }

    footer {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 15px 0;
        position: relative;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            margin-top: 10px;
        }

        span {
            font-family: "Josefin Sans", sans-serif;
            font-size: 14px;
            padding-top: 8px;
        }

        hr {
            width: 412px;
            margin: 15px 8%;
        }

        > svg {
            position: absolute;
            bottom: 0;
            right: 40px;
            cursor: pointer;
            color: grey;
            transition: color 0.2s ease;
        }
        > svg:hover {
            color: black;
        }
    }
</style>
