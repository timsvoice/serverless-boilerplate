import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { hello } from '../handler.js';

chai.use(chaiAsPromised);
const assert = chai.assert;

describe('Handler', function() {
  it('should call the handler and get a response in return', function(done) {
    hello('_','_', function(err, res) {
      assert.deepPropertyVal(res, 'statusCode', 200);
      done();
    })
  })
})
