function expressionSplit(expression) {
    let element = expression.split(/[\s.();,]+/);
    console.log(element.join("\n"));
}
expressionSplit('let sum = 4* 4,b = "wow";')