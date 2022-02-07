/* exported titleCase */
function titleCase(title) {
  const clean = title.toLowerCase();
  const words = clean.split(' ');
  const minor = ['like', 'and', 'or', 'nor', 'but',
    'a', 'an', 'the',
    'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  let flagSub = false;
  for (let i = 0; i < words.length; i++) {
    if (minor.includes(words[i]) && i !== 0 && flagSub === false) {
      continue;
    } else if (words[i].includes('api')) {
      words[i] = words[i].replaceAll('api', 'API');
    } else if (words[i].includes('javascript')) {
      words[i] = words[i].replaceAll('javascript', 'JavaScript');
    } else {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    if (words[i].includes('-')) {
      const index = words[i].indexOf('-') + 1;
      words[i] = words[i].replace(words[i][index], words[i][index].toUpperCase());
    }
    flagSub = false;
    if (words[i][words[i].length - 1] === ':') {
      flagSub = true;
    }
  }
  return words.join(' ');
}
