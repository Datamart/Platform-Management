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
'<aside id="left-sidebar">' +
'  <div class="search-panel">' +
'    <input class="s-input" type="text" placeholder="Search">' +
'    <input class="s-submit" type="submit" value="">' +
'  </div>' +
'  <ul class="left-nav">' +
'    <li class="open"><a href="#">US-CA</a>' +
'      <ul>' +
'        <li><a href="#">' +
'          <span class="link"><span class="count">27</span>Foster City DC #1</span>' +
'          <span class="status"><span class="stat-ico dep-st"></span>Deploying</span></a>' +
'        </li>' +
'        <li><a href="#">' +
'          <span class="link"><span class="count">33</span>Foster City DC #2</span>' +
'          <span class="status"><span class="stat-ico run-st"></span>Running</span></a>' +
'        </li>' +
'        <li><a href="#">' +
'          <span class="link"><span class="count">55</span>Foster City DC #3</span>' +
'          <span class="status"><span class="stat-ico run-st"></span>Running</span></a>' +
'        </li>' +
'      </ul>' +
'    </li>' +
'    <li><a href="#">US-CB</a></li>' +
'    <li><a href="#">US-CE</a></li>' +
'    <li><a href="#">US-CW</a>' +
'      <ul>' +
'        <li><a href="#">' +
'          <span class="link"><span class="count">27</span>Readwood City East</span>' +
'          <span class="status"><span class="stat-ico dep-st"></span>Deploying</span></a>' +
'        </li>' +
'        <li><a href="#">' +
'          <span class="link"><span class="count">33</span>Readwood City West</span>' +
'          <span class="status"><span class="stat-ico run-st"></span>Running</span></a>' +
'        </li>' +
'        <li class="open"><a href="#">' +
'          <span class="link"><span class="count">55</span>Readwood City Center</span>' +
'          <span class="status"><span class="stat-ico run-st"></span>Running</span></a>' +
'          <ul>' +
'            <li><a href="#">ddp3-1.fc1.usca</a></li>' +
'            <li><a href="#" class="active">ddp3-1.fc1.usca</a></li>' +
'            <li><a href="#">ddp3-1.fc1.usca</a></li>' +
'            <li><a href="#">ddp3-1.fc1.usca</a></li>' +
'          </ul>' +
'        </li>' +
'      </ul>' +
'    </li>' +
'  </ul>' +
'</aside>';
  }
})();
