import { taxRates, discountCodes } from "../database/inMemoryDatabase.js";

export class CalculateRepository {
    getTaxRates(country) {
        return taxRates[country] || taxRates.default;
    }

    getDiscountByCode(code) {
        const discountRate = discountCodes[code];
        return discountRate !== undefined ? discountRate : null;
    }
}
