import { USATaxRule } from "../entities/tax/USATaxRule.js";
import { CanadaTaxRule } from "../entities/tax/CanadaTaxRule.js";
import { DefaultTaxRule } from "../entities/tax/DefaultTaxRule.js";
import { CalculateRepository } from "../repositories/CalculateRepository.js";

export class TaxFactory {
    static taxRuleMap = {
        USA: USATaxRule,
        Canada: CanadaTaxRule,
    };

    static create(country) {
        const repository = new CalculateRepository();
        const taxRates = repository.getTaxRates(country);

        const TaxRuleClass = this.taxRuleMap[country] || DefaultTaxRule;
        return new TaxRuleClass(taxRates);
    }
}
