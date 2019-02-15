<template>
    <div id="desires">
        <header>
            <h2>MES ENVIES</h2>
        </header>
        <hr>
        <main>
            <h3>Envies validées</h3>
            <div class="desire-group">
                <desire-setting v-for="desire of validatedDesires" :desire="desire" :key="desire.name"
                                @desire-change="desireChange"></desire-setting>
            </div>
            <h3>Envies détectées</h3>
            <div class="desire-group">
                <desire-setting v-for="desire of detectedDesires" :desire="desire" :key="desire.name"
                                @desire-change="desireChange"></desire-setting>
            </div>
        </main>
    </div>
</template>

<script>
    import DesireSetting from './DesireSetting.vue'

    export default {
        name: "Desires",
        components: {DesireSetting},
        data() {
            return {
                desires: []
            }
        },
        computed: {
            validatedDesires() {
                return this.desires.filter(desire => desire.validated)
            },
            detectedDesires() {
                return this.desires.filter(desire => !desire.removed && !desire.validated)
            }
        },
        methods: {
            desireChange(desire) {
                Adequa.API.runtime.sendMessage({what: "setDesire", desire}, () => {
                    Adequa.API.runtime.sendMessage({what: "getDesires"}, (desires) => this.desires = desires)
                })
            }
        },
        created() {
            Adequa.API.runtime.sendMessage({what: "getDesires"}, (desires) => this.desires = desires);
        }
    }
</script>

<style scoped>
    #desires {
        flex: 1;
    }

    .desire-group {
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
</style>
