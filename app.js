var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";
    var totalAmount = 0;

    if (parseFloat(qty1.value) > 0) {
        var order = `${qty1.value} pc/s x ${price1.textContent} ------ HGHMNDS - MIND VISION SHIRT ------ Php ${(parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2)}\n`;
        carts.textContent += order;
        totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }

    if (parseFloat(qty2.value) > 0) {
        var order = `${qty2.value} pc/s x ${price2.textContent} ------ HGHMNDS - GEMINI GEMS SHIRT ------ Php ${(parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2)}\n`;
        carts.textContent += order;
        totalAmount += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }

    if (parseFloat(qty3.value) > 0) {
        var order = `${qty3.value} pc/s x ${price3.textContent} ------ HGHMNDS - GOOD FAITH SHIRT  ------ Php ${(parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2)}\n`;
        carts.textContent += order;
        totalAmount += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }

    if (parseFloat(qty4.value) > 0) {
        var order = `${qty4.value} pc/s x ${price4.textContent} ------ HGHMNDS - SLEEP VISUALS SHIRT ------ Php ${(parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2)}\n`;
        carts.textContent += order;
        totalAmount += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }

    if (parseFloat(qty5.value) > 0) {
        var order = `${qty5.value} pc/s x ${price5.textContent} ------ HGHMNDS - VOLUME RISE SHIRT ------ Php ${(parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2)}\n`;
        carts.textContent += order;
        totalAmount += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }

    if (parseFloat(qty6.value) > 0) {
        var order = `${qty6.value} pc/s x ${price6.textContent} ------ HGHMNDS - STEEL WORKS SHIRT ------ Php ${(parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2)}\n`;
        carts.textContent += order;
        totalAmount += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }

    total.value = `Total: Php ${totalAmount.toFixed(2)}`;
    updateChange(totalAmount);
}

function updateChange(totalAmount) {
    if (parseFloat(cash.value) > 0) {
        var changeAmount = parseFloat(cash.value) - totalAmount;
        change.value = `Change: Php ${changeAmount.toFixed(2)}`;
    } else {
        change.value = "";
    }
}

qty1.addEventListener("input", addOrder);
qty2.addEventListener("input", addOrder);
qty3.addEventListener("input", addOrder);
qty4.addEventListener("input", addOrder);
qty5.addEventListener("input", addOrder);
qty6.addEventListener("input", addOrder);

cash.addEventListener("input", function () {
    var totalAmount = parseFloat(total.value.split('Php ')[1]);
    updateChange(totalAmount);
});          
