<template>
  
    <div class="container-fluid layout">
        <aside>
            <div class="sidenav">
                <div class="logo mb-4">
                    <div class="logo-icon">
                        <img src="./assets/PANL-Logo.svg" >

                    
                        <div class="ms-2 d-flex ">
                            <div class="d-flex flex-row">
                                <div class="letter">P</div>
                                <div class="letter">A</div>
                                <div class="letter">N</div>
                                <div class="letter">L</div>
                            </div>
                            <!-- <div class="logo-text">
                            Primary Accent Neutral Layout
                            </div> -->
                        </div>
                    
                    </div>
                </div>
                 
                <p class="small">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <!-- <h4 class="text-uppercase">Colors</h4> -->
                <!-- <hr> -->
                
                 <div class="sidebar-section justify-content-start align-items-start">
                     <div class="sidebar-section__heading">Color Contrast</div>
                     <div class="sidebar-section__block d-flex flex-column   w-100 align-items-center">
                         <div class="bg-primary p-2">
                            <div style="border:2px solid var(--accentColor); padding: 10px;" class="d-flex align-items-center">
                                <span style="color:var(--accentColor); border-right:1px solid var(--accentColor); padding-right:10px; margin-right:10px;" class="h1">A</span>
                                <span class="small" style="color:var(--accentColor); line-height:0.85rem;font-size:.75rem;">Example text to build on the card</span>
                            </div>
                        </div>
                        <div class="text-muted py-2">Ratio: {{computedContrast}} / Grade: {{computedContrastRating}}</div>
                     </div>
                        
                 </div>
              
                <hr>
                 <div class="sidebar-section">
                     <div class="sidebar-section__heading">Primary</div>
                     <div class="sidebar-section__colors d-flex">
                         <color-dots @changeColor="onChangePrimaryColor" v-for="color in currentPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                 <div class="sidebar-color d-flex">
                     <div class="sidebar-color__heading">{{colors[0].toUpperCase()}}</div>
                     <div class="sidebar-color__block bg-primary"></div>
                 </div>
                 <div class="sidebar-settings-wrapper">
                     <div class="sidebar-settings">
                        <div class="sidebar-settings__heading">Hue {{primaryHSL.h}} &#176; </div>
                        <div class="sidebar-settings__control">
                            <Slider label="RotateMaster" color-type="master" channel="h" :label-hidden="true" :min=0 :max=360 :value=parseInt(primaryHSL.h) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading">Saturation {{primaryHSL.s}}</div>
                        <div class="sidebar-settings__control">
                            <Slider label="SaturationMaster" color-type="master" channel="s"  :label-hidden="true" :min=0 :max=100 :value=parseInt(primaryHSL.s) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading">Lightness {{primaryHSL.l}}</div>
                        <div class="sidebar-settings__control">
                            <Slider label="LightenMaster" color-type="master" channel="l"  :label-hidden="true" :max=100 :value=parseInt(primaryHSL.l) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                        
                    </div>
                 </div>
                 <hr>
                 <h5>Accent</h5>
                    <div class="sidebar-color d-flex">
                        <div class="sidebar-color__heading">{{colors[1].toUpperCase()}}</div>
                        <div class="sidebar-color__block bg-accent"></div>
                    </div>
                    <div class="sidebar-settings-wrapper">
                        <div class="sidebar-settings">
                            <div class="sidebar-settings__heading">Hue {{accentHSL.h}} &#176; </div>
                            <div class="sidebar-settings__control">
                                <Slider label="RotateMaster" color-type="accent" channel="h" :label-hidden="true" :min=0 :max=360 :value=parseInt(accentHSL.h) @colorChange="onSliderChange($event)"></Slider>
                            </div>
                        </div>
                        <div class="sidebar-settings">
                            <div class="sidebar-settings__heading">Saturation {{accentHSL.s}}</div>
                            <div class="sidebar-settings__control">
                                <Slider label="SaturationMaster" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=100 :value=parseInt(accentHSL.s) @colorChange="onSliderChange($event)"></Slider>
                            </div>
                        
                        </div>
                        <div class="sidebar-settings">
                            <div class="sidebar-settings__heading">Lightness {{accentHSL.l}}</div>
                            <div class="sidebar-settings__control">
                                <Slider label="LightenMaster" color-type="accent" channel="l"  :label-hidden="true" :max=100 :value=parseInt(accentHSL.l) @colorChange="onSliderChange($event)"></Slider>
                            </div>
                            
                        </div>
                    </div>

                
            </div>
        </aside>
        <main>
            <!-- Info -->
            <div class="row py-4">
                <!-- Color -->
                <div id="info-color" class="col">
                    <h3>Color {{computedContrast}} {{computedContrastRating}}</h3>
                    <!-- Color Info Component -->
                    <div class="d-flex">
                        <h4>{{colors[0].toUpperCase()}}</h4>
        
                        
                    </div>
            
                </div>
                <!-- Background -->
                <div class="col">
                    <h3>Background Colors</h3>
                    <div class="d-flex">
                        <color-dots @changeColor="onChangePrimaryColor" class="px-2" v-for="color in currentPalette" :key="color" :color="`#${color}` ">{{color.toUpperCase()}}</color-dots>
                        <color-dots @changeColor="onChangePrimaryColor"   class="px-2" v-for="color in ['fefefe', '000000']" :key="color" :color="`#${color}` ">{{color.toUpperCase()}}</color-dots>
                    </div>
                </div>
                <!-- Text Color -->
                <div class="col">
                    <h3>Text Colors</h3>
                    <div class="d-flex">
                        <color-dots @changeColor="onChangeAccentColor" class="px-2" v-for="color in currentPalette" :key="color" :color="`#${color}` ">{{color.toUpperCase()}}</color-dots>
                        <color-dots @changeColor="onChangeAccentColor"   class="px-2" v-for="color in ['fefefe', '000000']" :key="color" :color="`#${color}` ">{{color.toUpperCase()}}</color-dots>
                    </div>
                </div>
            
                <div class="d-flex justify-content-around">
                    <!--<div>
                        <h3>Darken</h3>
                        <ul>
                            <li :style="{backgroundColor: computedDarkenValue}">{{computedDarkenValue}}</li>
                        </ul>
                        <Slider label="Darken" :max=100 :value=parseInt(darkenValue) @rgbchange="onDarkenChange($event)"></Slider>
                        <p>
                            
                        </p>
                    </div>-->
                    <!-- BG -->
                    <div class="wrapper d-flex" style="flex: 1 1 100%">
                        <div class="hslControllers mx-4 w-50">
                            <div class="pb-2">
                                
                                <h6>Hue {{primaryHSL.h}} &#176; </h6>
                                
                                <Slider label="RotateMaster" color-type="master" channel="h" :label-hidden="true" :min=0 :max=360 :value=parseInt(primaryHSL.h) @colorChange="onSliderChange($event)"></Slider>

                            
                            </div>
                            <div class="pb-2">
                                <h6>Saturation {{primaryHSL.s}}</h6>
                                
                                <Slider label="SaturationMaster" color-type="master" channel="s"  :label-hidden="true" :min=0 :max=100 :value=parseInt(primaryHSL.s) @colorChange="onSliderChange($event)"></Slider>
                            
                            </div>
                            <div class="pb-2">
                                <h6>Lightness {{primaryHSL.l}}</h6>
                            
                                <Slider label="LightenMaster" color-type="master" channel="l"  :label-hidden="true" :max=100 :value=parseInt(primaryHSL.l) @colorChange="onSliderChange($event)"></Slider>
                                
                            </div>
                        </div>
                        <div class="w-50">
                            <h4>BG {{colors[0]}}</h4>
                            <ul class="d-flex">
                                <li style="border:1px solid #efefef; cursor:pointer" :style="{backgroundColor: computedPrimaryMix}" @click="copyToClipboard(computedPrimaryMix)">{{computedPrimaryMix}}</li>
                            </ul>
                            <p>
                                
                            </p>
                        </div>
                    </div>

                    <!-- ACCENT -->
                    <div class="wrapper d-flex" style="flex: 1 1 100%">
                        <div class="hslControllers mx-4 w-50">
                            <div class="pb-2">
                                
                                <h6>Hue {{accentHSL.h}} &#176; </h6>
                                
                                <Slider label="Rotate" color-type="accent" channel="h" :label-hidden="true" :min=0 :max=360 :value=parseInt(accentHSL.h) @colorChange="onSliderChange($event)"></Slider>

                            
                            </div>
                            <div class="pb-2">
                                <h6>Saturation {{accentHSL.s}}</h6>
                                
                                <Slider label="Saturation" color-type="accent" channel="s" :label-hidden="true" :min=0 :max=100 :value=parseInt(accentHSL.s) @colorChange="onSliderChange($event)"></Slider>
                            
                            </div>
                            <div class="pb-2">
                                <h6>Lightness {{accentHSL.l}}</h6>
                            
                                <Slider label="Lighten" color-type="accent" channel="l" :label-hidden="true" :max=100 :value=parseInt(accentHSL.l) @colorChange="onSliderChange($event)"></Slider>
                                
                            </div>
                        </div>
                        <div class="w-50">
                            <h4>ACCENT {{colors[1]}}</h4>
                            <ul class="d-flex">
                                <li style="border:1px solid #efefef" :style="{backgroundColor: computedAccentMix}">{{computedAccentMix}}</li>
                            </ul>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    
                </div>
                


            </div>
            <!-- Display Current Palette -->
            <div class="row">
                <div class="col">
                    <h3>Current Palette // </h3>
                    <div class="d-flex">
                        <ul class="list-unstyled d-flex">
                            <li v-for="(color, index) in currentPalette" :key="index" :style="{backgroundColor:'#'+color+''}" class="small">{{currentPaletteNames[index]}} <br/>{{color.toUpperCase()}}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button @click="reverseColors" class="btn btn-round"><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M20.9241 5.61722C20.8753 5.49927 20.803 5.38877 20.7071 5.29289L17.7071 2.29289C17.3166 1.90237 16.6834 1.90237 16.2929 2.29289C15.9024 2.68342 15.9024 3.31658 16.2929 3.70711L17.5858 5L8 5C5.23858 5 3 7.23858 3 10V12C3 12.5523 3.44772 13 4 13C4.55228 13 5 12.5523 5 12L5 10C5 8.34315 6.34315 7 8 7L17.5858 7L16.2929 8.29289C15.9024 8.68342 15.9024 9.31658 16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711L20.7063 6.70787C20.7088 6.70544 20.7112 6.703 20.7136 6.70055C20.9045 6.50613 21 6.25307 21 6" fill="#0D0D0D"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M20.9241 5.61722C20.9727 5.73425 20.9996 5.8625 21 5.997Z" fill="#0D0D0D"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M3.07588 17.6172C3.02699 17.7351 3 17.8644 3 18C3 18.2761 3.11193 18.5261 3.29289 18.7071L6.29289 21.7071C6.68342 22.0976 7.31658 22.0976 7.70711 21.7071C8.09763 21.3166 8.09763 20.6834 7.70711 20.2929L6.41421 19L16 19C18.7614 19 21 16.7614 21 14V12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12V14C19 15.6569 17.6569 17 16 17L6.41421 17L7.70711 15.7071C8.09763 15.3166 8.09763 14.6834 7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929L3.29316 17.2926" fill="#0D0D0D"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M3.07588 17.6172C3.12432 17.5001 3.19595 17.3904 3.29078 17.295Z" fill="#0D0D0D"></path>
