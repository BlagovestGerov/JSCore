function rounding([rounded, precision]) {

        precision = Number(precision);

    if (precision > 15){
        precision = 15;
    }

    rounded = Number(rounded).toFixed(precision);
    console.log(Number(rounded))
}

rounding(['3.1415926534254532', '2'])
