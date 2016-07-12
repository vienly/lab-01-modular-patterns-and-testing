module.exports = function(saywhat) {
  const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

  const bubbleTop = '_'.repeat(saywhat.length) + '\n\n';
  const bubbleBottom = '_'.repeat(saywhat.length) + '\n';
  // const bubbleLeft = '<';
  // const bubbleRight = '> \n';
  console.log(bubbleTop + saywhat + '\n' + bubbleBottom + cow);
  return bubbleTop + saywhat + '\n' + bubbleBottom + cow;
};
