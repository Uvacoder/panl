<template>
    <div >
        <slot></slot>
        <button  :style="{backgroundColor: color}" @click="changeBackgroundColor" :title="color">
        </button>
    </div>
</template>

<script>
    import eventBus from '@/utilities/eventbus'
    import Color from "color";
    export default {
        name: "ColorDots",
        props: {
            color: {
                type: String,
                default: '#000000'
            }
        },
        // emits:['changeBackgroundColor'],
        mounted() {
        },
        methods: {
            changeBackgroundColor(e) {
                //console.log(this.color);
                //document.documentElement.style.setProperty('--bgColor', this.color)
                console.log('Background color is dark?', Color(this.color).isDark())
                /*if(Color(this.color).isDark()) {
                    document.documentElement.style.setProperty('--textColor', '#FFFFFF')
                } else {
                    document.documentElement.style.setProperty('--textColor', '#000000')
                }*/
                this.$emit('changeColor', {event: e, data:this.color});
                
                //eventBus().emitter.emit('foo', 'hello')
             
            }
        }
    }
</script>

<style>


</style>>
    

