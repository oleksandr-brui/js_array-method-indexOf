'use strict';

numbers.indexOf = function(searchElement, fromIndex = 0) {
  // write code here
  const { length: arrLength } = this;

  if (Math.abs(fromIndex) >= arrLength) {
    return -1;
  }

  if (isNaN(fromIndex)) {
    for (let i = 0; i < arrLength; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
  }

  if (fromIndex >= 0) {
    for (let i = fromIndex; i < arrLength; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
  }

  if (fromIndex < 0) {
    const startIndex = arrLength + fromIndex;

    for (let i = startIndex; i < arrLength; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
  }

  return -1;
};