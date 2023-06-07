const add = function(number1, number2)
{
  return number1 + number2;
};

const subtract = function(number1, number2)
{
  return number1 - number2;
};

const sum = function(array)
{
  let sum = 0;
  for(let i = 0; i < array.length; i++)
  {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array)
{
  if(array.length == 0)
  {
    return 0;
  }
  else
  {
    let sum = 1;
    for(let i = 0; i < array.length; i++)
    {
      sum = sum * array[i];
    }
    return sum;
  }
};

const power = function(number, power)
{
	return Math.pow(number, power);
};

const factorial = function(num)
{
  if (num < 0)
  {
    return -1;
  }
  else if (num == 0)
  {
    return 1;
  }
  else
  {
    let result = 1;
    for(let i = 1; i<=num; i++)
    {
      result = result*i;
    }
    return result;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
