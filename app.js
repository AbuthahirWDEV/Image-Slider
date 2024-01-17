const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');

const images = ["1", "2", "3", "4"];

let index = 0;
// taking all buttons through foreach we dont have to use map reason is map will cretae new array
btns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('clicked');
        // through this if we are checking what btn they are clicking if left do this action
        if (button.classList.contains('btn-left')) {
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
            container.style.background = `url(imageList/${images[index]}.avif) center/cover fixed no-repeat`
        } else if (button.classList.contains('btn-right')) {
            index++;
            if (index >= images.length) {
                index = 0;
            }
            container.style.background = `url(imageList/${images[index]}.avif) center/cover fixed no-repeat`
        }

        container.style.background = `url(imageList/${images[index]}.avif) center/cover fixed no-repeat`
        console.log('left/right');
    });
});
