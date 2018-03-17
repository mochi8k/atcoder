// cat input.txt | node welcome-to-atcoder.js

function main(input) {
    const splitedTexts = input.split(/\n/);
    const nums = splitedTexts[1].split(/\s/);
    const num1 = parseInt(splitedTexts[0], 10);
    const num2 = parseInt(nums[0], 10);
    const num3 = parseInt(nums[1], 10);
    const text = splitedTexts[2];

    console.log(`${num1 + num2 + num3} ${text}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
