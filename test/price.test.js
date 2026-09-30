import test from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount } from '../src/price.js';

test('applyDiscount(100, 20) returns 80', () => {
  assert.equal(applyDiscount(100, 20), 80);
});

test('applyDiscount(50, 0) returns 50', () => {
  assert.equal(applyDiscount(50, 0), 50);
});

test('applyDiscount(80, 100) returns 0', () => {
  assert.equal(applyDiscount(80, 100), 0);
});
