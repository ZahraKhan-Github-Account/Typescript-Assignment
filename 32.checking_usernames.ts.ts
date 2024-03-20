// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// Loop through the new_users list to see if each new username has already been used. if it has, print a message that the person will need to enter  new username. if a username has not been used, print a message saying that the username is available.

// Make sure your comparison is case insensitive. if 'John' has been used, 'John' should not be accepted.


let current_users: string[] = ['ZaHra','FAtima','momiNa','Asfia','John'];

let new_users: string[] = ['Warisha','ZaHra', 'Maryam','Zainab','FAtima'];

new_users.forEach(newUsersname =>{
     let lowerCase: string = newUsersname.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsersname} is not available. Please write a different username`);
    }
    else{
        console.log(`The username ${newUsersname}is available.`);
    }
})