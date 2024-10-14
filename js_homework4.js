function checkProbabilityTheory(count) {
    let pairedNumbers = 0;
    let notPairedNumbers = 0;

    for (let i = 0; i < count; i++) {
        // Simulate a random number between 100 and 1000
        let randomNumber = 100 + (i * 7) % 901;

        if (randomNumber % 2 === 0) {
            pairedNumbers++;
        } else {
            notPairedNumbers++;
        }
    }

    let totalNumbers = pairedNumbers + notPairedNumbers;

    let percentageOfEven = (pairedNumbers / totalNumbers) * 100;
    let percentageOfOdd = (notPairedNumbers / totalNumbers) * 100;

    console.log(`Amount of the generated numbers: ${totalNumbers}`);
    console.log(`Amount of the paired numbers: ${pairedNumbers}`);
    console.log(`Amount of the not paired numbers: ${notPairedNumbers}`);
    console.log(`Percentage of paired numbers: ${percentageOfEven.toFixed(2)}%`);
    console.log(`Percentage of not paired numbers: ${percentageOfOdd.toFixed(2)}%`);
}

checkProbabilityTheory(100);