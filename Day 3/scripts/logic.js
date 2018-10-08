(function(window, document, undefined){

    // code that will be taken care of right away
    
    window.onload = initialize;

    function initialize() {
        const colorPicker = document.getElementById('color');
        const imageBackground = document.getElementsByClassName('image');
        const bg = document.body;

        colorPicker.addEventListener('change', watchColorPicker, false);

        function watchColorPicker() {
            console.log('changed to ' + this.value);
            console.log(imageBackground);
            //imageBackground.style.setProperty('background-color', 'red')
            bg.style.setProperty('background-color', this.value);
        }
    }


})(window, document, undefined);