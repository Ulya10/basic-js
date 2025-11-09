const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    } else {
        let ans1 = [...arr];
        let ans = [];

        for (let i = 0; i < arr.length; i++) {
            if (ans1[i] == '--discard-prev') {
              if (ans1[i-1]) {
                ans1[i - 1] = "tralala";
              }
                
            }

            if (ans1[i] == '--discard-next') {
               if (ans1[i+1]) {
                ans1[i + 1] = "tralala";
              }
            }
                    if (ans1[i] == '--double-prev') {
                if (ans1[i-1] && ans1[i - 1] !== "tralala") {
                    ans1[i] = ans1[i - 1];
                };
            }
            if (ans1[i] == '--double-next') {
                if (ans1[i+1] && ans1[i + 1] !== "tralala") {
                    ans1[i] = ans1[i + 1];
                };
            }
          }

        for (let i = 0; i < arr.length; i++) {
            if (ans1[i] !== '--double-next' && ans1[i] !== '--double-prev' && ans1[i] !== '--discard-next' && ans1[i] !== '--discard-prev' && ans1[i] !== 'tralala') {
                ans.push(ans1[i]);
            }
        }
        return ans;
    } 
}

module.exports = {
  transform
};
