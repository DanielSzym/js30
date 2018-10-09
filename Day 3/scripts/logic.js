(function(window, document, undefined){

    // code that will be taken care of right away
    
    window.onload = initialize;

    function initialize() {
        const body = document.body;

        const colorPicker = document.getElementById('color');
        const blurFilter = document.getElementById('blur');
        const spaceFilter = document.getElementById('spacing');

        const spacingInt = document.querySelector('.spacingPx');
        const blurInt = document.querySelector('.blurPx');
        

        colorPicker.addEventListener('change', watchColorPicker, false);
        //change blur also works with mousemove but tracks every hover as well
        blurFilter.addEventListener('change', watchBlurFilter, false);
        spaceFilter.addEventListener('change', watchSpaceFilter, false);

        function watchColorPicker () {
            //console.log('changed to ' + this.value);
            body.style.setProperty('--base', this.value);
        }

        function watchBlurFilter (){
            body.style.setProperty('--blur', this.value + 'px');
            blurInt.innerHTML = '(' + this.value + 'px)';
        }

        function watchSpaceFilter (){
            body.style.setProperty('--spacing', this.value + 'px');
            spacingInt.innerHTML = '(' + this.value + 'px)';
        }

        
        //body.style.setProperty('--spacing', this.value);
    }


})(window, document, undefined);