import { Arr_markHigherBMI, BMI } from './Challenge1.js'
Arr_markHigherBMI.forEach((v, i) => {
    console.log(`Data ${i + 1}`)
    if (v) {
        console.log("Chỉ số BMI của Mark cao hơn John!")
    }
    else
        console.log("Chỉ số BMI của John cao hơn Mark!")
})

Arr_markHigherBMI.forEach((v, i) => {
    console.log(`Data ${i + 1}`)


    var markBMI = BMI[i].Mark.BMI.toFixed(2);
    var johnBMI = BMI[i].John.BMI.toFixed(2);
    markBMI > johnBMI ?
        console.log(`Mark BMI (${markBMI}) cao hơn John (${johnBMI})!"
        `)
        : console.log(`Mark BMI (${markBMI}) thấp hơn John (${johnBMI})!"
        `)
})
