export class StringTest{
    constructor(l = 1, r = 10, allLower = false, allUpper = false,numbers = false, spetialCharacters = "",leadingZero = false){
        this.l = l;
        this.r = r;
        this.allLower = allLower;
        this.allUpper = allUpper;
        this.numbers = numbers;
        this.spetialCharacters = spetialCharacters;
        this.leadingZero = leadingZero;
    }
    getTest() {
        let str = "";
        if(this.allLower){
            str = "abcdefghijklmnopqrstuvwxyz";
        }
        if(this.allUpper){
            str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(this.numbers){
            str += "0123456789";
        }
        if(this.spetialCharacters){
            str += this.spetialCharacters;
        }
        if(this.leadingZero){
            str = "0" + str;
        }
        let len = Math.floor(Math.random() * (this.r - this.l + 1) + this.l);
        let result = "";
        for (let i = 0; i < len; i++) {
            result += str.charAt(Math.floor(Math.random() * str.length));
        }
        if(this.leadingZero==false){
            result = result.replace(/^0+/, '');
        }
        return result;
    }
}