"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function showData() {
  return _showData.apply(this, arguments);
}

function _showData() {
  _showData = _asyncToGenerator(function* () {
    document.getElementById("data").innerHTML = "Loading...";
    yield delay(3000);
    var data = {
      name: "Saif",
      age: 30
    };
    renderData(data);
  });
  return _showData.apply(this, arguments);
}

function renderData(_ref) {
  var {
    name,
    age
  } = _ref;
  document.getElementById("data").innerHTML = "Name: ".concat(name, ", Age: ").concat(age);
}

function delay(_x) {
  return _delay.apply(this, arguments);
}

function _delay() {
  _delay = _asyncToGenerator(function* (timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  });
  return _delay.apply(this, arguments);
}