module.exports = function(saywhat) {
  const bubbleTop = '_'.repeat(saywhat.length) + '\n\n';
  const bubbleBottom = '_'.repeat(saywhat.length) + '\n';

  const cow = `
    \\   ^__^
     \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`;

  // console.log(bubbleTop + saywhat + '\n' + bubbleBottom + cow);
  return bubbleTop + saywhat + '\n' + bubbleBottom + cow;
};
