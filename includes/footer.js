(function() {
  var script = document.currentScript;
  if (!script) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript#Browser_compatibility
    var scripts = document.getElementsByTagName('SCRIPT');
    script = scripts[scripts.length - 1];
  }
  if (script) {
    var container = script.parentNode.insertBefore(document.createElement('DIV'), script);
    container.innerHTML = '' +
      '<div id="footer"><p>© ' + (new Date).getFullYear() + ' Datamart - Platform Management</p></div>';
  }
})();

(function() {
  function initDatePicker_() {
    var picker = document.getElementById('date-picker');
    if (picker) {
      var re = /(\s\d{4})$/;
      var date = new Date;
      var end = date.toDateString().slice(4).replace(re, ',$1');
      var start = new Date(date.setMonth(date.getMonth() - 1));
      picker.outerText = start.toDateString().slice(4).replace(re, ',$1') + ' - ' + end;
    }
  }

  function initDynamicValues_() {
    var elements = document.getElementsByTagName('EM');
    var length = elements.length;
    var re = /\B(?=(\d{3})+(?!\d))/g;
    var handler = function(element, min, max) {
      setInterval(function() {
        var value = Math.floor(Math.random() * (max - min + 1)) + min;
        element.innerHTML = value.toString().replace(re, ',');
      }, 1e3);
    };
    for (; length--;) {
      var element = elements[length];
      var min = element.getAttribute('data-min');
      var max = element.getAttribute('data-max');
      if (min && max) handler(element, +min, +max);
    }
  }

  function init_() {
    initDatePicker_();
    initDynamicValues_();
  }

  init_();
})();
