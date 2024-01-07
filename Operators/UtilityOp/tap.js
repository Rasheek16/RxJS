import { range } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
range(1, 10)
  .pipe(
    filter((data) => data % 2 === 0),
    tap((data) => console.log("Value after filter : ", data)),
    map((data) => data * data)
  )
  .subscribe((data) => console.log(data));
