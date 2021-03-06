function hex4(char) {
    switch (char)
    {
    case '0': return 0;
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    case '4': return 4;
    case '5': return 5;
    case '6': return 6;
    case '7': return 7;
    case '8': return 8;
    case '9': return 9;
    case 'A': return 10;
    case 'B': return 11;
    case 'C': return 12;
    case 'D': return 13;
    case 'E': return 14;
    case 'F': return 15;
    }
    throw "invalid hexadecimal digit";
}

function hex8(charMSD, charLSD) {
    return (16 * hex4(charMSD)) + hex4(charLSD);
}

function hex16(charMSD, char2, char3, charLSD) {
    return (256 * hex8(charMSD, char2)) + hex8(char3, charLSD);
}

exports.hex4 = hex4;
exports.hex8 = hex8;
exports.hex16 = hex16;
