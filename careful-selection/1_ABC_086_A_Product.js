function main(input) {
    const splitedTexts = input.split(/\s/);
    const a = parseInt(splitedTexts[0], 10);
    const b = parseInt(splitedTexts[1], 10);

    if ((a * b) % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
