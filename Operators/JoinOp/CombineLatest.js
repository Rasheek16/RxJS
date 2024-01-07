import {  timer } from "rxjs";
import {  map, combineLatestWith } from "rxjs/operators";
const randomInt = () => Math.floor(Math.random() * 100);

const timer1 = timer(0, 500).pipe(map(() => randomInt()));
const timer2 = timer(0, 1000).pipe(map(() => randomInt()));
const timer3 = timer(0, 1500).pipe(map(() => randomInt()));

timer1.pipe(combineLatestWith([timer2, timer3])).subscribe(([t1, t2, t3]) => {
  console.log(
    `${new Date()}
        Timer 1 : ${t1}
        Timer 2 : ${t2}
        Timer 3 : ${t3}
        `
  );
});
