const capitalizeLetters = (str) => {

  const arrWords = str.split(' ').map((e) => {
    const first = e.charAt(0).toUpperCase();
    return first + e.slice(1);
  });

  return arrWords.join(' ')

};

module.exports = {
  capitalizeLetters,
};
