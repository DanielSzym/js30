/*
TODO:
    x Add minutes Hand
    x Add hours hand
    x Add listener to initialize when second changes
*/

(function(window, document, undefined){

    // code that will be taken care of right away
    
    window.onload = initialize;
    
        function initialize(){
            const secondHand = document.querySelector('.secondsHand');
            const minuteHand = document.querySelector('.minutesHand');
            const hourHand = document.querySelector('.minutesHand');
            
            function setDate() {
                const now = new Date();

                const seconds = now.getSeconds();
                const secondsDegree = ((seconds * 6) + 90);
                secondHand.style.transform = 'rotate('+secondsDegree+'deg)';
                
                console.log(seconds);

                const mins = now.getMinutes();
                const minutesDegree = ((mins * 6) + 90)
                minuteHand.style.transform = 'rotate('+minutesDegree+'deg)';

                console.log(mins);

                const hours = now.getHours();
                const hoursDegree = ((hours * 30) + 90)
                hourHand.style.transform = 'rotate('+hoursDegree+'deg)';

                console.log(hours);
            }

            setInterval(setDate, 1000);

            setDate();

        }
    }
)(window, document, undefined);
