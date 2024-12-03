import {TaxFactory} from "../factories/TaxFactory.js";
import {DiscountFactory} from "../factories/DiscountFactory.js";
import {CalculateService} from "../services/calculateService.js";

export const calculateHandler = (req, res) => {
    try {
        // Parâmetros validados pelo middleware
        const {country, state, category, price, discountCode} = req.query;

        // Criar instâncias das fábricas
        const taxRule = TaxFactory.create(country);
        const discountRule = DiscountFactory.create(discountCode);

        // Criar o serviço de cálculo
        const calculateService = new CalculateService(taxRule, discountRule);

        // Realizar o cálculo
        const result = calculateService.calculate(
            country, state, category, parseFloat(price), discountCode
        );

        // Retornar a resposta com sucesso
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message || "An unexpected error occurred."});
    }
};