</svg></button>
                </div>
                <div>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path xmlns="http://www.w3.org/2000/svg" d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z" fill="var(--accentColor)"></path>
    </svg>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card py-4 px-3 bg-accent text-primary" style="width: 18rem;">
                        <div class="card-body">
                            <h2 class="card-title mb-5">The Bulk Of It</h2>
                            <p class="card-text text-primary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <a href="#" class="btn btn-round mt-2 me-2 d-inline-block bg-primary text-accent" >Card link</a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// dark mode: midnight: #262E40, midmight-alt: #313B50
// light mode: gallery: #F0EFF1, aspen gray: #ECF1F4
// colors: accents(primary, secondary, tertiary), contrast(type), base(background)
/*
Romantic FFCDB2
Wax Flower FFB4A2
Tonys Pink E5989B
Brandy Rose B5838D
Salt Box 6D6875
*/
// Vue3 don't have $on anymore, need to use 3rd party suggested by Vue docs
// $ npm install --save mitt
//https://github.com/developit/mitt
// https://github.com/developit/mitt
// animate js for easing slider values
// npm install animejs --save
// import anime from 'animejs/lib/anime.es.js';
// https://www.npmjs.com/package/clipboard-copy;
// https://www.npmjs.com/package/color-contrast
// 
import copy from 'clipboard-copy'
import colorContrast from 'color-contrast'
import anime from 'animejs/lib/anime.es.js';
import eventBus from '@/utilities/eventbus'
import Color from 'color'
import ColorDots from '@/components/ColorDots.vue'
import Slider from '@/components/Slider.vue'
import {RoundValues} from '@/utilities/utils'
export default {
    components: {
        ColorDots,
        Slider
    },
    data() {
        return {
            colors: ['#EAE2B7', '#003049'],// primary, accent
            primaryHSL: {
                h: 0,
                s: 0,
                l: 0

            },
            accentHSL: {
                h: 0,
                s: 0,
                l: 0

            },
            darkenValue: 10,
            lightenValue: 50,
            rotateValue: 0,
            saturationValue: 10,
            colorPalettes: [],
            currentPalette: ['FFCDB2', 'FFB4A2', 'E5989B', 'B5838D', '6D6875'],
            currentPaletteNames: ['Romantic', 'Wax Flower', 'Tonys Pink', 'Brandy Rose', 'Salt Box'],
            currentPaletteId: 0,
            contrast: null



        }
    },
    
    mounted() {
        const primaryColor = Color(this.colors[0])
        const accentColor = Color(this.colors[1])
        this.primaryHSL = RoundValues(primaryColor.hsl().object())
        this.accentHSL = RoundValues(accentColor.hsl().object())


        // this.accentHSL = RoundValues(Color(accentColor).hsl().object())

        document.documentElement.style.setProperty('--primaryColor', primaryColor)
        document.documentElement.style.setProperty('--accentColor', accentColor)
        // this.masterRGB = color.object()
        const loadColorPalette = async () => {
            try{
                // const response = await fetch('https://www.colourlovers.com/api/palettes/top?format=json&numResults=10');
                const params = {
                    access_token: import.meta.env.VITE_CONTENTFUL_API,
                    content_type: 'themes',
                    limit: 3,
                    order: '-fields.likes'
                }
                const esc = encodeURIComponent;
                const query = Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
                const response = await fetch('https://cdn.contentful.com/spaces/rysom3n9r3je/entries?' + query);
                if(response.status === 200) {
                    const data = await response.json();
                    // console.log(data)
                    console.log(data.items)
                    data.items.forEach(item => {
                        this.colorPalettes.push(item.fields)
                    })
                    console.log('colorPalettes',this.colorPalettes)
                    // Set the currentPalette to the first entry of colors array
                    // const i = this.colorPalettes.length
                    this.displayColors(this.colorPalettes[0].colors)
                    // Set the color names for each of the current color palette entry
                    this.setColorNames(this.colorPalettes[0].colors)
                } else {
                    console.log('Error: ' + response.status)
                }
                
            } catch(err) {
                console.log('error', err)
            }
            
        }
        loadColorPalette();
        console.log('===================================================')
       
        /*eventBus().emitter.on('foo', (data) => {
            console.log('===================================================')
            console.log('foo', data)
        })*/
        
 
   

    },
    computed: {
        computedPrimaryMix() {
            return Color(this.primaryHSL).hex()
        },
        computedAccentMix() {
            return Color(this.accentHSL).hex()
        },
        computedContrast() {
            return colorContrast(this.colors[0], this.colors[1]).toFixed(1)
        },
        computedContrastRating() {
            let rating;
            if(this.computedContrast >= 4.5 && this.computedContrast < 7) {
                rating = 'AA'
            } else if (this.computedContrast >= 7) {
                rating = 'AAA'
            } else {
                rating = 'Fail'
            }
            

            return rating
        }

    },
    methods: {
        updatePrimaryColor() {
            let newColor =  Color(this.primaryHSL).hex()
            this.colors[0] = newColor
            document.documentElement.style.setProperty('--primaryColor', newColor)
        },
        updateAccentColor() {
            let newColor =  Color(this.accentHSL).hex()
            this.colors[1]= newColor
            document.documentElement.style.setProperty('--accentColor', newColor)
        },
        displayColors(arr) {
            this.currentPalette = arr;
            
        },
        setColorNames(arr) {
            arr.forEach((arr,index) => {
                try {
                    fetch('https://www.thecolorapi.com/id?format=json&hex='+arr)
                    .then(response => response.json())
                    .then(data => this.currentPaletteNames[index] = data.name.value )
                } catch(err) {
                    console.log(err)
                }
            })
        },
        onChangePrimaryColor(data) {
            console.log('onChangeBackgroundColor', data)  
            document.documentElement.style.setProperty('--primaryColor', data.data)
            this.colors[0]= data.data

            const currentHSL = RoundValues(this.primaryHSL)

            // this.masterHSL = hslObject

            //Prevent from snapping
            const newHSL = RoundValues(Color(this.colors[0]).hsl().object())
           

            this.animateSlider(currentHSL, newHSL, 'master')

        },
        onChangeAccentColor(data) {
            console.log('onChangeTextColor', data)
            document.documentElement.style.setProperty('--accentColor', data.data)
            this.colors[1] = data.data
            // HSL
            
            const currentHSL = RoundValues(this.accentHSL) // old values
            //this.accentHSL = RoundValues(Color(this.accentColor).hsl().object()) // new values


            const newHSL = RoundValues(Color(this.colors[1]).hsl().object())

            // anime({
            //     targets: currrentHSL,
            //     h: newColorHSLValues.h,
            //     s: newColorHSLValues.s,
            //     l: newColorHSLValues.l,
            //     round: 1,
            //     easing: 'easeInOutQuad',
            //     duration: 500,
            //     update: function() {
            //         that.accentHSL.h = currrentHSL.h
            //         that.accentHSL.s = currrentHSL.s
            //         that.accentHSL.l = currrentHSL.l
            //     }
            // })


            this.animateSlider(currentHSL, newHSL, 'accent')

        },
       
        onSliderChange(data) {
            console.log('on master change: ', data)
            const type = data.type
            const channel = data.channel
            const value = data.value
            // console.log('type', type)
            if(type === 'master') {
                 switch (channel) {
                case 'h':
                    this.primaryHSL.h = value
                    break;
                case 's':
                    this.primaryHSL.s = value
                    break;
                case 'l':
                    this.primaryHSL.l = value
                    break;
                }
                this.updatePrimaryColor()
            }

            if(type === 'accent') {
                 switch (channel) {
                case 'h':
                    this.accentHSL.h = value
                    break;
                case 's':
                    this.accentHSL.s = value
                    break;
                case 'l':
                    this.accentHSL.l = value
                    break;
                }
                this.updateAccentColor()
            }
           
        },
        animateSlider(currentHSL={}, newColorHSL={}, colorHSLObj='master') {

            // anime usage
            // target - starting point object {h:10, s:20, l:40} this will be the updating values by anime
            // endpoints obj
            // h: 100
            // s: 100
            // l: 100
            // easing: easeInOutQuad
            // duration: 500
            /* update function() {
                that.accentHSL.h = currrentHSL.h
                that.accentHSL.s = currrentHSL.s
                that.masterHSL.l = currrentHSL.l

            }*/
            let HSL = {}
            if(colorHSLObj === 'master') {
                HSL = this.primaryHSL
            }

            if(colorHSLObj === 'accent') {
                HSL = this.accentHSL
            }

            anime({
                targets: currentHSL,
                h: newColorHSL.h,
                s: newColorHSL.s,
                l: newColorHSL.l,
                round: 1,
                easing: 'easeInOutQuad',
                duration: 500,
                update: function() {
                    HSL.h = currentHSL.h
                    HSL.s = currentHSL.s
                    HSL.l = currentHSL.l
                }
            }) 





        },
        reverseColors() {
            this.colors = this.colors.reverse();
            this.onChangePrimaryColor({data:this.colors[0]})
            this.onChangeAccentColor({data:this.colors[1]})
        },
        copyToClipboard(string) {
           copy(string);
        }
        


    }
}




// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style scoped>
.sidenav {
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: black;
    color: white;
    /* min-width: 320px; */
    width: 100%;
    /* z-index: 1; */
    padding: 1rem;
}

.layout {
    grid-template-columns: 1fr 5fr;
    display:grid;
    gap:1rem;
    grid-template-areas: "sidebar main";
    padding-left: 0;
}

aside {
    grid-area: "sidebar";
    position: sticky;
}

.logo-icon {
    display: flex;
    /* align-items: center; */
}

.logo-icon .letter {
    /* padding-left: 10px; */
    /* padding-right: 10px; */
    /* padding-top: 5px; */
    /* padding-bottom: 5px; */
    /* border-left:  1px solid #ffffff; */
    font-size: 1.5rem;
    line-height: 1.5rem;
    width: 40px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #fff;
    margin-right: 4px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight:600;

}

.logo-icon .letter:first-child {
    /* border: 0; */
}

.logo-text {
    line-height: 0.75rem;
    font-size: 0.75rem;
    /* letter-spacing: 5px; */
    /* text-transform:uppercase */
}

h6 {
    letter-spacing: 1px;
}

.text-muted {
    color: #c4c8cb !important;
}
.sidebar-section {
    display: flex;
    justify-content: center;
    align-items: center;
}
.sidebar-section__heading, .sidebar-color__heading {
    font-size: 1rem;
    flex: 0 0 35%;
    /* margin-right: 10px */
}

