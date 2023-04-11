import { Solution } from "../Solution";

describe("Solution class methods testing", () => {
  describe("method report(ranks: number[])", () => {
    it("should return number of soldiers who can report to upper rank soldier", () => {
      //given
      const ranksArray = [3, 4, 3, 0, 2, 2, 3, 0, 0];
      const soldiersToReport = 5;
      const solution: Solution = new Solution();

      //when
      const result = solution.report(ranksArray);

      //then
      expect(result).toEqual(soldiersToReport);
    });

    it("should return 0 as there is no soldiers to report upper", () => {
      //given
      const ranksArray = [4, 2, 0];
      const soldiersToReport = 0;
      const solution: Solution = new Solution();

      //when
      const result = solution.report(ranksArray);

      //then
      expect(result).toEqual(soldiersToReport);
    });

    it("should return 0 when there is no soldiers at all", () => {
      //given
      const ranksArray: number[] = [];
      const soldiersToReport = 0;
      const solution: Solution = new Solution();

      //when
      const result = solution.report(ranksArray);

      //then
      expect(result).toEqual(soldiersToReport);
    });

    it("should throw an error when one of the rank is not an integer", () => {
      //given
      const ranksArray: number[] = [1.22, 234, 1.2];
      const solution: Solution = new Solution();

      //then
      expect(() => {
        solution.report(ranksArray);
      }).toThrowError("Rank should be an integer and higher then 0!");
    });

    it("should throw an error when one of the rank is below 0", () => {
      //given
      const ranksArray: number[] = [-2, 234, 1.2];
      const solution: Solution = new Solution();

      //then
      expect(() => {
        solution.report(ranksArray);
      }).toThrowError("Rank should be an integer and higher then 0!");
    });
  });
  describe("method stringCost", () => {
    it("should return the cost of string removal of character duplication next to each other", () => {
      //given
      const solution: Solution = new Solution();
      const givenString = "abccbd";
      const givenCostsTable = [0, 1, 2, 3, 4, 5];
      const expectedResult = 2;

      //when
      const result = solution.stringCost(givenString, givenCostsTable);

      //then
      expect(result).toEqual(expectedResult);
    });

    it("should throw an error when length of string an cost table isn't the same", () => {
      //given
      const solution: Solution = new Solution();
      const givenString = "abccbd";
      const givenCostsTable = [0, 1, 2, 3, 4];

      //then
      expect(() => {
        solution.stringCost(givenString, givenCostsTable);
      }).toThrowError("String and array are't the same length");
    });

    it("should throw an error when costs table includes not integers numbers", () => {
      //given
      const solution: Solution = new Solution();
      const givenString = "abccbd";
      const givenCostsTable = [0, 1.2, 3.4, 3, 4, 6];

      //then
      expect(() => {
        solution.stringCost(givenString, givenCostsTable);
      }).toThrowError(
        "Costs table must include only integers and must be higher then 0"
      );
    });

    it("should throw an error when costs table includes numbers below 0", () => {
      //given
      const solution: Solution = new Solution();
      const givenString = "abccbd";
      const givenCostsTable = [0, -3, 3, 3, 4, 6];

      //then
      expect(() => {
        solution.stringCost(givenString, givenCostsTable);
      }).toThrowError(
        "Costs table must include only integers and must be higher then 0"
      );
    });

    it("should throw an error when costs table includes numbers below 0", () => {
      //given
      const solution: Solution = new Solution();
      const givenString = "a*ccbd";
      const givenCostsTable = [0, -3, 3, 3, 4, 6];

      //then
      expect(() => {
        solution.stringCost(givenString, givenCostsTable);
      }).toThrowError("String sholud contains only letters from [a - z]");
    });
  });
});
