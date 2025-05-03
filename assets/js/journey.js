/* This code is from 
https://www.bilibili.com/video/BV1wb4y1a7uQ?spm_id_from=333.788.recommend_more_video.17&vd_source=aeab68e031b2dbd8d65eb511db7f8973*/

let img = document.querySelector('.img')
// Define the rotation angle of the image
let deg = 0
// Define the image's horizontal position relative to the left of the page
let imgx = 0
// Define the image's vertical position relative to the top of the page
let imgy = 0
// Define the image’s position along the x-axis
let imgl = 0
// Define the image’s position along the y-axis
let imgt = 0
// Define the image's flip angle
let y = 0
// Define a counter
let index = 0

window.addEventListener('mousemove', function (xyz) {
    // Get the horizontal distance between mouse and image
    imgx = xyz.x - img.offsetLeft - img.clientWidth / 2
    // Get the vertical distance between mouse and image
    imgy = xyz.y - img.offsetTop - img.clientHeight / 2
    // Calculate the rotation angle of the image
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI)
    // Reset index when the mouse moves
    index = 0

    // Get the x-coordinate of the mouse
    let x = event.clientX
    // When the image is on the left side of the mouse,
    // it needs to be flipped to face the cursor
    if (img.offsetLeft < x) {
        y = -180  // If image is to the left of the cursor, flip it horizontally
    } else {
        y = 0     // Otherwise, no flip
    }
})

setInterval(() => {
    // Set the image's rotation and flipping
    img.style.transform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)"
    index++

    // Set the image's position and movement speed,
    // and stop moving when it reaches the mouse
    if (index < 50) {
        imgl += imgx / 50
        imgt += imgy / 50
    }

    img.style.left = imgl + "px"
    img.style.top = imgt + "px"
}, 10)
