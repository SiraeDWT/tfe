// export function navbar(){
//     const menu = document.querySelector('.menu');
//     const home = document.querySelector('#home');

//     const observer = new IntersectionObserver(
//         ([entry]) => {
//         if (!entry.isIntersecting) {
//             menu.classList.remove('opacity-0', 'pointer-events-none');
//             menu.classList.add('opacity-100', 'pointer-events-auto');
//         } else {
//             menu.classList.add('opacity-0', 'pointer-events-none');
//             menu.classList.remove('opacity-100', 'pointer-events-auto');
//         }
//         },
//         { threshold: 0 }
//     );

//     observer.observe(home);
// }
