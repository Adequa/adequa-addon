<template>
    <div>
        <div class="purpose">
            <span class="expand" @click="toggleExpand">+</span>
            <div>
                <p>{{ purpose.name }}</p>
                <p>{{ ((cookies || {})[purpose.id] || []).length }}</p>
            </div>
            <span class="link" @click="deletePurpose(purpose.id)">Supprimer</span>
        </div>
        <div v-if="expanded" v-for="domain of (domains || {})[purpose.id]" class="domain">
            <div>
                <p :style="{color: domain.active ? 'red' : 'black'}" @click="openUrl(domain.website)"
                   :class="{pointer: domain.website}">{{domain.domain}}</p>
                <p>{{domain.count}}</p>
            </div>
            <span class="link" @click="deleteDomain(domain.domain)">Supprimer</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CookiePurpose",
        props: ['purpose', 'cookies', 'domains'],
        data() {
            return {
                expanded: false
            }
        },
        methods: {
            deleteDomain(domain) {
                Adequa.API.runtime.sendMessage({what: "deleteCookiesByDomain", domain}, () => {
                    this.$emit('cookie-deleted')
                });
            },
            deletePurpose(purposeId) {
                Adequa.API.runtime.sendMessage({what: "deleteCookiesByPurpose", purpose: purposeId}, () => {
                    this.$emit('cookie-deleted')
                });
            },
            toggleExpand(e) {
                console.log(this.domains, this.cookies)
                this.expanded = !this.expanded;
                e.target.innerText = this.expanded ? '-' : '+';
            },
            openUrl(url) {
                if (!url) return;
                Adequa.API.runtime.sendMessage({what: "openTab", url: url});
            }
        }
    }
</script>

<style scoped lang="scss">
    .purpose {
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Josefin Sans", sans-serif;

        > div {
            width: 290px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > p:last-child {
                font-weight: 300;
            }
        }
    }

    .domain {
        margin: 10px 0 10px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Josefin Sans", sans-serif;

        * {
            font-size: 14px !important;
        }

        > div {
            width: 275px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > p:last-child {
                font-weight: 300;
            }
        }
    }

    .link {
        color: var(--red);
        font-weight: 300;
        font-family: "Josefin Sans", sans-serif;
        cursor: pointer;
        margin-left: 10px;
    }

    .expand {
        width: 25px;
        text-align: center;
        font-size: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: gray;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .pointer {
        cursor: pointer;
    }

</style>
