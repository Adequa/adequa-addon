<template>
    <div>
        <partner-setting v-for="vendor of vendors" :key="vendor.id" :vendor="vendor" :setting="getSetting[vendor.id]" :is-default="!websiteSettings" :website-id="websiteId" @settingChanged="updateSetting"></partner-setting>
    </div>
</template>

<script>
    import PartnerSetting from "./PartnerSetting.vue";
    export default {
        name: "VendorSettings",
        components: {PartnerSetting},
        data: function(){
            return {
                websiteId: null,
                defaultSettings: null,
                settings: null,
                vendors: null
            }
        },
        props: ['website-settings'],
        methods: {
            updateSetting(setting){
                if(this.websiteSettings) {
                    this.settings[setting.id.vendor_id] = setting;
                }
                else {
                    this.defaultSettings[setting.id.vendor_id] = setting;
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
            Adequa.API.runtime.sendMessage({what: "getVendorList"}, (vendors) => {
                this.vendors = vendors;
            });
            Adequa.API.runtime.sendMessage({what: "getDefaultVendorSettings"}, (settings) => {
                console.log(settings)
                this.defaultSettings = settings;
            });
            Adequa.API.runtime.sendMessage({what: "getWebsiteVendorSettings"}, (settings) => {
                this.settings = settings;
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
