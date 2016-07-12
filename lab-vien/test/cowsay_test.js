const expect = require('chai').expect;
const cowsay = require('../cowsay');
const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

var saythis = 'say something else';

describe('the cowsay function', function() {
  it('should output a cow saying the input', function() {
    expect(cowsay(saythis)).to.eql('_'.repeat(saythis.length) + '\n\n' + saythis + '\n'+ '_'.repeat(saythis.length) + '\n' + cow);
  });
});
