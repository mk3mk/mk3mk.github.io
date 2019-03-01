   
$(document).ready(function () {    
    
// 
    
    
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', //  ID элемента
        topDistance: '300', // расстояние после которого появится кнопка (px)
        topSpeed: 300, // скорость переноса (миллисекунды)
        animation: 'fade', // вид анимации: fade, slide, none
        animationInSpeed: 200, // скорость разгона анимации (миллисекунды)
        animationOutSpeed: 200, // скорость торможения анимации (миллисекунды)
        scrollText: 'Scroll to top', // текст
        activeOverlay: false, // задать CSS цвет активной точке scrollUp, например: '#00FFFF'
    });
});
    
    
$(function () {
    $.scrollUp();
});    



});    