const order = {};

//  if (order && order.customer && order.customer.address && !order.customer.address.city) {
//    console.log('City is required');
//  }

const customerOrder = order?.customer;
console.log(customerOrder);
console.log(order.customer?.address());
console.log(!order.customer?.address.city());
