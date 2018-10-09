(function(window, document, undefined){

    // code that will be taken care of right away
    
    window.onload = initialize;

    function initialize() {
        const colorPicker = document.getElementById('color');
        const blurFilter = document.getElementById('blur');
        
        const body = document.body;

        

        colorPicker.addEventListener('change', watchColorPicker, false);
        colorPicker.addEventListener('change', watchBlurFilter, false);

        function watchColorPicker() {
            console.log('changed to ' + this.value);
            body.style.setProperty('--base', this.value);
        }

        function watchBlurFilter (){
            console.log(blurFilter);
            body.style.setProperty('--blur', this.value);
        }

        
        //body.style.setProperty('--spacing', this.value);
    }


})(window, document, undefined);