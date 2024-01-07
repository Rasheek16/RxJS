import { Observable, timeout } from "rxjs";

new Observable((observe) => {
  setTimeout(() => {
    observe.next("First Package");
  }, 500);
  setTimeout(() => {
    observe.next("Second Package");
  }, 500);
})
  .pipe(timeout(1000))
  .subscribe({
    next: (data) => console.log(data),
    error: (error) => console.error("error:", error),
  });
