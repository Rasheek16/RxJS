import { Observable, mergeMap } from "rxjs";

const resources = () => {
  return new Observable((observer) => {
    observer.next({
      id: 1,
      name: "xyx",
      user: 2,
    });
  });
};

const userForResources = (resource) => {
  return new Observable((observer) => {
    observer.next({
      ...resource,
      user: {
        id: 2,
        name: "abc",
      },
    });
  });
};

resources()
  .pipe(mergeMap((resource) => userForResources(resource)))
  .subscribe((data) => console.log(data));
