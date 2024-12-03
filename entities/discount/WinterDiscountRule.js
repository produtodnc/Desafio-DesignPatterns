export class WinterDiscountRule {
    constructor(discountRate) {
        this.discountRate = discountRate; // Taxa de desconto para o inverno
    }

    calculate(price) {
        return price * this.discountRate;
    }
}
