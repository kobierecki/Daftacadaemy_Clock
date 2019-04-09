import getTime from './getTime';

function* hoursGenerator(i){
    while (1){
        i = i % 12;
        yield i;
        i++;}
}

export const hoursIterator = hoursGenerator(getTime.hours);

function* minutesGenerator(i){
    while (1){
        i = i % 60;
        yield i;
        i++;}
}

export const minutesIterator = minutesGenerator(getTime.minutes);

function* secondsGenerator(i){
    while (1){
        i = i % 60;
        yield i;
        i++;}
}

export const secondsIterator = secondsGenerator(getTime.seconds);