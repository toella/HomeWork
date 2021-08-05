

//- Create an array of at least 10 values.

let array = [100, 71, 45, 89, 12, 34, 56, 99, 12, 71, ]

//- Take an input from the user to look for in the array

let prompt = require ( 'prompt-sync' )()
let userinput = prompt( 'Whats your favorite number?'  )
let found = false
let count = 0
let hold = []


//- Find and display the total number of occurrences of the user input value in the array

for(i=0; i<array.length; i++);{
    if(userinput==array[i]){
        found = true
        count++
        hold.push(i+1 )

    }
}
    if (!found) { console.log('number not found') }
    console.log('Total occurrences of' + userinput + ':' + count)
    

//- Also, display the positions in which they occur

//HINT: Create another array for keeping track of positions





















