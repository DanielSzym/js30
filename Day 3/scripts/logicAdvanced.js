(function(window, document, undefined){

    // code that will be taken care of right away
    
    window.onload = initialize;

    function initialize() {
        const elements = document.body.querySelectorAll('.control-elements input');

        function handleUpdate () {
            const suffix = this.dataset.suffix || ''; //fallback of this dataset does not exist in html element
            //documentElemenet refers to the root element, here the <html> tag. body would refer to <body> element
            document.documentElement.style.setProperty('--'+this.name, this.value + suffix);
            //this.name refers to name property of html element
        }
        
        //#1 to compare normal function to arrow function
        //elements.forEach(function (elements) { elements.addEventListener('change', handleUpdate)});
        elements.forEach(elements => elements.addEventListener('change', handleUpdate)); //or mousover event

    }


})(window, document, undefined);