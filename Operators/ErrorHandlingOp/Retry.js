import { Observable } from "rxjs";
import {  retry } from "rxjs/operators";

new Observable((observer) => {
  console.log("starting");
  observer.next(Math.random());
  observer.next(Math.random());
  observer.next("An error Occured");
  observer.next(Math.random());
})
  .pipe(retry(2))
  .subscribe((data) => console.log(data));
