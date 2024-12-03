export class DefaultDiscountRule {
    constructor() {
        this.discountRate = 0; // Nenhum desconto por padrão
    }

    calculate(price) {
        return price * this.discountRate;
    }
}
