function main(input) {
    const args = input.split(/\s/);
    const N = parseInt(args[0], 10),
          A = parseInt(args[1], 10),
          B = parseInt(args[2], 10);

    // const nums = [];
    // for (var i = 1; i <= N; i++) {
    //     var n = i.toString().split('').reduce((p, c) => p + parseInt(c), 0);
    //     if (n >= A && n <= B) nums.push(i);
    // }

    const nums = Array.from(new Array(N), (v, i) => ++i).filter((i) => {
        var n = i.toString().split('').reduce((p, c) => p + parseInt(c), 0);
        return (n >= A && n <= B);
    });
    
    console.log(nums.reduce((p, c) => p + c, 0));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
