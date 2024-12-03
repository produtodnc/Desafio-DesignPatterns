export class TaxRule {
    isValidState(state) {
        throw new Error("Method 'isValidState' must be implemented.");
    }

    isValidCategory(state, category) {
        throw new Error("Method 'isValidCategory' must be implemented.");
    }

    calculate(country, state, category, price) {
        throw new Error("Method 'calculate' must be implemented.");
    }
}
