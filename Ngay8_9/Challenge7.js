console.log("Challenge 7:");
const mark = {
  name: "Mark",
  tall: 1.69,
  weights: 78,
  calcBMI: function () {
    // với từ khóa function thì this sẽ trỏ tới đối tượng gọi hàm, và không áp dụng cho cách tạo hàm bằng arrow function: () => {}
    this.bmi = this.weights / (this.tall * this.tall);
    return this.bmi;
  },
};
const john = {
  name: "John",
  tall: 1.95,
  weights: 92,
  calcBMI: function () {
    this.bmi = this.weights / (this.tall * this.tall);
    return this.bmi;
  },
};
console.log(
  `BMI of ${mark.name} is ${mark.calcBMI()} and BMI of  ${
    john.name
  } is ${john.calcBMI()}`
);
mark.bmi > john.bmi
  ? console.log(
      `${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI (${john.bmi})`
    )
  : mark.bmi < john.bmi
  ?
  console.log(
      `${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s BMI (${mark.bmi})`
    )
  : console.log("They have the same BMI");
