import { buffer, interval, map } from "rxjs";

interval(100)
  .pipe(
    map(() => Math.floor(Math.random() * 100)),
    buffer(interval(1000))
  )
  .subscribe((data) => console.log(data));
