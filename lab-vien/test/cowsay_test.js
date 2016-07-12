const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');
const cow = `
    \\   ^__^
     \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`;

var saythis = 'jeff';

describe('the cowsay function', function() {
  it('should return an ASCII cow saying the input', function() {
    expect(cowsay(saythis)).to.eql('_'.repeat(saythis.length) + '\n\n' + saythis + '\n'+ '_'.repeat(saythis.length) + '\n' + cow);
  });
});
