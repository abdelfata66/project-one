// id h2
let auto = document.querySelector("#auto-writing");

let i = 0;
// arrowy function
let autoWriting = () => {
    let title = "Expert SEO, SEM Services in London";
    // اخذ شريحه بمقدار واحد كل 100 ميلي سيكند
    auto.innerHTML = title.slice(0, i)
    i++

    if (i > title.length) {
        // وقفلي الفينكشن
        clearInterval(stopAuto);

        // او ترجعلي ال i بصفر من تاني
        // i = 0;
    }
}
let stopAuto = setInterval(autoWriting, 100);
