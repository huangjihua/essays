/**
 * Created by hank on 2017/2/24.
 */
function* simpleGenerator(){
    yield "first";
    yield "second";
    yield "third";
    for (var i = 0; i < 3; i++)
        yield i;
}

var g = simpleGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* f(){
    yield 50;
}
var d= f();
console.log(d.next());
console.log(d.next());
console.log(d.next());

//
console.log(['1','2','3'].map(parseInt));