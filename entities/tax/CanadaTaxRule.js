import { TaxRule } from "./TaxRule.js";

export class CanadaTaxRule extends TaxRule {
    constructor(taxRates) {
        super();
        this.taxRates = taxRates; // Taxas específicas do Canadá
    }

    isValidState(state) {
        return Boolean(this.taxRates[state] || this.taxRates.default);
    }

    isValidCategory(state, category) {
        const stateRates = this.taxRates[state] || this.taxRates.default;
        return Boolean(stateRates[category] || stateRates.default);
    }

    calculate(country, state, category, price) {
        const stateRates = this.taxRates[state] || this.taxRates.default;
        const rate = stateRates[category] || stateRates.default;
        return price * rate;
    }
}
