/*
TODO:
    Add minutes Hand
    Add hours hand
    x Add listener to initialize when second changes
*/

//(() => { 

(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = initialize;
    
        function initialize(){

            //listen to when second changes to initialize clock every 1/60 secs
            var listener = getSecondDegree();
            var listenerInterval = setInterval(function() {
                if (listener != getSecondDegree()) {
                    initializeSeconds();
                    initializeMinutes();
                    clearInterval(listenerInterval);
                }
            }, 16.67)
            

            function initializeSeconds(){
                secondsDegree = getSecondDegree();
                setSecondsHand(secondsDegree);
            }

            function initializeMinutes(){
                return;
            }

        }

        function setSecondsHand(secondsDegree){
            //get Element
            var secondsHand = document.getElementById('secondsHand');
            //set style element
            
            setSecondsHandStyle(secondsHand, secondsDegree);
            //make hand visible
            secondsHand.style.backgroundColor = '#ffffff';
            
            setInterval(function() {
                secondsDegree = getSecondDegree(); 
                console.log(getSecondDegree());
                secondsHand.style.transform = 'rotate('+(secondsDegree)+'deg)';
            }, 1000);
        }

        function getSecondDegree() {
            var d = new Date();
            return (d.getSeconds()*6)+90;
        }

        function setSecondsHandStyle(secondsHand, secondsDegree){
            var degree = 'rotate('+secondsDegree+'deg)';
            secondsHand.style.transform = degree;
        }
    
    })(window, document, undefined);

  
//})();