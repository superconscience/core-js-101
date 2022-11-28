/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function getArea() {
    return this.width * this.height;
  };
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const props = JSON.parse(json);
  const obj = Object.create(proto);
  Object.entries(props).forEach(([key, value]) => { obj[key] = value; });
  return obj;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */
/*
const cssSelectorBuilder = {
  elementSelector: '',
  classSelectors: [],
  idSelector: '',
  attrSelectors: [],
  pseudoClassSelectors: [],
  pseudoElementSelector: '',
  element(value) {
    this.elementSelector = value;
    return this;
  },

  id(value) {
    this.idSelector = `#${value}`;
    return this;
  },

  class(value) {
    this.classSelectors.push(`.${value}`);
    return this;
  },

  attr(value) {
    this.attrSelectors.push(`[${value}]`);
    return this;
  },

  pseudoClass(value) {
    this.pseudoClassSelectors.push(`:${value}`);
    return this;
  },

  pseudoElement(value) {
    this.pseudoElementSelector = `::${value}`;
    return this;
  },

  combine(selector1, combinator, selector2) {
    return [selector1, combinator, selector2].join(' ');
  },

  toString() {
    return this.stringify();
  },

  stringify() {
    const selector = [
      this.elementSelector,
      this.idSelector,
      this.classSelectors.join(''),
      this.attrSelectors.join(''),
      this.pseudoClassSelectors.join(''),
      this.pseudoElementSelector,
    ].join('');
    this.reset();
    return selector;
  },

  reset() {
    this.elementSelector = '';
    this.idSelector = '';
    this.pseudoElementSelector = '';
    this.classSelectors = [];
    this.attrSelectors = [];
    this.pseudoClassSelectors = [];
  },
};
*/

const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
  },

  class(/* value */) {
    throw new Error('Not implemented');
  },

  attr(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },
};

// console.log(cssSelectorBuilder.combine(
//   cssSelectorBuilder.element('div').id('main').class('container').class('draggable'),
//   '+',
//   cssSelectorBuilder.combine(
//     cssSelectorBuilder.element('table').id('data'),
//     '~',
//     cssSelectorBuilder.combine(
//       cssSelectorBuilder.element('tr').pseudoClass('nth-of-type(even)'),
//       ' ',
//       cssSelectorBuilder.element('td').pseudoClass('nth-of-type(even)'),
//     ),
//   ),
// ));

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
