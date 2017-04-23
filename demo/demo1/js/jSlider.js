/**
 * Created by J on 2017/4/21.
 */

var jSlider = document.getElementById('jSlider')
var jSliderUl = jSlider.children[0]
var jSliderCount = 0;
var jSliderLiNum = 4;

setInterval(autoPlay, 2000)

function autoPlay(){
    jSliderUl.setAttribute('style', 'left:-'+jSliderCount*100+'%')
    jSliderCount++
    jSliderCount %= jSliderLiNum
}