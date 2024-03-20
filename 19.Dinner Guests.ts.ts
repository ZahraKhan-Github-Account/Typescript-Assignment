let Guest_List :string[] = ['Mirha','Sidra','Shagufta'];
// for(let i=0; i<Guest_List.length; i++){
    // console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest :string = 'Mirha' ;
let new_Guest :string = 'Zahra';
Guest_List[0] = new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// array me 3 guest add kiye hain.
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Benazir');
Guest_List.push('Bilawal Bhutto Zardari');

// Yahan per mene 6 guest ke array ko print kraya he.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

// Sorry Message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// Yahan Per mene Guest remove kiye hain.
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
//    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// Hamare bache howe 2 Invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Ms. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }

// mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);


// Exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(` Total number of Guest Are: ${Guest_List.length}`);
