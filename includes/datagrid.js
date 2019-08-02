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
'<table>' +
'  <colgroup>' +
'    <col width="3%"></col>' +
'    <col width="20%"></col>' +
'    <col width="10%"></col>' +
'    <col width="10%"></col>' +
'    <col width="20%"></col>' +
'    <col width="20%"></col>' +
'    <col width="10%"></col>' +
'  </colgroup>' +
'  <thead>' +
'    <tr class="sorting">' +
'      <th></th>' +
'      <th><span>Account</span></th>' +
'      <th><span>Total</span></th>' +
'      <th><span>95%</span></th>' +
'      <th><span>System load 95%</span></th>' +
'      <th><span>System load max</span></th>' +
'      <th><span>Transaction</span></th>' +
'    </tr>' +
'  </thead>' +
'  <tbody>' +
'    <tr>' +
'      <td>1</td>' +
'      <td><a href="../reports/report.html?id=1">ABC Inc</a></td>' +
'      <td>$69</td>' +
'      <td>$33,445</td>' +
'      <td>43% <div class="progress-bar"><span class="progress" style="width: 43%"></span></div></td>' +
'      <td>25% <div class="progress-bar"><span class="progress" style="width: 25%"></span></div></td>' +
'      <td>45%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>2</td>' +
'      <td><a href="../reports/report.html?id=2">DCA Inc</a></td>' +
'      <td>$31</td>' +
'      <td>$45,555</td>' +
'      <td>55% <div class="progress-bar"><span class="progress" style="width: 55%"></span></div></td>' +
'      <td>32% <div class="progress-bar"><span class="progress" style="width: 32%"></span></div></td>' +
'      <td>28%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>3</td>' +
'      <td><a href="../reports/report.html?id=3">CBA Inc</a></td>' +
'      <td>$56</td>' +
'      <td>$55,543</td>' +
'      <td>23% <div class="progress-bar"><span class="progress" style="width: 23%"></span></div></td>' +
'      <td>45% <div class="progress-bar"><span class="progress" style="width: 45%"></span></div></td>' +
'      <td>76%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>4</td>' +
'      <td><a href="../reports/report.html?id=4">CVN Inc</a></td>' +
'      <td>$32</td>' +
'      <td>$22,345</td>' +
'      <td>97% <div class="progress-bar"><span class="progress" style="width: 97%"></span></div></td>' +
'      <td>23% <div class="progress-bar"><span class="progress" style="width: 23%"></span></div></td>' +
'      <td>23%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>5</td>' +
'      <td><a href="../reports/report.html?id=5">AMD Inc</a></td>' +
'      <td>$67</td>' +
'      <td>$133,445</td>' +
'      <td>60% <div class="progress-bar"><span class="progress" style="width: 60%"></span></div></td>' +
'      <td>43% <div class="progress-bar"><span class="progress" style="width: 43%"></span></div></td>' +
'      <td>56%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>6</td>' +
'      <td><a href="../reports/report.html?id=6">ACE Inc</a></td>' +
'      <td>$75</td>' +
'      <td>$233,345</td>' +
'      <td>25% <div class="progress-bar"><span class="progress" style="width: 25%"></span></div></td>' +
'      <td>69% <div class="progress-bar"><span class="progress" style="width: 69%"></span></div></td>' +
'      <td>21%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>7</td>' +
'      <td><a href="../reports/report.html?id=7">ICE Inc</a></td>' +
'      <td>$34</td>' +
'      <td>$343,425</td>' +
'      <td>78% <div class="progress-bar"><span class="progress" style="width: 78%"></span></div></td>' +
'      <td>36% <div class="progress-bar"><span class="progress" style="width: 36%"></span></div></td>' +
'      <td>75%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>8</td>' +
'      <td><a href="../reports/report.html?id=8">BBC Inc</a></td>' +
'      <td>$40</td>' +
'      <td>$133,434</td>' +
'      <td>56% <div class="progress-bar"><span class="progress" style="width: 56%"></span></div></td>' +
'      <td>67% <div class="progress-bar"><span class="progress" style="width: 67%"></span></div></td>' +
'      <td>35%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>9</td>' +
'      <td><a href="../reports/report.html?id=9">TTN Inc</a></td>' +
'      <td>$35</td>' +
'      <td>$334,445</td>' +
'      <td>75% <div class="progress-bar"><span class="progress" style="width: 75%"></span></div></td>' +
'      <td>32% <div class="progress-bar"><span class="progress" style="width: 32%"></span></div></td>' +
'      <td>44%</td>' +
'    </tr>' +
'    <tr>' +
'      <td>10</td>' +
'      <td><a href="../reports/report.html?id=10">NNM Inc</a></td>' +
'      <td>$54</td>' +
'      <td>$445,665</td>' +
'      <td>43% <div class="progress-bar"><span class="progress" style="width: 43%"></span></div></td>' +
'      <td>66% <div class="progress-bar"><span class="progress" style="width: 66%"></span></div></td>' +
'      <td>65%</td>' +
'    </tr>' +
'  </tbody>' +
'</table>';
  }
})();
