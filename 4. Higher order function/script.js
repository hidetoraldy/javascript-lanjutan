const angka = [3, 8, -7, 2, -1, 4, 0, -5, 6, 9];

//? mencari angka >= 3

// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         console.log(angka[i]);
//     }
// }
    //* memakai filter
    // const newAngka = angka.filter(function(a){
    //     return a >= 3;
    // });
    // console.log(newAngka);
    //* memakai filter + arrow function
    // const newAngka = angka.filter(a => a >= 3);
    // console.log(newAngka);

    //* map + arrow function
    //? kalikan semua angka dengan 2
    // const newAngka = angka.map(a => a * 2);
    // console.log(newAngka);

    //* reduce + arrow function
    //? jumlahkan seluruh elemen yang ada di dalam array
    //? 3 + 8 + -7 + 2 + -1 + 4 + 0 + -5 + 6 + 9
    // const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(newAngka);
    
    //* Method Chaining
    //? cari angka > 5
    //? kalikan 3
    //? lalu jumlahkan
    const hasil = angka.filter(a => a > 5) //! 8, 6, 9
        .map(a => a * 3) //! 24, 18, 27
        .reduce((acc, cur) => acc + cur); //! 69
    console.log(hasil);