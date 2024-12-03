import { TaxFactory } from "../factories/TaxFactory.js";
import { DiscountFactory } from "../factories/DiscountFactory.js";

export const validateCalculateParams = (req, res, next) => {
    const { country, state, category, price, discountCode } = req.query;

    // Validação de parâmetros obrigatórios
    if (!country || !state || !category || !price) {
        return res.status(400).json({
            error: "The 'country', 'state', 'category', and 'price' parameters are required.",
        });
    }

    // Validação do preço
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({
            error: "The 'price' parameter must be a valid number greater than zero.",
        });
    }

    try {
        // Validar regras de imposto usando a fábrica
        const taxRule = TaxFactory.create(country);

        if (!taxRule.isValidState(state)) {
            return res.status(400).json({
                error: `The state '${state}' is not valid for the country '${country}'.`,
            });
        }

        if (!taxRule.isValidCategory(state, category)) {
            return res.status(400).json({
                error: `The category '${category}' is not valid for the state '${state}' in the country '${country}'.`,
            });
        }

        // Validar código de desconto usando a fábrica
        const discountRule = DiscountFactory.create(discountCode);

        if (!discountRule || discountRule.constructor.name === "DefaultDiscountRule") {
            return res.status(400).json({
                error: `The discount code '${discountCode}' is not valid.`,
            });
        }

        // Passar para o próximo middleware ou controller
        next();
    } catch (error) {
        return res.status(500).json({ error: "An unexpected error occurred during validation." });
    }
};
