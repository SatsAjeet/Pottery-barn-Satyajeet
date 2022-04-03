document.querySelector("#signupForm").addEventListener("submit", signUpfun)
var credArr = JSON.parse(localStorage.getItem("credentials")) || [];
function signUpfun(event) {
  event.preventDefault();
  var name = document.querySelector("#fname").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#password1").value;
  var cpass = document.querySelector("#password2").value;
  if (cpass == pass)
  {
    var credObj = {
      name: name,
      email: email,
      pass: pass,
    };
    credArr.push(credObj);
    console.log(credArr);
    localStorage.setItem("credentials", JSON.stringify(credArr));

      alert("Signup completed")
  }

  else {
    alert("Password did not match")
  }
    }
  

document.querySelector("#signinForm").addEventListener("submit", loginPage)


function loginPage(event) {

  event.preventDefault();
  var loginCredentials = JSON.parse(localStorage.getItem("logindata")) || []
  var signupData = JSON.parse(localStorage.getItem("credentials")) || [];
  var email1 = document.querySelector("#logInemail").value;
  var password1 = document.querySelector("#logInpass").value;

  var flag = false;
  for (var i = 0; i < signupData.length; i++) {

    if (signupData[i].email == email1 && signupData[i].pass == password1) {
      flag = true;
      var name1 = signupData[i].input
      var phone1 = signupData[i].number
      break;
    }
    else {
      flag = false;
    }
  }
  if (flag == true) {
    alert("login success")
    obj = {
      name: name1,
      phone: phone1,
    }
    loginCredentials.push(obj)
    localStorage.setItem("logindata", JSON.stringify(loginCredentials))
    let purchase = JSON.parse(localStorage.getItem("cart_data"))
    if (purchase.length == 0) {
      window.location.href = "/index.html"
    }
    else {
      window.location.href = "../Pages/cart.html"
    }
  }
  else {
    alert("Credientials did not matched, make sure you have registered")
  }
}