var length = 10;
var obj = {
    method : function (fn) {
        fn();
        arguments[0]();
    },
};
function fn() {
    console.log(this.length);
};
obj.method(fn,1,4,89);