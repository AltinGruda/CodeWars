function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  // Case 1 : the old man has enough money

  //   We return 0 for the number of month and the difference between the two prices
  if (startPriceOld >= startPriceNew) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }

  // Case 2 : the old man doesn't have enough money

  // We initiate two variables, months for the number of months he's been waiting
  //   and total for the total money he has
  let months = 0,
    total = startPriceOld;

  // As long as the old man doesn't have enough money, we loop again for a new month
  while (total < startPriceNew) {
    // We add the savingperMonth for the new month
    total += savingperMonth;

    // We adjust the price of the old car
    total -= (startPriceOld * percentLossByMonth) / 100;

    // Applying the interest rate on the new car price and
    startPriceNew -= (startPriceNew * percentLossByMonth) / 100;
    startPriceOld -= (startPriceOld * percentLossByMonth) / 100;

    // We increase the month counter
    months++;

    // Increasing the rate for all the even months (we use the increased rate immediately after month 1)
    //   So each time the numbers of passed months is odd, we increase the rate
    months % 2 !== 0 ? (percentLossByMonth += 0.5) : percentLossByMonth;
  } // end while

  // Returning the number of months and what the old man has left after the purchase (rounded to units)
  return [months, Math.round(total - startPriceNew)];
}

nbMonths(2000, 8000, 1000, 1.5); //, [6, 766];
nbMonths(12000, 8000, 1000, 1.5); //, [0, 4000];
