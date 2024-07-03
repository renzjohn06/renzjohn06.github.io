document.addEventListener('DOMContentLoaded', (event) => {
    const products = [
        { qty: document.getElementById('qty1'), price: parseFloat(document.getElementById('price1').innerText), label: 'HGHMNDS - MIND VISION SHIRT' },
        { qty: document.getElementById('qty2'), price: parseFloat(document.getElementById('price2').innerText), label: 'HGHMNDS - GEMINI GEMS SHIRT' },
        { qty: document.getElementById('qty3'), price: parseFloat(document.getElementById('price3').innerText), label: 'HGHMNDS - SLEEP VISUALS SHIRT' },
        { qty: document.getElementById('qty4'), price: parseFloat(document.getElementById('price4').innerText), label: 'HGHMNDS - VOLUME RISE SHIRT' },
        { qty: document.getElementById('qty5'), price: parseFloat(document.getElementById('price5').innerText), label: 'HGHMNDS - MIND VISION SHIRT' },
        { qty: document.getElementById('qty6'), price: parseFloat(document.getElementById('price6').innerText), label: 'HGHMNDS - STEEL WORKS SHIRT' }
    ];

    const carts = document.getElementById('carts');
    const total = document.getElementById('total');
    const cash = document.getElementById('cash');
    const change = document.getElementById('change');

    function updateOrders() {
        let totalPrice = 0;
        carts.value = '';

        products.forEach(product => {
            const qtyValue = parseInt(product.qty.value) || 0;
            if (qtyValue > 0) {
                const itemTotal = qtyValue * product.price;
                totalPrice += itemTotal;
                carts.value += `${product.label} x ${qtyValue} @ ${product.price} each\n`;
            }
        });

        total.value = totalPrice.toFixed(2);

        const cashValue = parseFloat(cash.value) || 0;
        const changeValue = cashValue - totalPrice;
        change.value = changeValue.toFixed(2);
    }

    products.forEach(product => product.qty.addEventListener('input', updateOrders));
    cash.addEventListener('input', updateOrders);
});
