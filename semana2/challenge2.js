function divisibleByLeft(n) {

  const arrNum = n.toString().split('');

  return arrNum.map((el, index) => {
      
        if (index === 0) return false
      
        return el % parseInt(arrNum[index-1]) === 0
  });

}


module.exports = divisibleByLeft;
