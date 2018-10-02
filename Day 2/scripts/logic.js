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

            //listen every 1/60 secs when second changes to initialize all clock hands
            var listener = getSecondDegree();
            var listenerInterval = setInterval(function() {
                if (listener != getSecondDegree()) {
                    setHands();
                    clearInterval(listenerInterval);
                }
            }, 16.67)
        }

        //set all Hands
        function setHands(){

            //get Elements
            var secondsHand = document.getElementById('secondsHand');
            var minutesHand = document.getElementById('minutesHand');
            var hoursHand = document.getElementById('hoursHand');
            
            //get degrees
            secondsDegree = getSecondDegree();
            minutesDegree = getMinuteDegree();
            hoursDegree = getHourDegree();


            //set style element
            setSecondsHandStyle(secondsHand, secondsDegree);
            setMinutesHandStyle(minutesHand, minutesDegree);
            setHoursHandStyle(hoursHand, hoursDegree);

            //make hands visible
            minutesHand.style.backgroundColor = '#ffffff';
            secondsHand.style.backgroundColor = '#ffffff';
            hoursHand.style.backgroundColor = '#ffffff';
            
            // listeners to check wether minutes or hours hands have to move
            var minutesDegreeListener = getMinuteDegree();
            var hoursDegreeListener = getHourDegree();
            
            setInterval(function() {
                secondsDegree = getSecondDegree();
                secondsHand.style.transform = 'rotate('+(secondsDegree)+'deg)';
                if (minutesDegreeListener != getMinuteDegree()) {
                    minutesDegree = getMinuteDegree();
                    setMinutesHandStyle(minutesHand, minutesDegree)
                    //minutesHand.style.transform = 'rotate('+(minutesDegree)+'deg)';
                }
                if(true) {

                }
            }, 1000);
        }

        function getSecondDegree() {
            var d = new Date();
            return (d.getSeconds()*6)+90; //x 6 for getting base 360 and +90 because initialized with 0deg = 45 secs
        }

        function setSecondsHandStyle(secondsHand, secondsDegree){
            var degree = 'rotate('+secondsDegree+'deg)';
            secondsHand.style.transform = degree;
        }


        function setMinutesHand(minutesDegree){
            //get Element
            var minutesHand = document.getElementById('minutesHand');
            //set style element
            setMinutesHandStyle(minutesHand, minutesDegree);
            //make hand visible
            minutesHand.style.backgroundColor = '#ffffff';
            
        }

        //Minutes
        function getMinuteDegree() {
            var d = new Date();
            return (d.getMinutes()*6)+90; //x 6 for getting base 360 and +90 because initialized with 0deg = 45 secs
        }

        function setMinutesHandStyle(minutesHand, minutesDegree){
            var degree = 'rotate('+minutesDegree+'deg)';
            minutesHand.style.transform = degree;
        }

        //Hours
        function getHourDegree() {
            var d = new Date();
            console.log(d.getHours());
            return (d.getHours()*30)+90; //x 15 for getting base 360 and +90 because initialized with 0deg = 9 hours
        }

        function setHoursHandStyle(hoursHand, hoursDegree){
            var degree = 'rotate('+hoursDegree+'deg)';
            console.log(degree);
            hoursHand.style.transform = degree;
        }
    
    }
)(window, document, undefined);
