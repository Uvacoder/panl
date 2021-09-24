<template>
    <div class="small">
        <slot></slot>
        <button class="round" :style="{backgroundColor: color}" @click="changeBackgroundColor">
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

<style scoped>
.small {
    font-size: 0.75rem;
    letter-spacing: 0.5;
}
.round {
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 25px;
    border: 1px solid #efefef;
}

</style>>
    

