import Echo from 'laravel-echo';
const echo: Echo = (window as {Echo: Echo}).Echo;
export default echo;
