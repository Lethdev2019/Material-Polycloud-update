var cusid_ele = document.getElementsByClassName('mdc-button');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  
    mdc.ripple.MDCRipple.attachTo(item);
}


document.getElementById("login_2").style= "display: none;"
document.getElementById("signup_1").style= "display: none;"
document.getElementById("signup_2").style= "display: none;"

document.getElementById("container").style= "position: fixed; top: calc(50% - 250px); left: calc(50% - 200px); width: 400px; height: 500px; padding: 20px; visibility: visible; animation: 0.2s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 fadein forwards;"

function switch_page(from_page, to_page){
  document.getElementById(from_page).style= "animation: 0.2s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 fadeout forwards;"
  setTimeout(function() {
    document.getElementById(to_page).style= "display: inline-block; animation: 0.2s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 fadein forwards;"
    document.getElementById(from_page).style= "display: none;"
  }, 410);
};