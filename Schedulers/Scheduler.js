import {
  asapScheduler,
  asyncScheduler,
  observeOn,
  of,
  queueScheduler,
} from "rxjs";

console.log("start");

of("queryScheduler")
  .pipe(observeOn(queueScheduler))
  .subscribe((data) => console.log(data));
of("asyncScheduler")
  .pipe(observeOn(asyncScheduler))
  .subscribe((data) => console.log(data));
of("asapScheduler")
  .pipe(observeOn(asapScheduler))
  .subscribe((data) => console.log(data));

console.log("end");
