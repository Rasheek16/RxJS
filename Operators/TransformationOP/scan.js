import { range } from "rxjs";
import { scan } from "rxjs/operators";

range(1, 10).pipe(scan((acc, value) => acc + value)).subscribe((value)=>console.log(value));
