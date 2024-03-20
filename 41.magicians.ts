// Magicians: make a array of magicians names. pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}



show_magicians(magician)