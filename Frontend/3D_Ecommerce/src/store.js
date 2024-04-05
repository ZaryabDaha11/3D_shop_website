import { proxy } from "valtio";

// this will work as react context
const state = proxy({
    intro: true, //means are we on home page or not
    color: '#EFBD48', //default color
    isLogoTexture: true, //the logo should be on shirt or not
    logoDecal: './public/threejs.png', // the default logo
    isFullTextured: false, //
    fullDecal: './public/threejs.png', // the default logo texture

});

export default state;