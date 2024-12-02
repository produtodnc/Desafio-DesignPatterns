const TaxFactory = require("../factories/TaxFactory");
const Discount = require("../entities/Discount");

class CalculationService {
    calculate({ country, state, category, price, discountCode }) {
        const taxCalculator = TaxFactory.create(country);
        const discountCalculator = new Discount();

        const tax = taxCalculator.calculate(price, state, category);
        const discount = discountCalculator.calculate(price, discountCode);
        const finalPrice = price + tax - discount;

        return {
            country,
            state,
            category,
            price,
            discountCode,
            tax: parseFloat(tax.toFixed(2)),
            discount: parseFloat(discount.toFixed(2)),
            finalPrice: parseFloat(finalPrice.toFixed(2)),
        };
    }
}

module.exports = CalculationService;
