class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;
  }

  guess() {
		let sum = this.maxValue + this.minValue;
    this.averageValue = Math.ceil( sum / 2);
    return this.averageValue;
  }

  lower() {;
		this.maxValue = this.averageValue;
  }

  greater() {
    this.minValue = this.averageValue;
  }
}

module.exports = GuessingGame;
