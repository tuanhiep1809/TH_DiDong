var Infomation = [
    {
        Mark: {
            weights: 75,
            tall: 1.69
        },
        John: {
            weights: 92,
            tall: 1.95
        }
    },
    {
        Mark: {
            weights: 95,
            tall: 1.88
        },
        John: {
            weights: 85,
            tall: 1.76
        }
    }

]
var Cb_BMI = function (Infomations) {
    
    return {
        Mark: {
            ...Infomations.Mark,
            'BMI': Infomations.Mark.weights / (Infomations.Mark.tall * Infomations.Mark.tall)
        }
        ,
        John: {
            ...Infomations.John,
            'BMI': Infomations.John.weights / (Infomations.John.tall * Infomations.John.tall)
        }
    }
}

var BMI = Infomation.map(Cb_BMI);
console.log(BMI);
var Cb_markHigherBMI = function (BMI) {
    return BMI.Mark.BMI > BMI.John.BMI
}
var Arr_markHigherBMI = BMI.map(Cb_markHigherBMI);

var markHigherBMI=  Arr_markHigherBMI.forEach((v, i) => {
    console.log(`Data ${i + 1}: ${v}`)
})
export {Arr_markHigherBMI,BMI}





