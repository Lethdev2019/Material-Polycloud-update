var cusid_ele = document.getElementsByClassName('mdc-button');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    mdc.ripple.MDCRipple.attachTo(item);
}

var cusid_ele = document.getElementsByClassName('mdc-text-field');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    var iconButtonRipple = mdc.ripple.MDCTextField.attachTo(item);
    iconButtonRipple.unbounded = true;
}


document.getElementById("2").style= "display: none;"
document.getElementById("3").style= "display: none;"

document.getElementById("container").style= "position: fixed; top: calc(50% - 250px); left: calc(50% - 200px); width: 400px; height: 500px; padding: 20px; visibility: visible; animation: 0.2s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 fadein forwards;"

function switch_page(from_page, to_page){
  document.getElementById(from_page).style= "animation: 0.2s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 fadeout forwards;"
  setTimeout(function() {
    document.getElementById(to_page).style= "display: inline-block; animation: 0.2s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 fadein forwards;"
    document.getElementById(from_page).style= "display: none;"
  }, 410);
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
};
var urllink= getUrlVars()["file"];
document.getElementById("download").href = urllink

function download_clicked(){
  document.getElementById("download_button").innerHTML = '<div id="wait" style="width:28px;height:28px;border:none black;position:absolute;top:3px;padding:2px; left: calc(50% - 14px);"><svg class="spinner" width="25px" height="25px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>'
  document.getElementById("download_button").disabled = true
  setTimeout(function() {
    links = document.getElementById("download").getAttribute("rel");
    document.getElementById("download").removeAttribute("rel");
    document.getElementById("download").href = links;
    window.close()
  }, 200);
  setTimeout(function() {
    window.close()
  }, 2000);
}