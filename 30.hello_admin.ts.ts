// Hello Admin: Make a array of five or more username, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const userNames: string[] = ['admin','bugs bunny','Daffy duck','sylvester','tweety'];

userNames.forEach(userName => {
    if(userName === 'admin'){
        console.log('Hello admin, would you like to see a status report?');

            
    }
    else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
})