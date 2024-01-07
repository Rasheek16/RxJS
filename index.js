import { createServer } from "http";
import { Observable } from "rxjs";
import { tap } from "rxjs";

const server = createServer();

server.listen(8080, () => {
  console.log("server listening to http://localhost:8080");
});

const httpObservable = new Observable((observer) => {
  server.on("request", (request, response) => {
    observer.next({ request, response });
  });
});

const logger = ({ request }) => console.log("requesting :", request.url);

httpObservable.pipe(tap(logger)).subscribe(({ request, response }) => {
  response.end("Hello RxJS");
});
