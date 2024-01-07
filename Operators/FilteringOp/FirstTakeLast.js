import { first, last, range, take } from "rxjs";

range(1, 10)
  .pipe(first())
  .subscribe((data) => console.log(data));
range(1, 10)
  .pipe(take(2))
  .subscribe((data) => console.log(data));
range(1, 10)
  .pipe(last())
  .subscribe((data) => console.log(data));
