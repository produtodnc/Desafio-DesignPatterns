const { USATax, CanadaTax, DefaultTax } = require("../entities/Tax");

class TaxFactory {
    static create(country) {
        switch (country) {
            case "USA":
                return new USATax();
            case "Canada":
                return new CanadaTax();
            default:
                return new DefaultTax();
        }
    }
}

module.exports = TaxFactory;
