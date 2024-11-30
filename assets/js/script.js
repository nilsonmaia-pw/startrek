let navBar = document.querySelector('#header')

document.addEventListener("scroll",()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }

})


// var tl = gsap.timeline();

// tl.from(".home-container",{
//     x: -250,
//     opacity: 0,
//     duration: 1
// })

// tl.from(".logo",{
//     y: -50,
//     stagger: .3,
//     opacity: 0,
//     duration: 1
// })

// tl.from(".navbar",{
//     y: -50,
//     stagger: .3,
//     opacity: 0,
//     duration: 1
// })























/*
tl.from(".home-container img",{
    x: 250,
    opacity: 0,
    duration: 1
})
*/

/*
tl.from("header",{
    x: -250,
    opacity: 0,
    duration: 1
})

tl.from("section-filmes",{
    x: -250,
    opacity: 0,
    duration: 1
})

tl.from("main img",{
    x: 250,
    opacity: 0,
    duration: 1.3
})

tl.from("nav navbar",{
    y: -50,
    stagger: .3,
    opacity: 0,
    duration: 1
})

*/