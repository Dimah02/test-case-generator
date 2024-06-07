
export class IntegerTest{
    constructor(l = 1, r = 100){
        this.l = l;
        this.r = r;
    }
    getInt() {
        return Math.floor(Math.random() * (this.r - this.l + 1) + this.l);
    }
}