const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.links.push('(  )');
    } else {
      this.links.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      position < 1 ||
      position > this.links.length ||
      !Number.isInteger(position)) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;;
  },
  finishChain() {
    const result = this.links.join('~~');
    // Очищаем цепочку для следующих использований
    this.links = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
