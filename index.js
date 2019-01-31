const clickForm = document.getElementById('click-form');
let image = document.getElementById('image');

clickForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const randomNumber = Math.random();
    if (randomNumber <= .5) {
        console.log('brownKitten');
        image.src = "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80";
    } else {
        console.log('grayKitten');
        console.log(randomNumber);
        image.alt = "new stuff for things!!!";
        image.src = "https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg";
    }


});

