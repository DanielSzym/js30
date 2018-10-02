//(() => { 

(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = initialize;
    
        function initialize(){
            var d = new Date();
            seconds = d.getSeconds()
            console.log(seconds);
            secondsDegree = seconds*6;
            console.log(secondsDegree);
            
        
            
            var secHand = document.getElementById('secondsHand');
            console.log(secHand);
            var degree = 'rotate('+secondsDegree+'deg);';
            secHand.style.transform = degree;
            console.log(degree);
        }
    
    })(window, document, undefined);

  
//})();