<template>
    <div>
        <purpose-setting v-for="purpose of purposes" :key="purpose.id" :purpose="purpose" :setting="getSetting[purpose.id]" :is-default="true" :website-id="websiteId" @settingChanged="updateSetting"></purpose-setting>
    </div>
</template>

<script>
    import PurposeSetting from "./PurposeSetting.vue";
    export default {
        name: "Settings",
        components: {PurposeSetting},
        data: function(){
            return {
                websiteId: null,
                defaultSettings: null,
                settings: null,
                purposes: null
            }
        },
        props: ['website-settings'],
        methods: {
            updateSetting(setting){
                if(this.websiteSettings) {
                    this.settings[setting.id.purpose_id] = setting;
                }
                else {
                    this.defaultSettings[setting.id.purpose_id] = setting;
                }
            }
        },
        computed: {
            getSetting(){
                if(this.websiteSettings) {
                    if (this.settings) return this.settings;
                }
                else {
                    if (this.defaultSettings) return this.defaultSettings;
                }

                return {};
            }
        },
        mounted: function(){
            Adequa.API.runtime.sendMessage({what: "getWebsiteId"}, (id) => {
                this.websiteId = id;
            });
            Adequa.API.runtime.sendMessage({what: "getPurposeList"}, (purposes) => {
                console.log(purposes)
                this.purposes = purposes;
            });
            Adequa.API.runtime.sendMessage({what: "getDefaultPurposeSettings"}, (settings) => {
                this.defaultSettings = settings;
            });
            Adequa.API.runtime.sendMessage({what: "getWebsitePurposeSettings"}, (settings) => {
                this.settings = settings;
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
