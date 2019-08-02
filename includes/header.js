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
      '<header id="header" class="clr">' +
      '  <a href="../dashboard/" class="logo"><img src="../images/logo.png"' +
      '     alt="Datamart Platform Management"/> </a>' +
      '  <nav id="nav">' +
      '    <ul class="main-nav">' +
      '      <li><a href="../dashboard/" title="Dashboard"' +
      '      class="active"><span class="icon dash-ico"></span>Dashboard</a></li>' +
      '      <li><a href="#" title="Datacenters"><span class="icon data-ico"></span>Datacenters</a></li>' +
      '      <li><a href="../reports/" title="Reports"' +
      '       class="active2"><span class="icon rep-ico"></span>Reports</a></li>' +
      '    </ul>' +
      '  </nav>' +
      '  <div class="user-panel">' +
      '    <div class="user-name"><span class="icon user-ico"></span>manager@dtm.io</div>' +
      '    <ul class="user-nav">' +
      '      <li><a href="#" title="Link">Link1</a></li>' +
      '      <li><a href="#" title="Link">Link2</a></li>' +
      '      <li><a href="#" title="Link">Link3</a></li>' +
      '      <li><a href="#" title="Link">Link4</a></li>' +
      '    </ul>' +
      '  </div>' +
      '</header>';
  }
})();
