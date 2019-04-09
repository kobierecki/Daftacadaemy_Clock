const timeToString = (hours,minutes,seconds) =>{
    let time = '';
    hours<10 ? time += `0${hours}:` : time += `${hours}:`;

    minutes<10 ? time += `0${minutes}:` : time += `${minutes}:`;

    seconds<10 ? time += `0${seconds}` : time += `${seconds}`;
    return time;
};

export default timeToString;