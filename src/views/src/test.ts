export class A {
    private a: string = "";
    set aval(val: string) {
        this.a = val;
    }
    get aval() {
        return this.a;
    }
}

const a = new A();

a.aval = "23"
console.log(a.aval);

