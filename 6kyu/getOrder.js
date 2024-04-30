function getOrder(input) {
    const orderedObj = {'Burger': 1, 'Fries': 2, 'Chicken': 3, 'Pizza': 4, 'Sandwich': 5, 'Onionrings': 6, 'Milkshake': 7, 'Coke': 8};
    const order = {
      'burger': 'burger',
      'fries': 'fries',
      'chicken': 'chicken',
      'pizza': 'pizza',
      'sandwich': 'sandwich',
      'onionrings': 'onionrings',
      'milkshake': 'milkshake',
      'coke': 'coke'
    }
  
    let finalOrder = [];
  
    let str = '';
  
    for(let i = 0; i < input.length; i++){
      str += input[i];
      if(order[str]) {
          finalOrder.push(str[0].toUpperCase() + str.slice(1));
          str = '';
      }
    }
  
    finalOrder.sort((a,b) => orderedObj[a] - orderedObj[b]);
    return finalOrder.join(' ');
  }

getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza") //"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
getOrder("pizzachickenfriesburgercokemilkshakefriessandwich") //"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");