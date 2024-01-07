import { Observable, catchError, map } from "rxjs";

Observable.create((observer) => {
  observer.next("test 1");
  observer.next("test 2");
  observer.next("error");
  observer.next("test 3");
  observer.complete();
})
  .pipe(
    map((data) => {
      const mappedData = data.toUpperCase();
      return mappedData;
    }),
    catchError((e, caught) => {
      console.log("The error was :", e);
      return of("test3", "test4");
    })
  )
  .subscribe((data) => console.log(data));
