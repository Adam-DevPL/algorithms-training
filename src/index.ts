import { Solution } from "./Solution";

const solution = new Solution();
console.log(
  "Soldiers who can report: " + solution.report([3, 4, 3, 0, 2, 2, 3, 0, 0])
);
console.log("Soldiers who can report: " + solution.report([4, 2, 0]));
console.log("Soldiers who can report: " + solution.report([4, 4, 3, 3, 1, 0]));

console.log(
  `Minimal cost for 'abccbd' and costs table [0, 1, 2, 3, 4, 5] is: ${solution.stringCost(
    "abccbd",
    [0, 1, 2, 3, 4, 5]
  )}`
);

console.log(
  `Minimal cost for 'aabbcc' and costs table [1, 2, 1, 2, 1, 2] is: ${solution.stringCost(
    "aabbcc",
    [1, 2, 1, 2, 1, 2]
  )}`
);

console.log(
  `Minimal cost for 'aaaa' and costs table [3, 4, 5, 6] is: ${solution.stringCost(
    "aaaa",
    [3, 4, 5, 6]
  )}`
);

console.log(
  `Minimal cost for 'ababa' and costs table [10, 5, 10, 5, 10] is: ${solution.stringCost(
    "ababa",
    [10, 5, 10, 5, 10]
  )}`
);
