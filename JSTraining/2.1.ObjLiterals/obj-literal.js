var propA = "globalA";

var obj = {
    propA: 1,
    propB: "abc",
    compoundProp: this.propA + this.propB,
    method: function(){
        return this.propA;
    },
    get propComp(){
        return this.propA+this.propB;
    },
    set propComp(value){
        this.propA = value;
    }

};
console.log("obj.propA", obj.propA);
console.log("obj.propB", obj.propB);
console.log("obj.compundProp", obj.compundProp);
console.log("method", obj.method());
console.log("propC", obj.propC);