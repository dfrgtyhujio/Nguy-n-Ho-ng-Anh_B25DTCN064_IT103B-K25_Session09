let orders = ['Đơn hàng A', 'Đơn hàng B', 'Đơn hàng C', 'Đơn hàng D', 'Đơn hàng E'];
let revenues = [1500, 2800, 1200, -500, 3200];

let orderReports = orders.map(function(value, index) {
    return value + " mang về " + revenues[index] + " USD";
});

console.log(orderReports);

let result = revenues.filter(function(value) {
        return value > 0;
    }).reduce(function(acc, currentValue) {
        return acc + currentValue;
    }, 0);
    
console.log(result);
