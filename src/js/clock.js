import getTime from './getTime';
import elements from './elements';
import timeToString from './timeDisplay';
import * as generators from './generators';

const clock = () =>{

    let second = getTime.seconds;
    let minute = getTime.minutes;
    let hour = getTime.hours;

    generators.secondsIterator.next().value;
    generators.minutesIterator.next().value;
    generators.hoursIterator.next().value;

    const clockCicle = () =>{

        elements.timeElement.innerText = timeToString(hour,minute,second);

        if(second === 59){
            if(minute === 59){
                hour = generators.hoursIterator.next().value;
            }
            minute = generators.minutesIterator.next().value;
        }
        second = generators.secondsIterator.next().value;
    };
    return setInterval(clockCicle,1000);
};

export default clock;

