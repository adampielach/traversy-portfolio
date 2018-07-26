const printPara = document.getElementById('print-header');

function capitalizeLetters(str) {
    let chars = str.toLowerCase().split(' ');
    for (let i = 0; i < chars.length; i++) {
        chars[i] = chars[i].substring(0, 1).toUpperCase() + chars[i].substring(1);
    }
    return chars.join(' ');

}

printPara.innerHTML = capitalizeLetters("SomE RanDOm StrING");