var cel = document.getElementById('cel');
var far = document.getElementById('far');

cel.addEventListener('input', function(){

    let c = this.value;
    let f = (c*9/5)+32;

    far.value = f;
});

far.addEventListener('input', function(){

    let f = this.value;
    let c = (f-32)*(5/9);

    if(!Number.isInteger(c))
    {
        c = c.toFixed(2);
    }

    cel.value = c;
})