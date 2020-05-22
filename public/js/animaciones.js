
let sencillas = new ScrollReveal();

sencillas.reveal('.bot', {
    origin: 'top',
    delay: 100,
    interval: 16,
    distance: '200px',
    mobile: false,
    reset: true
});

sencillas.reveal('.right',{
    origin: 'left',
    delay: 100,
    interval: 16,
    distance: '200px',
    mobile: false,
    reset: true
})
sencillas.reveal('.left',{
    origin: 'right',
    delay: 100,
    interval: 16,
    distance: '200px',
    mobile: false,
    reset: true
})

sencillas.reveal('.rotate', {
    origin: 'right',
    delay: 200,
    interval: 20,
    distance: '300px',
    mobile: false,
    reset: true,
    rotate:{
        x:0,
        y:0,
        z:180
    }
})