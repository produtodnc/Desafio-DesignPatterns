class Discount {
    calculate(price, discountCode) {
        const discounts = {
            SUMMER10: 0.1,
            WINTER15: 0.15,
        };
        const rate = discounts[discountCode] || 0;
        return price * rate;
    }
}

module.exports = Discount;
