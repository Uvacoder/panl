<template>
    <div class="d-flex align-items-center">
        <label class="px-2 " :class="{'visually-hidden': labelHidden}" :for="label">{{labelUpperCase}}</label>
        <input @input="onSliderChange" class="slider" type="range" :name="label" :id="label" :data-channel="channel" :data-color-type="colorType" :data-value="value" v-model="value" :min="min" :max="max" >
        <!-- <div class="d-inline-block px-2">{{sliderValue}}</div> -->
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Slider',
        props: {
            label: {
                type: String,
                default: 'Label'
            },
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 255
            },
            min: {
                type: Number,
                default: 0
            },
            labelHidden: {
                type: Boolean,
                default: false
            },
            colorType: {
                type: String
            },
            channel: {
                type: String
            }
        },
        data() {
            return {
            }   
        },
        mounted() {
            //const slider = this.getElementByClassName("slider");
            // console.log('this', this)
            //console.log(slider)
        },
        computed: {
            labelUpperCase() {
                return this.label.toUpperCase();
            },
            sliderValue() {
                
                // return slider.value
            }
        },
        methods: {
            onSliderChange(e) {
                // console.log('change slider', e)
                this.$emit('color-change', {type: e.target.dataset['colorType'], channel: e.target.dataset['channel'], value: e.target.value})
            }
        },
        watch: {
            
        }
    }
</script>

<style scoped>



</style>