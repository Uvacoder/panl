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
            console.log('this', this)
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
                console.log('change slider', e)
                this.$emit('color-change', {type: e.target.dataset['colorType'], channel: e.target.dataset['channel'], value: e.target.value})
            }
        },
        watch: {
            
        }
    }
</script>

<style scoped>
input[type="range"] {
    cursor: pointer;
}

.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 15px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 1; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  height: 2px;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 0.7; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 6px; /* Set a specific slider handle width */
  height: 6px; /* Slider handle height */
  background: #fff; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 6px; /* Set a specific slider handle width */
  height: 6px; /* Slider handle height */
  /* background: #04AA6D; Green background */
  background-color: #fff;
  cursor: pointer; /* Cursor on hover */

}


</style>