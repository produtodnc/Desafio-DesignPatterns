export class CalculateService {
    constructor(taxRule, discountRule) {
        this.taxRule = taxRule;
        this.discountRule = discountRule;
    }

    calculate(country, state, category, price, discountCode) {
        if (!this.taxRule.isValidState(state)) {
            throw new Error(`The state '${state}' is not valid for the country '${country}'.`);
        }

        if (!this.taxRule.isValidCategory(state, category)) {
            throw new Error(`The category '${category}' is not valid for the state '${state}'.`);
        }

        const tax = this.taxRule.calculate(state, category, price);
        const discount = this.discountRule.calculate(price);

        const finalPrice = price + tax - discount;

        return {
            country,
            state,
            category,
            price: parseFloat(price.toFixed(2)),
            discountCode: discountCode || null,
            tax: parseFloat(tax.toFixed(2)),
            discount: parseFloat(discount.toFixed(2)),
            finalPrice: parseFloat(finalPrice.toFixed(2)),
        };
    }
}
