function compoundInterest(amount, years, interest) {
    for (let i = 0; i <= years; i++) {
        amount += amount * interest;
    };
    return amount;
};

console.log(compoundInterest(10000, 2, 1));