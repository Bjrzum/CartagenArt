
const barra = [...document.querySelectorAll('.barra')];
const flechas = [...document.querySelectorAll('.fech')]


barra[0].addEventListener('click', () => next())
barra[1].addEventListener('click', () => before())
flechas[0].addEventListener('click', () => refi())
flechas[1].addEventListener('click', () => nrefi(1))

flechas[0].style.display = "none"

function next() {
    const flechas = [...document.querySelectorAll('.fech')]
    const barras = [...document.querySelectorAll('.barra')];
    const persons = [...document.querySelectorAll('.person')];
    if (persons[1].classList.contains('person1')) {
        persons[1].classList.remove('person1');
        persons[0].classList.add('person1');

        flechas[0].style.display = 'none'
        flechas[1].style.display = 'unset'
        if (barras[0].classList.contains('b--active')) {
            barras[0].classList.remove('b--active');
            barras[1].classList.add('b--active')
        }
    }
    else {
        persons[0].classList.add('person1');
    }
}
function before() {
    const flechas = [...document.querySelectorAll('.fech')]
    const barras = [...document.querySelectorAll('.barra')];
    const persons = [...document.querySelectorAll('.person')];
    if (persons[0].classList.contains('person1')) {
        persons[0].classList.remove('person1');
        persons[1].classList.add('person1');
        flechas[1].style.display = 'none'
        flechas[0].style.display = 'unset'
        if (barras[1].classList.contains('b--active')) {
            barras[1].classList.remove('b--active');
            barras[0].classList.add('b--active')
        }

    }
    else {
        persons[1].classList.add('person1');
    }
}


function refi() {
    const flechas = [...document.querySelectorAll('.fech')]
    const barras = [...document.querySelectorAll('.barra')];
    const persons = [...document.querySelectorAll('.person')];
    if (persons[1].classList.contains('person1')) {
        persons[1].classList.remove('person1');
        persons[0].classList.add('person1');
        flechas[0].style.display = 'none'
        flechas[1].style.display = 'unset'

        if (barras[0].classList.contains('b--active')) {
            barras[0].classList.remove('b--active');
            barras[1].classList.add('b--active')
        }
    }
    else {
        persons[0].classList.add('person1');
    }
}
function nrefi() {
    const flechas = [...document.querySelectorAll('.fech')]
    const barras = [...document.querySelectorAll('.barra')];
    const persons = [...document.querySelectorAll('.person')];
    if (persons[0].classList.contains('person1')) {
        persons[0].classList.remove('person1');
        persons[1].classList.add('person1');
        flechas[1].style.display = 'none'
        flechas[0].style.display = 'unset'
        if (barras[1].classList.contains('b--active')) {
            barras[1].classList.remove('b--active');
            barras[0].classList.add('b--active')
        }

    }
    else {
        persons[1].classList.add('person1');
    }
}



