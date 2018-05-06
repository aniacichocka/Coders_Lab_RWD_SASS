window.addEventListener("resize", function() {
    if (window.innerWidth < 320) {
        console.log('resize: tutaj ekran jest mniejszy niż 320px');

    } else {
        console.log('resize: tutaj ekran jest wiekszy lub równy 320px');
    }
});

//wywołuje się za każdym razem gdy zmieniamy wielkość ekranu

var mobile = window.matchMedia("screen and (max-width: 320px)");
    if (mobile.matches) {
        console.log('matchMedia: tutaj ekran jest mniejszy lub równy 320px');
    /* tutaj ekran jest mniejszy lub równy 320px */
    } else {
        console.log('matchMedia: tutaj ekran jest większy niż 320px');
    /* tutaj ekran jest większy niż 320px */
}
//wywołuje sie tylko na początku

// var mobile = window.matchMedia("screen and (max-width: 320px)")
mobile.addListener( function(m) {
    if (m.matches) {
        console.log('eventMatchMedia:tutaj ekran jest mniejszy lub równy 320px ');
    /* tutaj ekran jest mniejszy lub równy 320px*/
    } else {
        console.log('eventMatchMedia: tutaj ekran jest większy niż 320px');
    /* tutaj ekran jest większy niż 320px*/
    }

// matchMedia jest bardziej optymalnym rozwiązaniem niż resize, jednakże aby
// rozwiązanie było skuteczne trzeba sprawdzić matchMedia na start aplikacji
// oraz dodać listener.
});
