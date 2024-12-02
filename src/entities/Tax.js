class Tax {
    calculate(price, state, category) {
        throw new Error("Método calculate() deve ser implementado.");
    }
}

class USATax extends Tax {
    calculate(price, state, category) {
        const rates = {
            CA: { electronics: 0.0825, books: 0.07, default: 0.08 },
            TX: { electronics: 0.08, default: 0.06 },
            default: 0.05,
        };
        const rate = rates[state]?.[category] || rates[state]?.default || rates.default;
        return price * rate;
    }
}

class CanadaTax extends Tax {
    calculate(price, category) {
        const rate = category === 'electronics' ? 0.12 : 0.1;
        return price * rate;
    }
}

class DefaultTax extends Tax {
    calculate(price) {
        return price * 0.15;
    }
}

module.exports = { USATax, CanadaTax, DefaultTax };
