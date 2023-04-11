type StrCost = {
  [key: string]: number;
};

export class Solution {
  report = (ranks: number[]): number => {
    if (!this.validateNumbers(ranks)) {
      throw new Error("Rank should be an integer and higher then 0!");
    }
    // ranks.sort(this.sort);
    const sortedRanks: number[] = this.quickSort(ranks, 0, ranks.length - 1);
    console.log(sortedRanks);
    
    let soldiersWhoCanReport = 0;
    let soldiersCount = 0;

    for (let i = 0, j = 1; j < sortedRanks.length; i++, j++) {
      if (sortedRanks[i] === sortedRanks[j]) {
        soldiersCount++;
        continue;
      }
      if (sortedRanks[i] + 1 === sortedRanks[j]) {
        soldiersWhoCanReport += soldiersCount + 1;
      }
      soldiersCount = 0;
    }
    return soldiersWhoCanReport;
  };

  stringCost = (str: string, costsTable: number[]): number => {
    if (str.length !== costsTable.length) {
      throw new Error("String and array are't the same length");
    }

    if (!this.validateString(str)) {
      throw new Error("String sholud contains only letters from [a - z]");
    }

    if (!this.validateNumbers(costsTable)) {
      throw new Error(
        "Costs table must include only integers and must be higher then 0"
      );
    }

    let minCost = 0;
    const strCost: number[] = [];

    for (let i = 0, j = 1; j < str.length; i++, j++) {
      strCost.push(costsTable[i]);
      if (str[i] === str[j]) {
        if (j === str.length - 1) {
          strCost.push(costsTable[j]);
        } else {
          continue;
        }
      }

      if (strCost.length > 1) {
        let indexMax: number = strCost.indexOf(Math.max(...strCost));
        minCost += strCost.reduce((total, value, index) =>
          index !== indexMax ? total + value : total
        );
      }
      strCost.splice(0, strCost.length);
    }

    return minCost;
  };

  private sort = (a: number, b: number) => a - b;

  private quickSort = (
    ranks: number[],
    start: number = 0,
    end: number = ranks.length
  ): number[] => {
    if (start < end) {
      let p = this.partition(ranks, start, end);
      this.quickSort(ranks, start, p - 1);
      this.quickSort(ranks, p + 1, end);
    }
    return ranks;
  };

  private partition = (
    ranks: number[],
    start: number = 0,
    end: number = ranks.length
  ): number => {
    let pivot = ranks[start];
    let swapIndex = start;
    for (let i = start + 1; i < end; i++) {
      if (ranks[i] < pivot) {
        swapIndex++;
        this.swap(ranks, i, swapIndex);
      }
    }
    this.swap(ranks, start, swapIndex);
    return swapIndex;
  };

  private swap = (ranks: number[], i: number, j: number): void => {
    let temp = ranks[i];
    ranks[i] = ranks[j];
    ranks[j] = temp;
  };

  private validateNumbers = (numbers: number[]): boolean => {
    for (const number of numbers) {
      if (!Number.isInteger(number) || number < 0) {
        return false;
      }
    }
    return true;
  };

  private validateString = (str: string): boolean => {
    const regex = /[a-z]/g;
    const validatedStr = str.match(regex);
    if (str.length !== validatedStr?.length) {
      return false;
    }

    return true;
  };
}
