const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const used = new Set();
  const res = [];

  for (let i = 0; i < names.length; i++){
    const name = names[i];
    if (!used.has(name)){
      res.push(name);
      used.add(name);
    } else {
      let k = 1;
      let newName;
      do {
        newName = `${name}(${k})`;
        k++;
      } while (used.has(newName));

      res.push(newName);
      used.add(newName);
    }
  }

  return res;
}

module.exports = {
  renameFiles
};
