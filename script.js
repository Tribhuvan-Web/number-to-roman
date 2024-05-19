function romanize(num) {
    if (isNaN(num)) {
        alert("Enter a valid number");
        return;
    } else {
        var digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }
}
function romanNumberConverter() {
   const roman =  document.querySelector("#numberValue").value ;
    const finalValue = romanize(roman);
    if (finalValue===undefined) {
        return;
    }
    document.querySelector("#numberValue").value = finalValue;
}