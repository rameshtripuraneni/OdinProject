/*
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0
         ? word
         : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));



/*
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

*/

function filterRange(arr, a, b)
{
    const res = arr.filter(item => (a<=item && item <=b));
    return res;

}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));

//Sort in descending order
let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);
console.log(arr1);

/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/
function copySorted(arrString)
{
    return arrString.slice().sort();
}
let arrString = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arrString);

/*
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

*/
function shuffle(array)
{
    return array.sort(() => Math.random() - 0.5);
}
let arrShuffle = [1, 2, 3];
shuffle(arrShuffle);
console.log(arrShuffle);    




