var freyasAett = ["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚷ","ᚹ"];
var heimdallsAett = ["ᚺ","ᚾ","ᛁ","ᛃ","ᛇ","ᛈ","ᛉ","ᛊ"];
var tyrsAett = ["ᛏ","ᛒ","ᛖ","ᛗ","ᛚ","ᛜ","ᛞ","ᛟ"];
var elderFuthark = freyasAett + "," + heimdallsAett + "," + tyrsAett;
//Above are the Aettirs of the Elder Futhark. Divided by Three, Thrice Great be their power!
console.log(elderFuthark);
//Below are the staves, converted into numerical values to calculate Rune Tallies. The sum of all Runes is 300.
var ᚠ = 1,ᚢ = 2,ᚦ = 3,ᚨ = 4,ᚱ = 5,ᚲ = 6,ᚷ = 7,ᚹ = 8,
ᚺ = 9,ᚾ = 10,ᛁ = 11,ᛃ = 12,ᛇ = 13,ᛈ = 14,ᛉ = 15,ᛊ = 16,
ᛏ = 17,ᛒ = 18,ᛖ = 19,ᛗ = 20,ᛚ = 21,ᛜ = 22,ᛞ = 23,ᛟ = 24;
var sumOfElderFuthark = (ᚠ+ᚢ+ᚦ+ᚨ+ᚱ+ᚲ+ᚷ+ᚹ+ᚺ+ᚾ+ᛁ+ᛃ+ᛇ+ᛈ+ᛉ+ᛊ+ᛏ+ᛒ+ᛖ+ᛗ+ᛚ+ᛜ+ᛞ+ᛟ)
console.log(sumOfElderFuthark);

console.log(ᚠ+ᚢ+ᚷ+ᚠ+ᚢ+ᚱ+ᚠ+ᚢ+ᚲ);

const cap = (n, min, max) => Math.max(min, Math.min(n, max));
const getNumValue = char => cap(char.charCodeAt(0) - 96, 1, 26);

function myFunction() {
  const str = document.getElementById("txt").value;
  const total = str.split('').map(getNumValue).reduce((a, b) => a + b, 0)
  const n = str.split('').map(v => `${v}(${getNumValue(v)})`).join(' + ');

  document.getElementById("res").innerHTML = total; 
  document.getElementById("a").innerHTML = n;
}



  