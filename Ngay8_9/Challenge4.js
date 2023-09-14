console.log("Challenge 4: ");

const bill = [275, 40, 430];
for (let i = 0; i < bill.length; i++) {
  var tip = bill[i][i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
  console.log(`Hóa đơn là ${bill[i]}, tiền boa là ${tip} và tổng giá trị là ${bill[i] + tip}`);
}
