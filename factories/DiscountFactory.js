import { SummerDiscountRule } from "../entities/discount/SummerDiscountRule.js";
import { WinterDiscountRule } from "../entities/discount/WinterDiscountRule.js";
import { DefaultDiscountRule } from "../entities/discount/DefaultDiscountRule.js"
import { CalculateRepository } from "../repositories/CalculateRepository.js";

export class DiscountFactory {
    static discountRuleMap = {
        SUMMER10: SummerDiscountRule,
        WINTER15: WinterDiscountRule,
    };

    static create(discountCode) {
        const repository = new CalculateRepository();
        const discount = repository.getDiscountByCode(discountCode);

        const DiscountRuleClass = this.discountRuleMap[discountCode] || DefaultDiscountRule;
        return new DiscountRuleClass(discount?.discount || 0);
    }
}
