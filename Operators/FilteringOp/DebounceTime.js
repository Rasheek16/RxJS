import { createServer } from "http";
import { debounceTime, fromEvent } from "rxjs";

const server = createServer().listen(8080);

fromEvent(server, "request")
  .pipe(debounceTime(5000))
  .subscribe(([, response]) => {
    response.end("Hello rxjs");
  });
