function moveSection () {
    const section1 = document.getElementById('header-section');
    const section2 = document.getElementById('paribahan-section');

    section1.parentNode.insertBefore(section2,section1.nextSibling)
}

let count = 0;
const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click",function(e){
        count = count + 1;
        document.getElementById("seat-count").innerText = count;

    })
}