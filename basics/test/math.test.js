import { assert } from 'chai';
import { add } from '../src/language/directives/dynamic_imports/math.js';

describe('math', function () {
  before(function () {
    // like setUpAll
  });

  beforeEach(function () {
    // like setUp
  });

  it('add(2, 3) = 5', function () {
    assert.equal(add(2, 3), 5);
  });

  it('add(0, 0) = 0', function () {
    assert.equal(add(0, 0), 0);
  });

  afterEach(function () {
    // like tearDown
  });

  after(function () {
    // like tearDownAll
  });
});
