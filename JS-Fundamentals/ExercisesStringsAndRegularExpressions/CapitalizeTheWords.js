function CapitalizeTheWords(input) {
    console.log(input.toLowerCase()
        .split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1))
            .join(' '));

}

CapitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!')
