// Node.js Wrapper Function
function wrapNodeFunction(nodeFunction) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            nodeFunction(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}
module.exports = wrapNodeFunction;

// Example usage with a Node.js style callback function
// const fs = require('fs');
// const readFileAsync = wrapNodeFunction(fs.readFile);

// readFileAsync('path/to/file.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
