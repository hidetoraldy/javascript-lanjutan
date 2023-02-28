//TODO 2.1 Execution Content, Hoisting, and Scope

    // console.log(nama);
    // var nama = 'Aldy';

    //? Creation phase atau fase/step pembuatan output dalam konteks Global Context
    //? nama var = undefined
    //? nama function = fn()
    //TODO Hoisting
    //* window = global context
    //* this = window

    //TODO Execution phase atau fase/step eksekusi statement-statement yang sudah dibuat

    // var nama = 'Aldy';
    // var umur = 24;
    
    // console.log(sayHello());
    // function sayHello(){
    //     return `Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`;
    // }

    //? function membuat local Execution Content
    //? yang di dalamnya terdapat Creation dan Execution Phase
    //* window
    //* arguments
    //* hoisting

    // var nama = 'Aldy';
    // var username = '@hidetoraldy';

    // function cetakURL(username){
    //     var twitterURL = 'http://twitter.com/';
    //     return twitterURL + username;
    // }

    // console.log(cetakURL(username));

    // function a(){
    //     console.log(`ini a`);

    //     function b(){
    //         console.log(`ini b`);

    //         function c(){
    //             console.log(`ini c`);
    //         }

    //         c();
    //     }

    //     b();
    // }

    // a();

    function satu(){
        var nama = 'Aldy';
        console.log(nama);
    }

    function dua(){
        console.log(nama);
    }

    console.log(nama);
    var nama = 'Ramadhan';
    satu();
    dua('ini nama');
    console.log(nama);

