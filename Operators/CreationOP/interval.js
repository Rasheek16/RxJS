import { interval } from "rxjs";

interval(1000).subscribe((data)=>{
    console.log(`Iteration ${data} : ${new Date()}`);
})