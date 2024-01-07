import { createServer } from "http";
import { fromEvent } from "rxjs";

const server = createServer();
server.listen(8080, () => {
  console.log("server listening to http://localhost:8080");
});

fromEvent(server, "request").subscribe(([, response]) => {
  response.end("Hello RxJS");
});
