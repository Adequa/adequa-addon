<template>
    <div>
        <div class="summary">
            <span @click="expand">+</span>
            <p>{{purpose.name}}</p>
            <div v-if="purpose.id === 1" class="toggle" style="visibility: hidden">
                <p>OBLIGATOIRE</p>
                <toggle-button :value="true" color="var(--green)" :sync="true" :disabled="true"></toggle-button>
            </div>
            <div v-else class="toggle" :class="{active}">
                <p @click="onClick({value: !active})">{{ text }}</p>
                <toggle-button :value="active" :color="{checked:'var(--green)', unchecked: 'var(--red)'}" @change="onClick" :sync="true"/>
            </div>
        </div>
        <div class="description" :class="{'hidden': descriptionHidden}">
            <p>{{purpose.description}}</p>
        </div>
    </div>
</template>

<script>
    import ButtonGroup from "./ButtonGroup.vue";
    import AdequaButton from "./AdequaButton.vue";

    export default {
        name: "PurposeSetting",
        components: {AdequaButton, ButtonGroup},
        props: {
            "purpose": Object,
            "setting": Object,
            "website-id": String,
            "is-default": Boolean
        },
        data: function () {
            return {
                active: false,
                descriptionHidden: true,
                currentSetting: null,
                defaultValue: true
            }
        },
        computed: {
            text: function () {
                return this.active ? "ACCEPTÉS" : "REFUSÉS";
            }
        },
        methods: {
            onClick: function (e) {
                this.currentSetting.id.website_id = this.isDefault ? "all" : this.websiteId;
                this.active = e.value;

                if (this.active) {
                    this.currentSetting.value = -1;
                } else if (!this.active) {
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
                handler: function (value, old) {
                    if (value) {
                        this.currentSetting = value;
                        this.defaultValue = this.currentSetting.id.website_id === 'all';
                    } else {
                        this.currentSetting = {
                            id: {
                                purpose_id: this.purpose.id,
                                vendor_id: "all",
                                website_id: this.isDefault ? "all" : this.websiteId
                            },
                            value: 0
                        };
                        this.defaultValue = true;
                    }

                    this.active = this.currentSetting.value === -1;
                },
                deep: true
            },
            websiteId: function (value, oldValue) {
                if (this.currentSetting.id.website_id === null && value !== null)
                    this.currentSetting.id.website_id = value;
            }
        },
        mounted: function () {
            if (this.setting) {
                this.currentSetting = this.setting;
                this.defaultValue = false;
            } else if (this.purpose) {
                this.currentSetting = {
                    id: {
                        purpose_id: this.purpose.id,
                        vendor_id: "all",
                        website_id: this.isDefault ? "all" : this.websiteId
                    },
                    value: 0
                };
                this.defaultValue = true;
            }

            this.active = this.currentSetting.value === -1;
        }
    }
</script>

<style scoped lang="scss">
    p {
        font-size: 14px;
        font-family: "Josefin Sans", sans-serif;
    }

    .toggle {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        p {
            cursor: pointer;
            color: var(--red);
            font-weight: 300;
            width: 100px;
            text-align: right!important;
        }
    }

    .active {
        p {
            color: var(--green);
        }
    }

    .summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        > div {
            max-width: 180px;
            flex: 1;
        }

        > div:first-child {
            display: flex;

            span {
                margin-right: 20px;
            }

            p {
                width: 200px;
            }
        }

        p {
            font-family: "Josefin Sans", sans-serif;
            font-size: 14px;
            margin: 0;
            padding-top: 3px;
        }

        > p {
            flex: 1;
            font-size: 18px;
            padding: 3px 0 0 25px;
        }

        span {
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
    }

    .description {
        transform: scaleY(1);
        transform-origin: 50% 0;
        transition: transform 0.5s ease;
        color: #325050;
    }

    .hidden {
        transform: scaleY(0);
        transform-origin: 50% 0;
        transition: none;
        height: 0;
    }
</style>
