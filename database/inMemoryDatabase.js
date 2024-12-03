const discountCodes = {
    SUMMER10: 0.1,
    WINTER15: 0.15,
};

const taxRates = {
    USA: {
        CA: { electronics: 0.0825, books: 0.07, default: 0.08 },
        TX: { electronics: 0.08, default: 0.06 },
        default: 0.05,
    },
    Canada: {
        ON: { electronics: 0.13, books: 0.05, default: 0.1 },
        QC: { electronics: 0.12, books: 0.05, default: 0.1 },
        default: { electronics: 0.1, books: 0.05, default: 0.1 },
    },
    default: 0.15,
};

export { discountCodes, taxRates };
