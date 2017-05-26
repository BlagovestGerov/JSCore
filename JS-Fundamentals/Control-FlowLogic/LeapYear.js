function solve(input) {

	input = Number(input);

	if ((input%4 != 0 || input%100==0) && input != 2000) {
		console.log("no");
	}
	else console.log("yes");

}

solve(1999);