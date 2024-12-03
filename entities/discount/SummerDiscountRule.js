export class SummerDiscountRule {
    constructor(discountRate) {
        this.discountRate = discountRate; // Taxa de desconto para o verão
    }

    calculate(price) {
        return price * this.discountRate;
    }
}
