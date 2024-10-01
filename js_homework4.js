//Перевірка теорії ймовірності.
//Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
//Порахувати кількість парних та непарних серед них.
//Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
//Приклад функції checkProbabilityTheory(count).
//Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

//random numbers between 100 and 1000
//percentage 50/50
//{{functionname}}(count){}
//so first we should generate a number, number equals count inputted parameter
//we should take into account our range
//then we should pay attention to the /2 and !/2 numbers
//then we should check isn't it 50/50?

function checkProbabilityTheory(count){
    let pairedNumbers = 0
    let notPairedNumbers = 0

    

    let totalNumbers = pairedNumbers * notPairedNumbers

    console.logt(`Amount of the generated numbers: ${totalNumbers}`)
    console.log(`Amount of the paired numbers: ${pairedNumbers}`)
    console.log(`Amount of the not paired numbers: ${notPairedNumbers}`)
    console.log(`Ratio of paired to unpaired numbers: ${percentageOfNumbers}`)
}

checkProbabilityTheory(100)