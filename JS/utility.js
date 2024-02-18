function moveSection () {
    const section1 = document.getElementById('header-section');
    const section2 = document.getElementById('paribahan-section');

    section1.parentNode.insertBefore(section2,section1.nextSibling)
}

let count = 0;
let seatLeft = 40;
let pricePerSeat = 550;
const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click",function(event){
        seatLeft = seatLeft - 1 ;
        if (seatLeft < 36){
            alert ("Can't buy more then 4 tickets")
        }
        
        count = count + 1;

        
        const seatName = event.target.parentNode.childNodes[1].innerText;

        const selectedContainer = document.getElementById(
            "selected-place-container"
          );
          const li = document.createElement("li");
          const p = document.createElement("p");
          p.innerText = seatName;
      
          const p2 = document.createElement("p");
          p2.innerText = document.getElementById('fare').innerText;
          const price = p2.innerText;
      
          li.appendChild(p);
        //   li.appendChild(p2);
          selectedContainer.appendChild(li);

        const priceContainer = document.getElementById('selected-price-container');
        priceContainer.appendChild(p2);


       totalPrice("total-cost",price);
       event.target.parentNode.style.color = "#1dd100";


       totalPrice("grand-total", price)



        setInnerText("seats-left",seatLeft)
        setInnerText("seat-count",count);


    })
}

const couponBtn = document.getElementById("apply-btn");
couponBtn.addEventListener("click", function(){
    const convertTotal = getValue("total-cost");
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    if (couponCode === "NEW15") {
        setInnerText("grand-total", convertTotal - convertTotal * 0.15)

    } else if (couponCode === "Couple 20") {
        setInnerText("grand-total",convertTotal - convertTotal * 0.20)
    } else {
        alert("Invalid Coupon")
    }

})




// function grandTotal(category) {
//     console.log(category);
//     const convertTotal = getValue("total-cost");
//     if (category == "bus") {
//       setInnerText("grand-total", convertTotal + 100);
//     } else if (category == "train") {
//       setInnerText("grand-total", convertTotal - 200);
//     } else {
//       setInnerText("grand-total", convertTotal);
//     }
// }

function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}


function totalPrice(id, value) {
    const totalCost = document.getElementById("total-cost").innerText;
    const total = parseInt(totalCost) + parseInt(value);
    document.getElementById("total-cost").innerText = total;
    grandTotal("other");
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
