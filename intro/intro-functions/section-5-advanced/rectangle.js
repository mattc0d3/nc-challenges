/* 
Create a function makeRectangle that will print an m by n rectangle of * to the screen

For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

 * * *
 * * *
 * * *
 * * *
 * * *

Try to complete this task without using for loops!
*/

function makeRectangle(m, n) {
    let row = 0
    let column = 0
    while (column < n) {
        while (row < m) {
            process.stdout.write("* ")
            row++
        }
        process.stdout.write("\n")
        row = 0
        column++
    }
}

// invoke the function below to test it
makeRectangle(3, 5)