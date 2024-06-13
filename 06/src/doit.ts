// function getSize(values: number[] | string[] | (number | string)[]): number {
//   return values.length;
// }

function getSize<T>(values: T[] | T): number | string {
  //   if (Array.isArray(values) || typeof values === "string") {
  //     return values.length;
  //   }
  //   return 0;
  return Array.isArray(values) || typeof values === "string"
    ? values.length
    : "Not Array or String";
}

// getSize([1, 2, 3, 4, 5]);
// getSize(["a", "b", "c", "d", "e"]);
// getSize([1, "a", 2, "b", 3, "c"]);

getSize<number>([1, 2, 3, 4, 5]);
getSize<string>(["a", "b", "c", "d", "e"]);
getSize<number | string>([1, "a", 2, "b", 3, "c"]);
getSize<string>("Hello, World!");
