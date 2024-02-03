import './bootstrap';

window.Echo.private(`test`)
    .listen('.test', (e) => {
        console.log(e);
    });
