function outer(x,y){
    function inner(n){
        //var m =20;
        m=20; // if we remove var then it works
        x=n+x+20;
        y=n+y+20;
        console.log(x);
        console.log(y);

    }
    inner(10)
    console.log(x);
    console.log(y);
    console.log(m);
}
outer(5,10)