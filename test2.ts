class test2{
    private a:number;
    private arr:any[];
    private 呃呃:Function;

    constructor(){
        this.arr = [];
        for (let i = 0; i < 10; i++) {
            this.arr.push(i)
        }
    }

    nae() {
        this.呃呃 = function(){
            console.log(this);
        }    
    }

    www(){
        this.呃呃();
    }
}
