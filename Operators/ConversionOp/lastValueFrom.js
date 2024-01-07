import { Observable, lastValueFrom } from "rxjs";

const observable = new Observable((observer) => {
  observer.next(Math.random());
  observer.next(Math.random());
  observer.next(Math.random());
  observer.complete();
});

lastValueFrom(observable).then((data) => console.log(data));
