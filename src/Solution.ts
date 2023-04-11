type StrCost = {
  [key: string]: number;
};

export class Solution {
  report = (ranks: number[]): number => {
    if (!this.validateNumbers(ranks)) {
      throw new Error("Rank should be an integer and higher then 0!");
    }
    ranks.sort(this.sort);
    let soldiersWhoCanReport = 0;
    let soldiersCount = 0;

    for (let i = 0, j = 1; j < ranks.length; i++, j++) {
      if (ranks[i] === ranks[j]) {
        soldiersCount++;
        continue;
      }
      if (ranks[i] + 1 === ranks[j]) {
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
