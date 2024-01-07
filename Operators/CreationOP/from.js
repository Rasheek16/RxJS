import { from } from "rxjs";
import { readFile } from "fs/promises";

from(readFile("./input.txt", "utf-8")).subscribe((data) => {
  console.log("Content :", data);
});
