module.exports = function toReadable (number) {
    let small = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let midl = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    let numberSplit = String(number).split("");
    let namner=(number+"").slice(1);
    if (number < 20) {
        return small[number];
    }
    if(number >= 20 && number <100){
        if( number%10 === 0){
            return midl[number/10];
        }
        else{
            return midl[numberSplit[0]]+" "+small[numberSplit[1]];
        }
    }
    if(number >= 100 && number <1000){
        if( number%100 === 0){
            return hundred[number/100];
        }
        else if(numberSplit[1]==="1"){
            return  hundred[numberSplit[0]]+" "+small[namner];
        }
        else if(numberSplit[1]==="0"){
            return  hundred[numberSplit[0]]+" "+small[numberSplit[2]];
        }
        else if(number % 10 === 0){
            return  hundred[numberSplit[0]]+" "+ midl[numberSplit[1]];
        }
        else {
            return  hundred[numberSplit[0]]+" "+ midl[numberSplit[1]]+" "+small[numberSplit[2]];
        }
    }
};