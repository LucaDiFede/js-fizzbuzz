let myelement = '';
let ul = document.getElementById('myul')

for (let i = 1 ; i <= 100; i++) {
    if (i % 3 == 0) {

        myelement = ('fizz');

    }
    else if ( i % 5 == 0 ) {
        
        myelement = ('buzz');

    }
    else if ( i % 15 == 0 ) {
        myelement = ('fizzbuzz');
    }
    else myelement = i
    console.log(myelement);
}