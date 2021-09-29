<template>
  
    <div class="container-fluid layout">
        <!-- Panel 1 -->
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
                     <div class="sidebar-section__heading">
                         Color Contrast Checker
                        <div class="py-2 d-flex justify-content-lg-between"><span><span class="small text-muted text-uppercase">Ratio</span> {{computedContrast}}</span><span class="text-uppercase"><span class="small text-muted text-uppercase">Grade</span> {{computedContrastRating}}</span></div>
                     </div>
                     <div class="sidebar-section__block d-flex flex-column   w-100">
                         <div class="bg-primary p-2">
                            <div style="border:2px solid var(--accentColor); padding: 10px;" class="d-flex align-items-center">
                                <span style="color:var(--accentColor);  margin-right:10px;" class="h1">A</span>
                                <span class="small" style="color:var(--accentColor); line-height:0.85rem;font-size:.75rem;border-left:1px solid var(--accentColor); padding-left:10px;">abcd ef ghji lmno pqrs tuv wxzy 123 4567 890 !@#$% &?</span>
                            </div>
                        </div>
                        
                    
                        <button @click="reverseColors" class="mt-3 sidebar-section__button--white btn text-center">Reverse Colors
                            <div style="display:inline-block;">
                            <svg class="reverse" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M20.9241 5.61722C20.8753 5.49927 20.803 5.38877 20.7071 5.29289L17.7071 2.29289C17.3166 1.90237 16.6834 1.90237 16.2929 2.29289C15.9024 2.68342 15.9024 3.31658 16.2929 3.70711L17.5858 5L8 5C5.23858 5 3 7.23858 3 10V12C3 12.5523 3.44772 13 4 13C4.55228 13 5 12.5523 5 12L5 10C5 8.34315 6.34315 7 8 7L17.5858 7L16.2929 8.29289C15.9024 8.68342 15.9024 9.31658 16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711L20.7063 6.70787C20.7088 6.70544 20.7112 6.703 20.7136 6.70055C20.9045 6.50613 21 6.25307 21 6" ></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="M20.9241 5.61722C20.9727 5.73425 20.9996 5.8625 21 5.997Z" ></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="M3.07588 17.6172C3.02699 17.7351 3 17.8644 3 18C3 18.2761 3.11193 18.5261 3.29289 18.7071L6.29289 21.7071C6.68342 22.0976 7.31658 22.0976 7.70711 21.7071C8.09763 21.3166 8.09763 20.6834 7.70711 20.2929L6.41421 19L16 19C18.7614 19 21 16.7614 21 14V12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12V14C19 15.6569 17.6569 17 16 17L6.41421 17L7.70711 15.7071C8.09763 15.3166 8.09763 14.6834 7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929L3.29316 17.2926" ></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="M3.07588 17.6172C3.12432 17.5001 3.19595 17.3904 3.29078 17.295Z" ></path>
                            </svg></div>
                        </button>
                     </div>
                        
                 </div>
              
                <hr>
                 <div class="sidebar-section">
                     <div class="sidebar-section__heading">Primary</div>
                     <div class="sidebar-section__colors primary-color-dots d-flex">
                         <color-dots @changeColor="onChangePrimaryColor($event)" v-for="color in currentPalette" :key="color" :color="`#${color}` "></color-dots>
                         <color-dots @changeColor="onChangePrimaryColor($event)" v-for="color in neutralPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                 <div class="sidebar-color d-flex mt-3">
                     <div class="sidebar-color__heading text-white-50">{{colors[0].toUpperCase()}}</div>
                     <div class="sidebar-color__block bg-primary"></div>
                 </div>
                 <div class="sidebar-settings-wrapper mt-3">
                     <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50">Hue {{primaryHSL.h}} &#176; </div>
                        <div class="sidebar-settings__control">
                            <Slider label="RotateMaster" color-type="master" channel="h" :label-hidden="true" :min=0 :max=360 :value=parseInt(primaryHSL.h) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50">Saturation {{primaryHSL.s}}</div>
                        <div class="sidebar-settings__control">
                            <Slider label="SaturationMaster" color-type="master" channel="s"  :label-hidden="true" :min=0 :max=100 :value=parseInt(primaryHSL.s) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50">Lightness {{primaryHSL.l}}</div>
                        <div class="sidebar-settings__control">
                            <Slider label="LightenMaster" color-type="master" channel="l"  :label-hidden="true" :max=100 :value=parseInt(primaryHSL.l) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                        
                    </div>
                 </div>
                 <hr>
                 <div class="sidebar-section">
                     <div class="sidebar-section__heading">Accent</div>
                     <div class="sidebar-section__colors accent-color-dots d-flex">
                         <color-dots @changeColor="onChangeAccentColor" v-for="color in currentPalette" :key="color" :color="`#${color}` "></color-dots>
                         <color-dots @changeColor="onChangeAccentColor" v-for="color in neutralPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                <div class="sidebar-color d-flex mt-3">
                    <div class="sidebar-color__heading text-white-50">{{colors[1].toUpperCase()}}</div>
                    <div class="sidebar-color__block bg-accent"></div>
                </div>
                <div class="sidebar-settings-wrapper mt-3">
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50">Hue {{accentHSL.h}} &#176; </div>
                        <div class="sidebar-settings__control">
                            <Slider label="RotateAccent" color-type="accent" channel="h" :label-hidden="true" :min=0 :max=360 :value=parseInt(accentHSL.h) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50">Saturation {{accentHSL.s}}</div>
                        <div class="sidebar-settings__control">
                            <Slider label="SaturationAccent" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=100 :value=parseInt(accentHSL.s) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50">Lightness {{accentHSL.l}}</div>
                        <div class="sidebar-settings__control">
                            <Slider label="LightenAccent" color-type="accent" channel="l"  :label-hidden="true" :max=100 :value=parseInt(accentHSL.l) @colorChange="onSliderChange($event)"></Slider>
                        </div>
                        
                    </div>
                </div>
                <hr>
                <div class="sidebar-section">
                     <div class="sidebar-section__heading">Nuetral</div>
                     <div class="sidebar-section__colors neutral-color-dots button d-flex">
                         <color-dots @changeColor="onChangeNeutralColor" v-for="color in neutralPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                
                <hr>
                <div class="sidebar-section">
                     <div class="sidebar-section__heading">Layout</div>
                     <div class="sidebar-section__block">
                         <div class="d-flex justify-content-between">
                           
                             
                         </div>
                         
                        
                     </div>
                 </div>
                
                <div class="sidebar-settings-wrapper mt-3">
                    <!--<div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Round Buttons</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <div class="form-check form-switch">
                                <input @change="onSwitchButtonRoundChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>-->
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Padding {{padding}}rem</div>
                        <div class="sidebar-settings__control">
                            <!-- <Slider label="SaturationMaster" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=5 @colorChange="onSliderChange($event)"></Slider> -->
                            <label class="visually-hidden" for="Padding">Change Padding</label>
                            <input @input="onSliderPaddingChange" class="slider" type="range" name="Padding" id="Padding" v-model="padding" min="0" max="5" >

                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Border Radius {{borderRadius}}px</div>
                        <div class="sidebar-settings__control">
                            <!-- <Slider label="SaturationMaster" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=5 @colorChange="onSliderChange($event)"></Slider> -->
                            <label class="visually-hidden" for="borderRadius">Change Border Radius</label>
                            <input @input="onSliderBorderRadiusChange" class="slider" type="range" name="borderRadius" id="borderRadius" v-model="borderRadius" min="0" max="20" >

                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Heading Serif</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <!-- Switch -->
                            <div class="form-check form-switch">
                                <input @change="onSwitchHeadingChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCheckHeading">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckHeading">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Sub-heading Serif</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <!-- Switch -->
                            <div class="form-check form-switch">
                                <input @change="onSwitchSubHeadingChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCheckSubHeading">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckSubHeading">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Card Text Serif</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <!-- Switch -->
                            <div class="form-check form-switch">
                                <input @change="onSwitchTextChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCardText">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckCardText">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        </aside>
        <!-- Panel 2 -->
        <aside>
            <div class="sidenav" style="background-color:#180d45;">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus? Cumque assumenda ducimus, repellat commodi, velit est quaerat excepturi minima modi neque accusamus quasi non a, expedita nemo natus porro!</p>


                <div class="row">
                    <div class="col">
                        <div class="h6 mb-0">Current Palette</div>
                        <!--<ul class="d-flex">
                                <li style="border:1px solid #efefef; cursor:pointer" :style="{backgroundColor: computedPrimaryMix}" @click="copyToClipboard(computedPrimaryMix)">{{computedPrimaryMix}}</li>
                                <li style="border:1px solid #efefef" :style="{backgroundColor: computedAccentMix}">{{computedAccentMix}}</li>
                            </ul>-->
                        <div class="h5 text-uppercase">{{currentPaletteName}}</div>
                        <div class="d-flex">
                            <ul class="list-unstyled d-flex color-palette-list">
                                <li v-for="(color, index) in currentPalette" :key="index"  class="color-palette-list-item d-flex flex-column" style="height:40px;">
                                    <!-- <div> {{currentPaletteNames[index]}} </div> -->
                                    <div class="d-block w-100 h-100 mb-2" :style="{backgroundColor:'#'+color+''}" ></div>
                                    <div class="color-palette-list-item__text">{{color.toUpperCase()}}</div>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <h6>Color Palettes</h6>
                        <div class="d-flex py-2 align-items-center color-palette-list-wrapper" role="button" v-for="(value, index) in colorPalettes" :key="index" :class="{active: currentPaletteId === index}" @click="setCurrentPalette(index)">
                            <div class="flex-basis-40 small">{{value.name}}</div>
                            <ul class="list-unstyled d-flex p-0 m-0 flex-basis-65 color-palette-list">
                                <li  v-for="(color, index) in value.colors" :key="index"  class="small d-flex" style="height:20px;">
                                    
                                    <div class="d-block w-100 h-100 " :style="{backgroundColor:'#'+color+''}" ></div>
                                    <!-- <div>{{color.toUpperCase()}}</div> -->
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            
        </aside>
        <!-- Main -->
        <main>
           
           


         

            <div class="row">
                <div class="col">
                    <div class="card bg-accent text-primary" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-subheading" contenteditable="true">Card Category</div>
                            <h2 class="card-title card-heading mb-5" contenteditable="true">The Bulk Of It</h2>
                            <p class="card-text text-primary" contenteditable="true">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <a href="#" class="btn btn-round mt-2 me-2 d-inline-block bg-primary text-accent" contenteditable="true">View More</a>
                            
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
            currentPalette: [],
            currentPaletteName: 'Awesome',
            currentPaletteNames: [],
            currentPaletteId: 0,
            neutralPalette: ['EFEFEF', '000000'],
            contrast: null,
            padding: 2,
            borderRadius: 4



        }
    },
    
    mounted() {
        
        // this.masterRGB = color.object()
        const loadColorPalette = async () => {
            try{
                // const response = await fetch('https://www.colourlovers.com/api/palettes/top?format=json&numResults=10');
                const params = {
                    access_token: import.meta.env.VITE_CONTENTFUL_API,
                    content_type: 'themes',
                    limit: 20,
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
                    const tempi = 1;
                    this.displayColors(this.colorPalettes[tempi].colors)
                    // Set the color names for each of the current color palette entry
                    this.setColorNames(this.colorPalettes[tempi].colors)
                    this.currentPaletteName = this.colorPalettes[tempi].name
                    this.currentPaletteId = tempi;

                    // Temporary push first 2 colors to the colors array ================================
                    this.colors[0] = `#${this.colorPalettes[tempi].colors[0]}`
                    this.colors[1] = `#${this.colorPalettes[tempi].colors[1]}`
                    this.colors[2] = '#FEFEFE'

                    const primaryColor = Color(this.colors[0])
                    const accentColor = Color(this.colors[1])
                    this.primaryHSL = RoundValues(primaryColor.hsl().object())
                    this.accentHSL = RoundValues(accentColor.hsl().object())


                    // this.accentHSL = RoundValues(Color(accentColor).hsl().object())

                    // document.documentElement.style.setProperty('--primaryColor', primaryColor)
                    this.setRootProperties('--primaryColor', primaryColor)
                    this.setRootProperties('--accentColor', accentColor)
                    // document.documentElement.style.setProperty('--accentColor', accentColor)

                    this.$nextTick(function(){
                        this.setActiveColorOnMount('primary')
                        this.setActiveColorOnMount('accent')
                        this.setActiveColorOnMount('neutral')

                    })
                    

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
            // document.documentElement.style.setProperty('--primaryColor', newColor)
            this.setRootProperties('--primaryColor', newColor)
        },
        updateAccentColor() {
            let newColor =  Color(this.accentHSL).hex()
            this.colors[1]= newColor
            // document.documentElement.style.setProperty('--accentColor', newColor)
            this.setRootProperties('--accentColor', newColor)
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
            // this.setRootProperties('--primaryColor', data.data)
            console.log('root primary color value: ',document.documentElement.style.getPropertyValue('--primaryColor'))
            this.colors[0]= data.data

            const currentHSL = RoundValues(this.primaryHSL)

            // this.masterHSL = hslObject

            //Prevent from snapping
            const newHSL = RoundValues(Color(this.colors[0]).hsl().object())
            this.animateSlider(currentHSL, newHSL, 'primary')
            // this.makeBtnActive('primary')
            this.setActiveColorOnMount('primary')

        },
        onChangeAccentColor(data) {
            console.log('onChangeTextColor', data)
            // document.documentElement.style.setProperty('--accentColor', data.data)
            this.setRootProperties('--accentColor', data.data)
            this.colors[1] = data.data
            // HSL
            
            const currentHSL = RoundValues(this.accentHSL) // old values
            //this.accentHSL = RoundValues(Color(this.accentColor).hsl().object()) // new values


            const newHSL = RoundValues(Color(this.colors[1]).hsl().object())
            this.animateSlider(currentHSL, newHSL, 'accent')
            // this.makeBtnActive(data.event.target, 'accent')
            this.setActiveColorOnMount('accent')

        },

         onChangeNeutralColor(data) {
            console.log('onChangeNeutralColor', data)
            document.documentElement.style.setProperty('--neutralColor', data.data)
            // this.colors[1] = data.data
            // HSL
            
            //const currentHSL = RoundValues(this.accentHSL) // old values
            //this.accentHSL = RoundValues(Color(this.accentColor).hsl().object()) // new values


            //const newHSL = RoundValues(Color(this.colors[1]).hsl().object())

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


            //this.animateSlider(currentHSL, newHSL, 'accent')
            // this.makeBtnActive(data.event.target, 'neutral')
            this.colors[2] = data.data
            this.setActiveColorOnMount('neutral')

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
        animateSlider(currentHSL={}, newColorHSL={}, colorHSLObj='primary') {

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
            if(colorHSLObj === 'primary') {
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
            // needs a target for the active outline
            // this.colors = this.colors.reverse();
            // var newArr = this.colors.splice(2,1).concat(this.colors.reverse());
            var revArr = [...this.colors].splice(0,2).reverse().concat([...this.colors].splice(-1));
            this.colors = [...revArr]
            // this.colors = newArr;
            this.onChangePrimaryColor({data:this.colors[0]})
            this.onChangeAccentColor({data:this.colors[1]})
        },
        copyToClipboard(string) {
           copy(string);
        },
        makeBtnActive(el,type) {
            console.log('make btn active');
            if(type === 'primary') {
                this.resetSideButtons('primary')
                const els = document.querySelectorAll('.primary-color-dots button')
            }
            if(type === 'accent') {
                this.resetSideButtons('accent')
            }
            if(type === 'neutral') {
                this.resetSideButtons('neutral')
            }
            el.classList.add('active');
        },
        resetSideButtons(type) {
            if(type === 'primary') {
                const els = document.querySelectorAll('.primary-color-dots button')
                els.forEach(el => {
                    el.classList.remove('active');
                })
            }

            if(type === 'accent') {
                const els = document.querySelectorAll('.accent-color-dots button')
                els.forEach(el => {
                    el.classList.remove('active');
                })
            }

            if(type === 'neutral') {
                const els = document.querySelectorAll('.neutral-color-dots button')
                els.forEach(el => {
                    el.classList.remove('active');
                })
            }
        },
        setRootProperties(name, value) {

            // const prop = document.documentElement.style.setProperty('--primaryColor', primaryColor)
            const prop = document.documentElement.style.setProperty(name, value)
            return
        },
        setActiveColorOnMount(type) {
            var els, i;
            if(type == 'primary') {
                els = document.querySelectorAll('.primary-color-dots button')
                i = 0
                
            }

            if(type == 'accent') {
                els = document.querySelectorAll('.accent-color-dots button')
                i = 1
            }
            if(type == 'neutral') {
                els = document.querySelectorAll('.neutral-color-dots button')
                console.log('els: ', els)
                i = 2
            }

            els.forEach(el => {
                console.log('el: ',el.getAttribute('title'))
                        console.log('array: ', this.colors[i])
                    if(el.getAttribute('title') === this.colors[i]) {
                        
                        this.makeBtnActive(el, type)
                        return
                    }
                })
        },
        onSwitchButtonRoundChange(e) {
            console.log('Switch', e)
            if(e.target.checked === true) {
                this.setRootProperties('--borderRadius', '20px')
            } else {
                this.setRootProperties('--borderRadius', '4px')
            }

        },
        onSwitchHeadingChange(e) {
            console.log('Switch for heading', e)
            if(e.target.checked === true) {
                this.setRootProperties('--cardHeading', 'var(--fontSerif)')
            } else {
                this.setRootProperties('--cardHeading', 'var(--fontSansSerif)')
            }
        },
        onSwitchSubHeadingChange(e) {
            console.log('Switch for heading', e)
            if(e.target.checked === true) {
                this.setRootProperties('--cardSubHeading', 'var(--fontSerif)')
            } else {
                this.setRootProperties('--cardSubHeading', 'var(--fontSansSerif)')
            }
        },
        onSwitchTextChange(e) {
            console.log('Switch for text', e)
            if(e.target.checked === true) {
                this.setRootProperties('--cardText', 'var(--fontSerif)')
            } else {
                this.setRootProperties('--cardText', 'var(--fontSansSerif)')
            }
        },
        onSliderPaddingChange(e) {
            console.log('slider padding change', this.padding)
            this.setRootProperties('--padding', `${this.padding}rem`)
            console.log(document.documentElement.style.getPropertyValue('--padding'))
        },
        onSliderBorderRadiusChange(e) {
            console.log('slider border radius change', this.borderRadius)
            this.setRootProperties('--borderRadius', `${this.borderRadius}px`)
            console.log(document.documentElement.style.getPropertyValue('--borderRadius'))
        },
        setCurrentPalette(index) {
            console.log(index);
            this.currentPaletteId = index;
            this.currentPaletteName = this.colorPalettes[index].name;
            this.currentPalette = this.colorPalettes[index].colors;

            // NEED TO REFACTOR - SAME AS ON MOUNTED

            // Temporary push first 2 colors to the colors array ================================
            this.colors[0] = `#${this.colorPalettes[index].colors[0]}`
            this.colors[1] = `#${this.colorPalettes[index].colors[1]}`
            this.colors[2] = '#FEFEFE'

            const primaryColor = Color(this.colors[0])
            const accentColor = Color(this.colors[1])
            this.primaryHSL = RoundValues(primaryColor.hsl().object())
            this.accentHSL = RoundValues(accentColor.hsl().object())


            // this.accentHSL = RoundValues(Color(accentColor).hsl().object())

            // document.documentElement.style.setProperty('--primaryColor', primaryColor)
            this.setRootProperties('--primaryColor', primaryColor)
            this.setRootProperties('--accentColor', accentColor)
            // document.documentElement.style.setProperty('--accentColor', accentColor)

            this.$nextTick(function(){
                this.setActiveColorOnMount('primary')
                this.setActiveColorOnMount('accent')
                this.setActiveColorOnMount('neutral')

            })

        }
        


    }
}




// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style scoped>


</style>