.sidebar-section__heading {
    font-size: 1.25rem;
}

.sidebar-section__block {

}

.sidebar-section__colors, .sidebar-color__block {
    /* background-color: var(--primaryColor); */
    /* display: inline-block; */
    flex: 1 0 auto;
}

.sidebar-settings {
    display: flex;
    padding: 8px 0;
    justify-content: center;
    align-items: center;
}

.sidebar-settings__heading {
    flex: 0 0 35%;
    font-size: 0.85rem;
}

.sidebar-settings__control {
    flex: 1 0 auto;
}

.bg-primary {
    background-color: var(--primaryColor) !important;
}

.bg-accent {
    background-color: var(--accentColor) !important;
}

.text-primary {
    color: var(--primaryColor) !important;
}

.text-accent {
    color: var(--accentColor) !important;
}

p.card-text {
    letter-spacing: 5px;
}

input[type="range"] {
    cursor: pointer;
}

li {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 1;
    flex-basis: 1px;
    transition: all .1s ease-in-out;
}

li:hover {
    flex-basis: 80px;
}

.btn-round {
    border-radius: 20px;
    padding: 5px 20px;
    letter-spacing: 0.5;
    font-weight: 500;
    background-color: var(--accentColor);
    color:var(--primaryColor);
}

.btn-round:hover {
    color: var(--primaryColor);
}

.btn-round:focus, .btn-round:active {
    /* border-color: lighten(var(--accentColor), 10%); */
    /* box-shadow: lighten(var(--accentColor), 10%); */
    /* box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%); */
    box-shadow: none;
}
</style>
