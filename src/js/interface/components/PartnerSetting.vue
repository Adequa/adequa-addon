<template>
    <div>
        <div class="summary">
            <span @click="expand"></span>
            <p>{{vendor.name}}</p>
            <button-group :current="allowedActive ? 1 : 2" :change-color="true" :small="true">
                <adequa-button @button-clicked="buttonClicked" :text="allowedText" :default="!isDefault && defaultValue" :button-id="1"
                               :active="allowedActive"></adequa-button>
                <adequa-button @button-clicked="buttonClicked" :text="forbiddenText" :default="!isDefault && defaultValue" :button-id="2"
                               :active="forbiddenActive"></adequa-button>
            </button-group>
        </div>
        <div class="description" :class="{'hidden': descriptionHidden}">
            <p>{{vendor.description}}</p>
        </div>
    </div>
</template>

<script>
    import ButtonGroup from "./ButtonGroup.vue";
    import AdequaButton from "./AdequaButton.vue";

    export default {
        name: "PartnerSetting",
        components: {AdequaButton, ButtonGroup},
        props: {
            "vendor": Object,
            "setting": Object,
            "website-id": String,
            "is-default": Boolean
        },
        data: function () {
            return {
                allowedActive: false,
                forbiddenActive: true,
                descriptionHidden: true,
                currentSetting: null,
                defaultValue: true
            }
        },
        computed: {
            allowedText: function () {
                return this.allowedActive ? "ACCEPTÉS" : "ACCEPTER";
            },
            forbiddenText: function () {
                return this.forbiddenActive ? "REFUSÉS" : "REFUSER";
            }
        },
        methods: {
            buttonClicked: function (e) {
                this.currentSetting.id.website_id = this.isDefault ? "all" : this.websiteId;

                if (e.button === 1 && !this.allowedActive) {
                    this.allowedActive = true;
                    this.forbiddenActive = false;
                    this.currentSetting.value = -1;
                } else if (e.button === 2 && !this.forbiddenActive) {
                    this.allowedActive = false;
                    this.forbiddenActive = true;
                    this.currentSetting.value = 1;
                }
                this.$emit("settingChanged", this.currentSetting);
                Adequa.API.runtime.sendMessage({what: "setSetting", setting: this.currentSetting});
            },
            expand: function (e) {
                if (this.descriptionHidden) {
                    e.target.innerText = '-';
                    this.descriptionHidden = false;
                } else {
                    e.target.innerText = '+';
                    this.descriptionHidden = true;
                }
            }
        },
        watch: {
            setting: {
                handler: function(value, old) {
                    if (value) {
                        this.currentSetting = value;
                        this.defaultValue = this.currentSetting.id.website_id === 'all';
                    }
                    else {
                        this.currentSetting = {
                            id: {
                                purpose_id: "all",
                                vendor_id: this.vendor.id,
                                website_id: this.isDefault ? "all" : this.websiteId
                            },
                            value: 0
                        };
                        this.defaultValue = true;
                    }

                    if (this.currentSetting.value === -1) {
                        this.allowedActive = true;
                        this.forbiddenActive = false;
                    } else {
                        this.allowedActive = false;
                        this.forbiddenActive = true;
                    }
                },
                deep: true
            },
            websiteId: function (value, oldValue) {
                if(this.currentSetting.id.website_id === null && value !== null)
                    this.currentSetting.id.website_id = value;
            }
        },
        mounted: function () {
            if (this.setting) {
                this.currentSetting = this.setting;
                this.defaultValue = false;
            }
            else if (this.vendor) {
                this.currentSetting = {
                    id: {
                        purpose_id: "all",
                        vendor_id: this.vendor.id,
                        website_id: this.isDefault ? "all" : this.websiteId
                    },
                    value: 0
                };
                this.defaultValue = true;
            }

            if (this.currentSetting.value === -1) {
                this.allowedActive = true;
                this.forbiddenActive = false;
            } else {
                this.allowedActive = false;
                this.forbiddenActive = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    p {
        font-size: 14px;
        font-family: "Josefin Sans", sans-serif;
    }

    .summary {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 10px;

        p {
            font-family: "Josefin Sans", sans-serif;
            text-align: center;
            font-size: 14px;
        }

        span {
            text-align: center;
            font-size: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: gray;
        }

        > *:first-child {
            width: 50px;
        }

        > *:nth-child(2) {
            width: 200px;
        }

        > *:nth-child(3) {
            width: 250px;
        }
    }

    .description {
        transform: scaleY(1);
        transform-origin: 50% 0;
        transition: transform 0.5s ease;
    }

    .hidden {
        transform: scaleY(0);
        transform-origin: 50% 0;
        transition: none;
        height: 0;
    }
</style>
