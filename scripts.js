console.log("Hello World");
{
  const piggyBank = {
    quarters: 54,
    nickels: 69,
    dimes: 32,
    pennies: 313
  }

  let dollarAmount = 0;

  function coinsToCash({quarters, nickels, dimes, pennies}) {
    dollarAmount += quarters * .25;
    dollarAmount += nickels * .05;
    dollarAmount += dimes * .1;
    dollarAmount += pennies * .01;
    console.log("Dollar Amount of Coins:", dollarAmount.toFixed(2));
  }
  coinsToCash(piggyBank);
}


function cashToCoins(dollarAmount) {
  //Function works its way down: quarters, then dimes, then nickels, then pennies.
  let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  let workingDollars = dollarAmount * 100;
  workingDollars = Number(workingDollars.toFixed(0)); //get rid of decimal places to avoid weird floating numbers

  const quarters = () => {
    let remainder = workingDollars % 25;

    if(remainder === 0) {
      coins.quarters = workingDollars / 25;
      workingDollars = 0;
    } else {
      let quarterAmount = workingDollars - remainder;
      coins.quarters = quarterAmount / 25;
      workingDollars = workingDollars - quarterAmount;
    }
  }

  const dimes = () => {
    let remainder = workingDollars % 10;
    
    if(remainder === 0) {
      coins.dimes = workingDollars / 10;
      workingDollars = 0;
    } else {
      let dimesAmount = workingDollars - remainder;
      coins.dimes = dimesAmount / 10;
      workingDollars = workingDollars - dimesAmount;
    }
  }

  const nickels = () => {
    let remainder = workingDollars % 5;
    if(remainder === 0) {
      coins.nickels = workingDollars / 5;
      workingDollars = 0;
    } else {
      let nickelsAmount = workingDollars - remainder;
      coins.nickels = nickelsAmount / 5;
      workingDollars = workingDollars - nickelsAmount;
    }
  }
  
  const pennies = () => {
    if(workingDollars > 0) {
      coins.pennies = workingDollars;
      dollarAmount = 0;
    }
  }

  quarters(dollarAmount);
  dimes(dollarAmount);
  nickels(dollarAmount);
  pennies(dollarAmount);

  return coins;
}

let coinCount = cashToCoins(12.53);
console.log(coinCount);




function cashToCoinsAlt(dollarAmount) {
  // This version loops through each coin type to distribute the coins evenly between all coin types.
  let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  let workingDollars = dollarAmount * 100;
  workingDollars = Number(workingDollars.toFixed(0)); //get rid of decimal places to avoid weird floating numbers

  while(workingDollars > 0) {
    if(workingDollars >= 25) {
      coins.quarters += 1;
      workingDollars -= 25;
    }
    if(workingDollars >= 10) {
      coins.dimes += 1;
      workingDollars -= 10;
    }
    if(workingDollars >= 5) {
      coins.nickels += 1;
      workingDollars -= 5;
    }
    if(workingDollars >= 1) {
      coins.pennies += 1;
      workingDollars -= 1;
    }
  }
  return coins;
}

let altCoins = cashToCoinsAlt(1354.12);
console.log(altCoins);