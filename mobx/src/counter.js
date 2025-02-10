// A class used to store out state

import {makeObservable, observable, action} from "mobx";

// Class to store the state of our counter
export class Counter {
  numberOfClicks = 0;

  // Contructor
  constructor() {
    makeObservable(this, {
      // This tells that the number of clicks should be observable
      numberOfClicks: observable,
      increment: action,
    });
  }

  // Method
  increment = amount => {
    this.numberOfClicks += amount;
  };
}
