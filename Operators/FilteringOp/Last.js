import { Observable, last, takeUntil } from "rxjs";

const ob = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    if (++count >= 10) {
      clearInterval(interval);
      observer.next(count);
      observer.complete();
    }
    observer.next(count);
  }, 10);
})
  .pipe(last())
  .subscribe((data) => console.log(data));
