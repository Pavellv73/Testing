import Vue from 'vue'; // eslint-disable-line

/* eslint-disable */
var plugin = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    var dir = {
      bind: function bind(el, binding, vnode) {
        // Get options
        opts.class = opts.class || 'icon';
        opts.url = opts.url === undefined ? '/assets/sprite.svg' : opts.url;

        // Get params
        // If expression + "symbol" param -> use expression value
        var id = binding.value || vnode.data.attrs.symbol;
        var size = vnode.data.attrs && vnode.data.attrs.size;

        // Set viewBox, widht, height attributes ?
        if (size) {
          // Normalize valid separators: / /, /,/
          size = size.replace(/( |, |,)/g, ' ');
          var sizeValues = size.split(' ');
          var l = sizeValues.length;
          var viewBox = [];

          if (l === 3 || l > 4) {
            console.warn('[vue-svg-sprite] size: "' + size + '" is not valid');
          } else {
            viewBox[0] = l < 4 ? 0 : sizeValues[0];
            viewBox[1] = l < 4 ? 0 : sizeValues[1];
            /* eslint-disable no-multi-assign */
            var w = viewBox[2] = l < 4 ? sizeValues[0] : sizeValues[2];
            var h = viewBox[3] = sizeValues[l - 1];
            /* eslint-enable no-multi-assign */

            el.setAttribute('viewBox', viewBox.join(' '));
            el.setAttribute('width', w);
            el.setAttribute('height', h);
            // Remove directive attributes
            el.removeAttribute('size');
            el.removeAttribute('symbol');
          }
        }

        // Check for existing class option (also .className--modifier)
        // IE do not support classList on SVG element, so we use getAttribute…
        var classes = el.getAttribute('class');
        var hasClass = classes ? classes.split(' ').some(function (className) {
          return className.indexOf(opts.class) !== -1;
        }) : false;

        if (!hasClass) {
          el.setAttribute('class', classes ? classes + ' ' + opts.class : opts.class);
        }

        // Add the <use> element to <svg>
        var href = opts.url === '' ? '#' + id : opts.url + '#' + id;
        var useEl = use.cloneNode();

        useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', href);
        el.appendChild(useEl);
      },
    };

    Vue.directive('svg', dir);
  }
};

Vue.use(plugin, {
  url: `/assets/sprite.svg?v=${process.env.CACHE_VERSION}`,
  // url: '/assets/sprite.svg',
  class: false,
})
