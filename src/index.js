class Sorter {
  constructor() {
    this.arrayNumbers = [];
    this.sortFunction = function(a, b){return a - b};
  }

  add(element) {
    this.arrayNumbers.push(element);
  }

  at(index) {
    return this.arrayNumbers[index];
  }

  get length() {
    return this.arrayNumbers.length;
  }

  toArray() {
    return this.arrayNumbers;
  }

  sort(indices) {
    
    indices.sort(function(a, b){ return a - b});
    var arr = [];

    for (let i = 0; i < indices.length; i++) {
        arr.push(this.arrayNumbers[indices[i]]);
    };
    arr.sort(this.sortFunction);

    for (let i = 0; i < indices.length; i++) {
        this.arrayNumbers[indices[i]] = arr[i];
    };

  }

  setComparator(compareFunction) {
     this.sortFunction = compareFunction;

  }
}

module.exports = Sorter;