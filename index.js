/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

const body = document.body;
const min = 1;
const max = 6;

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');


body.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * max) + min;
    console.log(randomNum);

    // mapping dice faces
    let diceFaces = [
        { id: 1, el: first },
        { id: 2, el: second },
        { id: 3, el: third },
        { id: 4, el: forth },
        { id: 5, el: fifth },
        { id: 6, el: sixth },
    ];

    // show random number with faces
    diceFaces.map(face => {
        if (randomNum === face.id) {
            face.el.classList.add('show');
            face.el.classList.remove('hide');
        } else {
            face.el.classList.add('hide');
            face.el.classList.remove('show');
        }
    });

});



/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
