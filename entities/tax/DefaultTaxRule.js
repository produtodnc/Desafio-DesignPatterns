import { TaxRule } from "./TaxRule.js";

export class DefaultTaxRule extends TaxRule {
    constructor(defaultRate) {
        super();
        this.defaultRate = defaultRate; // Taxa padrão para países não especificados
    }

    isValidState(state) {
        return true; // Todos os estados são válidos na regra padrão
    }

    isValidCategory(state, category) {
        return true; // Todas as categorias são válidas na regra padrão
    }

    calculate(country, state, category, price) {
        return price * this.defaultRate;
    }
}
