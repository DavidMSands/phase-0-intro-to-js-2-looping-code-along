function writeCards(name, event) {
  const newArray = [];
  for(let i = 0; i < name.length; i++) {
    const note = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
    newArray.push(note);
  }
  return newArray
}

function countDown(number) {
    while(number > -1)
    console.log(number--)
}