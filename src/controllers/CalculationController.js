const CalculationService = require("../services/CalculationService");

class CalculationController {
    static calculate(req, res) {
        const { country, state, category, price, discountCode } = req.query;

        if (!country || !state || !category || isNaN(parseFloat(price))) {
            return res.status(400).send("Parâmetros ausentes ou inválidos.");
        }

        const service = new CalculationService();
        const report = service.calculate({
            country,
            state,
            category,
            price: parseFloat(price),
            discountCode,
        });

        return res.json(report);
    }
}

module.exports = CalculationController;
