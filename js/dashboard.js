var cusid_ele = document.getElementsByClassName('mdc-button');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    mdc.ripple.MDCRipple.attachTo(item);
}

var cusid_ele = document.getElementsByClassName('mdc-list-item');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    mdc.ripple.MDCRipple.attachTo(item);
}

var cusid_ele = document.getElementsByClassName('mdc-icon-button');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    var iconButtonRipple = mdc.ripple.MDCRipple.attachTo(item);
    iconButtonRipple.unbounded = true;
}


const menu = mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
menu.open = true;




$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
  document.getElementById("drawer").style= "display: flex;"
      document.getElementById("drawer").style= "animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideInFromleft forwards;"
  });
});

function hidenav(){
  document.getElementById("drawer").style= "animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideOutFromleft forwards;"
  setTimeout(function() {
    document.getElementById("drawer").style= "display: none;"
  }, 410);
};

