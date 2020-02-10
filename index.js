// Return the Sum of Two Numbers

const sum = (a, b)=> {
  return a + b
}

// sum(3, 2)

const sumDigits =(num)=> {
  let numArr = num.toString().split("").map(Number)
  let result = numArr.reduce((total, current)=> {
    return total+current
  })
  return result
}

sumDigits(184)