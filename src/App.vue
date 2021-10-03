<template>
  
    <div class="container-fluid d-flex p-0">
        <!-- Panel 1 -->
        <aside>
            <div class="sidenav">
                <div class="logo mb-4">
                    <div class="logo-icon">
                        <!--<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="PANL-Logo-2">
                                    <rect id="Rectangle-3" fill="#3EB69B" x="0" y="0" width="40" height="4"></rect>
                                    <rect id="Rectangle-4" fill="#F8E71C" x="25" y="27" width="15" height="13"></rect>
                                    <rect id="Rectangle-3-Copy" fill="#50E3C2" x="0" y="9" width="40" height="4"></rect>
                                    <rect id="Rectangle-3-Copy-2" fill="#57F6D2" x="0" y="18" width="40" height="4"></rect>
                                    <rect id="Rectangle-3-Copy-3" fill="#7EFCE0" x="0" y="27" width="20" height="4"></rect>
                                    <rect id="Rectangle-3-Copy-4" fill="#AEFCEA" x="0" y="36" width="20" height="4"></rect>
                                </g>
                            </g>
                        </svg>-->
                    
                        <div class="ms-2 d-flex ">
                            <!-- <div class="d-flex flex-row">
                                <div class="letter">P</div>
                                <div class="letter">A</div>
                                <div class="letter">N</div>
                                <div class="letter">L</div>
                            </div> -->
                            <!-- <div class="logo-text">
                            Primary Accent Neutral Layout
                            </div> -->
                            <img src="panl.svg">  
                        </div>

                                          
                    </div>
                </div>
                 
                <p class="small">
                Primary Accent Neutral Layout or PANL is a color combination visualizer.
                </p>

                <!-- <h4 class="text-uppercase">Colors</h4> -->
                <!-- <hr> -->
                
                 
              
                <hr>
                <div class="sidebar">
                    <div class="h6 mb-0">Current Palette</div>
                        <!--<ul class="d-flex">
                                <li style="border:1px solid #efefef; cursor:pointer" :style="{backgroundColor: computedPrimaryMix}" @click="copyToClipboard(computedPrimaryMix)">{{computedPrimaryMix}}</li>
                                <li style="border:1px solid #efefef" :style="{backgroundColor: computedAccentMix}">{{computedAccentMix}}</li>
                            </ul>-->
                        <div class="h5 text-uppercase">{{currentPaletteName}}</div>
                        <div class="d-flex align-items-center">
                            <ul class="list-unstyled d-flex color-palette-list">
                                <li v-for="(color, index) in currentPalette" :key="index"  class="color-palette-list-item d-flex flex-column h-10" style="height:40px;">
                                    <!-- <div> {{currentPaletteNames[index]}} </div> -->
                                    <div class="d-block w-100 h-100 mb-2" :style="{backgroundColor:'#'+color+''}" @click="copyToClipboard($event,color.toUpperCase())" :title="color.toUpperCase()"></div>
                                    <div class="color-palette-list-item__text" @click="copyToClipboard(color.toUpperCase())">{{color.toUpperCase()}}</div>
                                    
                                </li>
                            </ul>
                        </div>
                </div>

                <hr>
                 <div class="sidebar-section">
                     <div class="sidebar-section__heading">Primary</div>
                     <div class="sidebar-section__colors primary-color-dots d-flex align-items-center">
                         <color-dots class="primary-color-dot h-10" @changeColor="onChangePrimaryColor($event)" v-for="color in currentPalette" :key="color" :color="`#${color}` "></color-dots>
                         <color-dots class="primary-color-dot h-10" @changeColor="onChangePrimaryColor($event)" v-for="color in neutralPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                 <div class="sidebar-color d-flex mt-3 align-items-center">
                     <div class="sidebar-color__heading text-white-50">{{colors[0].toUpperCase()}}</div>
                     <div class="sidebar-color__block bg-primary border-radius-4 h-10"></div>
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
                     <div class="sidebar-section__colors accent-color-dots d-flex align-items-center">
                         <color-dots class="accent-color-dot h-10" @changeColor="onChangeAccentColor" v-for="color in currentPalette" :key="color" :color="`#${color}` "></color-dots>
                         <color-dots class="accent-color-dot h-10" @changeColor="onChangeAccentColor" v-for="color in neutralPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                <div class="sidebar-color d-flex align-items-center mt-3">
                    <div class="sidebar-color__heading text-white-50">{{colors[1].toUpperCase()}}</div>
                    <div class="sidebar-color__block bg-accent border-radius-4 h-10"></div>
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
                         <color-dots class="neutral-color-dot h-10" @changeColor="onChangeNeutralColor" v-for="color in neutralPalette" :key="color" :color="`#${color}` "></color-dots>
                     </div>
                 </div>
                
                <hr>
                <div class="sidebar-section justify-content-between align-items-stretch flex-column">
                    <h6>Color Palettes</h6>
                    <div class="d-flex flex-row py-2 align-items-center color-palette-list-wrapper" role="button" v-for="(value, index) in colorPalettes" :key="index" :class="{active: currentPaletteId === index}" @click="setCurrentPalette(index)">
                        <div class="flex-basis-40 small">{{value.name}}</div>
                        <ul class="list-unstyled d-flex p-0 m-0 flex-basis-65 color-palette-list">
                            <li  v-for="(color, index) in value.colors" :key="index"  class="small d-flex h-10">
                                
                                <div class="d-block w-100 h-100 " :style="{backgroundColor:'#'+color+''}" ></div>
                                <!-- <div>{{color.toUpperCase()}}</div> -->
                                
                            </li>
                        </ul>
                    </div>
                </div>
                


            </div>
        </aside>
        <!-- Panel 2 -->
        <aside>
            <div class="sidenav" style="background-color:#180d45;">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus? Cumque assumenda ducimus, repellat commodi, velit est quaerat excepturi minima modi neque accusamus quasi non a, expedita nemo natus porro!</p>

                <hr>

                <div class="sidebar-section justify-content-start align-items-start">
                     <div class="sidebar-section__heading">
                         Color Contrast Checker
                        <div class="py-2 d-flex justify-content-lg-between"><span><span class="small text-muted text-uppercase">Ratio</span> {{computedContrast}}</span><span class="text-uppercase"><span class="small text-muted text-uppercase">Grade</span> {{computedContrastRating}}</span></div>
                     </div>
                     <div class="sidebar-section__block d-flex flex-column w-100 contrast-checker-card">
                         <div class="bg-primary p-2 contrast-checker-card__outter">
                            <div class="d-flex align-items-center contrast-checker-card__inner">
                                <span class="h1 me-1 text-accent contrast-checker-card__heading">A <br/> a</span>
                                <span class="small text-accent contrast-checker-card__text">abcd ef ghji lmno pqrs tuv wxzy 123 4567 890 !@#$% &?</span>
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
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Base Font Size {{baseFontSize}}px</div>
                        <div class="sidebar-settings__control">
                            <!-- <Slider label="SaturationMaster" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=5 @colorChange="onSliderChange($event)"></Slider> -->
                            <label class="visually-hidden" for="BaseFontSize">Change Base Font Size</label>
                            <input @input="onSliderBaseFontSizeChange" class="slider" type="range" name="BaseFontSize" id="BaseFontSize" v-model="baseFontSize" min="10" max="20" >

                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Padding {{paddings}}rem</div>
                        <div class="sidebar-settings__control">
                            <!-- <Slider label="SaturationMaster" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=5 @colorChange="onSliderChange($event)"></Slider> -->
                            <label class="visually-hidden" for="Paddings">Change Padding</label>
                            <input @input="onSliderPaddingsChange" class="slider" type="range" name="Paddings" id="Paddings" v-model="paddings" min="0" max="5" >

                        </div>
                    
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Margins {{margins}}rem</div>
                        <div class="sidebar-settings__control">
                            <!-- <Slider label="SaturationMaster" color-type="accent" channel="s"  :label-hidden="true" :min=0 :max=5 @colorChange="onSliderChange($event)"></Slider> -->
                            <label class="visually-hidden" for="Padding">Change Margins</label>
                            <input @input="onSliderMarginsChange" class="slider" type="range" name="Margins" id="Margins" v-model="margins" min="0" max="5" >

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
                                <input @change="onSwitchHeadingChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCheckHeading" :checked="headingSerif == 1">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckHeading">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Sub-heading Serif</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <!-- Switch -->
                            <div class="form-check form-switch">
                                <input @change="onSwitchSubHeadingChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCheckSubHeading" :checked="subHeadingSerif == 1">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckSubHeading">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Text Serif</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <!-- Switch -->
                            <div class="form-check form-switch">
                                <input @change="onSwitchTextChange($event)" class="form-check-input" type="checkbox" id="flexSwitchCardText" :checked="textSerif == 1">
                                <label class="form-check-label visually-hidden" for="flexSwitchCheckCardText">Default switch checkbox input</label>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Save current settings</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <div class="icon" @click="saveSettings">
                                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M3 5C3 3.89543 3.89543 3 5 3H9H15H16.5858C17.1162 3 17.6249 3.21071 18 3.58579L20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V19C21 20.1046 20.1046 21 19 21H15H9H5C3.89543 21 3 20.1046 3 19V5ZM9 19H15V13H9V19ZM17 19H19V7.41421L17 5.41421V7C17 8.10457 16.1046 9 15 9H9C7.89543 9 7 8.10457 7 7V5H5V19H7V13C7 11.8954 7.89543 11 9 11H15C16.1046 11 17 11.8954 17 13V19ZM9 5V7H15V5H9Z" fill="#FFFFFF"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-settings">
                        <div class="sidebar-settings__heading text-white-50 flex-basis-65">Load previous settings</div>
                        <div class="sidebar-settings__control d-flex justify-content-end">
                            <div class="icon" @click="loadSettings">
                                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z" fill="#FFFFFF"></path>
                                </svg>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>

            
                <hr>
                <div class="row">
                    <div class="col">
                        
                    </div>
                </div>


            </div>
            
        </aside>
        <!-- Main -->
        <main class="container layout flex-grow">
           
           
                <div class="row">
                    <div class="col">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi illum est voluptatum velit ullam sequi vitae neque. Temporibus, voluptates eaque dolores suscipit iure animi ad error nesciunt laborum amet architecto.
                        </p>
                    </div>
                </div>

            <div class="row">
                <div class="col">
                    <div class="card bg-primary text-accent root-margins shadow">
                        <div class="card-body">
                            <div class="card-subheading" contenteditable="true">Card Category</div>
                            <h2 class="card-title card-heading mb-5" contenteditable="true">The Bulk Of It 1</h2>
                            <p class="card-text text-accent" contenteditable="true">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <a href="#" class="btn btn-round mt-2 me-2 d-inline-block bg-accent text-primary" contenteditable="true">View More</a>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-accent text-primary root-margins shadow">
                        <div class="card-body">
                            <div class="card-subheading" contenteditable="true">Card Category</div>
                            <h2 class="card-title card-heading mb-5" contenteditable="true">The Bulk Of It 2</h2>
                            <p class="card-text text-primary" contenteditable="true">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <a href="#" class="btn btn-round mt-2 me-2 d-inline-block bg-primary text-accent" contenteditable="true">View More</a>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-neutral text-accent root-margins shadow">
                        <div class="card-body">
                            <div class="card-subheading" contenteditable="true">Card Category</div>
                            <h2 class="card-title card-heading mb-5" contenteditable="true">The Bulk Of It 3</h2>
                            <p class="card-text" contenteditable="true">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <a href="#" class="btn btn-round mt-2 me-2 d-inline-block bg-accent text-neutral" contenteditable="true">View More</a>
                            
                        </div>
                    </div>
                </div>
            </div>    

        
            <div class="row">
                <div class="col">
                    <div class="card bg-neutral text-accent root-margins p-0" style="padding:0 !important;">
                        <div class="card-body">
                            <h2 class="card-title card-heading mb-5" contenteditable="true">The Bulk Of It</h2>
                            <p class="card-text text-accent" contenteditable="true">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="card-text text-accent" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum deserunt voluptatibus dolor, temporibus tempore eaque minima quae neque illo cupiditate explicabo officiis suscipit voluptatum soluta nulla. Iure, esse libero.</p>
                            
                        </div>
                    </div>
                </div>
               
            </div>


            <div class="row">
                <div class="col-7">
                    <div class="card bg-primary text-accent root-margins flex-shrink-1" >
                        <div class="card-body">
                            <div class="card-subheading" contenteditable="true">Card Category</div>
                            <h2 class="card-title card-heading mb-5" contenteditable="true">The Bulk Of It</h2>
                            <p class="card-text text-accent" contenteditable="true">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <a href="#" class="btn btn-round mt-2 me-2 d-inline-block bg-accent text-primary" contenteditable="true">View More</a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="card bg-accent text-primary root-margins">
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





            <div class="row">
                <div class="col">
                    <div class="card bg-accent text-primary root-margins">
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

            <div class="row footer">
                <div class="col m-0">
                    <div class="d-flex">
                        <span class="me-2 small">&copy; 2021 Tu Trinh</span>
                        <span class="me-2 small"><a href="hellotu.com">Hellotu.com</a></span>
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
import {RoundValues, SetRootProperty, GetRootPropertyValue, SetHSLToRoot} from '@/utilities/utils'
import {Cookie} from '@/utilities/cookies'
export default {
    components: {
        ColorDots,
        Slider
    },
    data() {
        return {
            colors: ['#EAE2B7', '#003049', '#EFEFEF'],// primary, accent, neutral
            primaryHSL: {
                H: 0, //number 0 - 360
                S: 0, // percentage 100
                L: 0 // percentage 100

            },
            accentHSL: {
                H: 0,
                S: 0,
                L: 0

            },
            neutralHSL: {
                H: 0,
                S: 0,
                L: 0

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
            paddings: 2,
            margins: 1,
            borderRadius: 4,
            baseFontSize: 12,
            headingSerif: 0,
            subHeadingSerif: 0,
            textSerif: 0



        }
    },
    beforeMount() {
        // Load previous settings if cookie exist
        if(Cookie.cookieExist('__panl-paletteId') === true) {
            //this.loadSettings();
            console.log('current palette id before mount: ', this.currentPaletteId);
            this.currentPaletteId = Cookie.getCookieValue('__panl-paletteId')
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
                    data.items.forEach(item => {
                        this.colorPalettes.push(item.fields)
                    })
                    // console.log('colorPalettes',this.colorPalettes)
                    this.displayColors(this.colorPalettes[this.currentPaletteId].colors)
                    // Set the color names for each of the current color palette entry
                    this.setColorNames(this.colorPalettes[this.currentPaletteId].colors)
                    this.currentPaletteName = this.colorPalettes[this.currentPaletteId].name
                    //this.currentPaletteId = this.currentPaletteId;

                    // Temporary push first 2 colors to the colors array ================================
                    this.colors[0] = `#${this.colorPalettes[this.currentPaletteId].colors[0]}`
                    this.colors[1] = `#${this.colorPalettes[this.currentPaletteId].colors[1]}`
                    this.colors[2] = '#EFEFEF'

                    const primaryColor = Color(this.colors[0])
                    const accentColor = Color(this.colors[1])
                    const neutralColor = Color(this.colors[2])
                    this.primaryHSL = RoundValues(primaryColor.hsl().object())
                    this.accentHSL = RoundValues(accentColor.hsl().object())
                    this.neutralHSL = neutralColor.hsl().object()

                    SetHSLToRoot(this.primaryHSL, 'primary');
                    SetHSLToRoot(this.accentHSL, 'accent');
                    SetHSLToRoot(this.neutralHSL, 'neutral');
                    SetRootProperty('--primaryColor', primaryColor)
                    SetRootProperty('--accentColor', accentColor)
                    SetRootProperty('--neutralColor', neutralColor)

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
            SetRootProperty('--primaryColor', newColor)
        },
        updateAccentColor() {
            let newColor =  Color(this.accentHSL).hex()
            this.colors[1]= newColor
            // document.documentElement.style.setProperty('--accentColor', newColor)
            SetRootProperty('--accentColor', newColor)
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
            SetRootProperty('--primaryColor', data.data)
            this.colors[0]= data.data

            const currentHSL = RoundValues(this.primaryHSL)
            const newHSL = RoundValues(Color(this.colors[0]).hsl().object())
            SetHSLToRoot(newHSL, 'primary')
            this.animateSlider(currentHSL, newHSL, 'primary')
            this.setActiveColorOnMount('primary')

        },
        onChangeAccentColor(data) {
            SetRootProperty('--accentColor', data.data)
            this.colors[1] = data.data
            
            const currentHSL = RoundValues(this.accentHSL) // old values

            const newHSL = RoundValues(Color(this.colors[1]).hsl().object())
            SetHSLToRoot(newHSL, 'accent')
            this.animateSlider(currentHSL, newHSL, 'accent')
            // this.makeBtnActive(data.event.target, 'accent')
            this.setActiveColorOnMount('accent')

        },

         onChangeNeutralColor(data) {
            SetRootProperty('--neutralColor', data.data)
            this.colors[2] = data.data
            const newHSL = RoundValues(Color(this.colors[2]).hsl().object())
            SetHSLToRoot(newHSL, 'neutral')
            this.setActiveColorOnMount('neutral')

        },
       
        onSliderChange(data) {
            // console.log('on master change: ', data)
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
            this.onChangeNeutralColor({data:this.colors[2]})
        },
        copyToClipboard(e,string) {
            // console.log('copy to clipboard: ', e)
           copy(`#${string}`);
        },
        makeBtnActive(el,type) {
            // console.log('make btn active');
            if(type === 'primary') {
                this.resetSideButtons('primary')
                // const els = document.querySelectorAll('.primary-color-dots button')
                const els = document.querySelectorAll('.primary-color-dots button')
            }
            if(type === 'accent') {
                this.resetSideButtons('accent')
            }
            if(type === 'neutral') {
                this.resetSideButtons('neutral')
            }
            // console.dir(el)
            el.parentElement.classList.add('active');
        },
        resetSideButtons(type) {
            if(type === 'primary') {
                const els = document.querySelectorAll('.primary-color-dots button')
                els.forEach(el => {
                    el.parentElement.classList.remove('active');
                })
            }

            if(type === 'accent') {
                const els = document.querySelectorAll('.accent-color-dots button')
                els.forEach(el => {
                    el.parentElement.classList.remove('active');
                })
            }

            if(type === 'neutral') {
                const els = document.querySelectorAll('.neutral-color-dots button')
                els.forEach(el => {
                    el.parentElement.classList.remove('active');
                })
            }
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
                // console.log('els: ', els)
                i = 2
            }

            els.forEach(el => {
                // console.log('el: ',el.getAttribute('title'))
                        // console.log('array: ', this.colors[i])
                    if(el.getAttribute('title') === this.colors[i]) {
                        
                        this.makeBtnActive(el, type)
                        return
                    }
                })
        },
        onSwitchButtonRoundChange(e) {
            // console.log('Switch', e)
            if(e.target.checked === true) {
                SetRootProperty('--borderRadius', '20px')
            } else {
                SetRootProperty('--borderRadius', '4px')
            }

        },
        onSwitchHeadingChange(e) {
            // console.log('Switch for heading', e)
            if(e.target.checked === true) {
                SetRootProperty('--cardHeading', 'var(--fontSerif)')
                this.headingSerif = 1
            } else {
                SetRootProperty('--cardHeading', 'var(--fontSansSerif)')
                this.headingSerif = -0
            }
        },
        onSwitchSubHeadingChange(e) {
            // console.log('Switch for heading', e)
            if(e.target.checked === true) {
                SetRootProperty('--cardSubHeading', 'var(--fontSerif)')
                this.subHeadingSerif = 1
            } else {
                SetRootProperty('--cardSubHeading', 'var(--fontSansSerif)')
                this.subHeadingSerif = 0
            }
        },
        onSwitchTextChange(e) {
            // console.log('Switch for text', e)
            if(e.target.checked === true) {
                SetRootProperty('--cardText', 'var(--fontSerif)')
                this.textSerif = 1
            } else {
                SetRootProperty('--cardText', 'var(--fontSansSerif)')
                this.textSerif = 0
            }
        },
        onSliderBaseFontSizeChange(e) {
            // console.log('slider base font size change', this.baseFontSize)
            SetRootProperty('--baseFontSize', `${this.baseFontSize}px`)
            // console.log(document.documentElement.style.getPropertyValue('--baseFontSize'))
        },
        onSliderPaddingsChange(e) {
            // console.log('slider paddings change', this.paddings)
            SetRootProperty('--paddings', `${this.paddings}rem`)
            // console.log(document.documentElement.style.getPropertyValue('--paddings'))
        },
        onSliderMarginsChange(e) {
            // console.log('slider margins change', this.margins)
            SetRootProperty('--margins', `${this.margins}rem`)
            // console.log(document.documentElement.style.getPropertyValue('--margins'))
        },
        onSliderBorderRadiusChange(e) {
            // console.log('slider border radius change', this.borderRadius)
            SetRootProperty('--borderRadius', `${this.borderRadius}px`)
            // console.log(document.documentElement.style.getPropertyValue('--borderRadius'))
        },
        setCurrentPalette(index) {
            // console.log(index);
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
            SetRootProperty('--primaryColor', primaryColor)
            SetRootProperty('--accentColor', accentColor)
            // document.documentElement.style.setProperty('--accentColor', accentColor)

            this.$nextTick(function(){
                this.setActiveColorOnMount('primary')
                this.setActiveColorOnMount('accent')
                this.setActiveColorOnMount('neutral')

            })

        },
        saveSettings() {
            Cookie.getAllCookies();
            let cookieObj = {
            paletteId: this.currentPaletteId,
            borderRadius: this.borderRadius,
            baseFontSize: this.baseFontSize,
            paddings: this.paddings,
            margins: this.margins,
            headingSerif: this.headingSerif,
            subHeadingSerif: this.subHeadingSerif,
            textSerif: this.textSerif,
            primaryColor: this.colors[0],
            accentColor: this.colors[1],
            neutralColor: this.colors[2]
            }
            // Cookie names
            // __panl-palletteId
            // __panl-borderRadius
            // __panl-baseFontSize
            // __panl-paddings
            // __panl-margins

            // console.log('Before saving colors: ', this.colors)

            for(const [key, value] of Object.entries(cookieObj)) {
                // console.log(key, value)
                Cookie.setCookie(`__panl-${key}`, value);
            }

            Cookie.getAllCookies();
        },
        loadSettings() {
            let cookieNames = [
            'paletteId',
            'borderRadius',
            'baseFontSize',
            'paddings',
            'margins',
            'headingSerif',
            'subHeadingSerif',
            'textSerif',
            'primaryColor',
            'accentColor',
            'neutralColor',
            ]

            for(const cName of cookieNames) {
                // console.log(cName)
                //getCookieValue
                //cookieExist
                // console.log(Cookie.getCookieValue(`__panl-${cName}`))
            }
            this.currentPaletteId = Cookie.getCookieValue(`__panl-${cookieNames[0]}`)
            this.borderRadius = Cookie.getCookieValue(`__panl-${cookieNames[1]}`)
            this.baseFontSize = Cookie.getCookieValue(`__panl-${cookieNames[2]}`)
            this.paddings = Cookie.getCookieValue(`__panl-${cookieNames[3]}`)
            this.margins = Cookie.getCookieValue(`__panl-${cookieNames[4]}`)
            this.headingSerif = Cookie.getCookieValue(`__panl-${cookieNames[5]}`)
            this.subHeadingSerif = Cookie.getCookieValue(`__panl-${cookieNames[6]}`)
            this.textSerif = Cookie.getCookieValue(`__panl-${cookieNames[7]}`)
            this.colors[0] = Cookie.getCookieValue(`__panl-${cookieNames[8]}`)
            this.colors[1] = Cookie.getCookieValue(`__panl-${cookieNames[9]}`)
            this.colors[2] = Cookie.getCookieValue(`__panl-${cookieNames[10]}`)

            // Temp table
            //let colorsArr = []
            //colorsArr.push(this.colors[0])
            //colorsArr.push(this.colors[1])
            //colorsArr.push(this.colors[2])

            // Settings the root properties
            //this.setCurrentPalette(this.currentPaletteId);
            SetRootProperty('--borderRadius', `${this.borderRadius}px`);
            SetRootProperty('--paddings', `${this.paddings}rem`);
            SetRootProperty('--margins', `${this.margins}rem`);
            SetRootProperty('--baseFontSize', `${this.baseFontSize}px`);

            //this.colors = [...colorsArr]
            SetRootProperty('--primaryColor', this.colors[0])
            SetRootProperty('--accentColor', this.colors[1])
            SetRootProperty('--neutralColor', this.colors[2])

            //colorsArr = []

            // console.log('heading serif: ', this.headingSerif)
            this.headingSerif == 1 ? SetRootProperty('--cardHeading', 'var(--fontSerif)') : SetRootProperty('--cardHeading', 'var(--fontSansSerif)');
            this.subHeadingSerif == 1 ? SetRootProperty('--cardSubHeading', 'var(--fontSerif)') : SetRootProperty('--cardSubHeading', 'var(--fontSansSerif)');
            this.textSerif == 1 ? SetRootProperty('--cardText', 'var(--fontSerif)') : SetRootProperty('--cardText', 'var(--fontSansSerif)');

        }
        


    }
}




// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style scoped>


</style>
