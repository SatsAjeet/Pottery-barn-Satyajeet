
    document.querySelector("#form").addEventListener("submit", takeMe);
       document.querySelector("#phone").innerHTML = "Your OTP has been sent to your registered mobile number "

    alert( " <1234> is the One Time Password (OTP) for your payment on Pottery Barn. OTP is valid for next 1 minutes. Please do not share with anyone.")

var count=3
    function takeMe(event) {

        event.preventDefault();
        let code1 = document.querySelector("#code1").value;
        let code2 = document.querySelector("#code2").value;
        let code3 = document.querySelector("#code3").value;
        let code4 = document.querySelector("#code4").value;

        if(code1 == 1 && code2 == 2 && code3 == 3 && code4 == 4 && count>1) {

            alert("Your transaction was successful. Thank you for shopping with Pottery Barn");
            window.location.href = "../Pages/thankyou.html";

        }
        else if (count == 0)
        {
            alert("Sorry you exceeded the limit,Payment failed.")
            window.location.href = "../Pages/cart.html"
        }
        
        else 
        {
            count--
            alert("Wrong OTP entered. Please try again, max attempt 3 times")
        }

        if (count == 1) {
            document.querySelector("#remain").innerHTML = "Last Attempt"
        }
        else {
            document.querySelector("#remain").innerHTML = "Remaining Attempts: " + count
        }
     
            document.querySelector("#code1").value = null;
            document.querySelector("#code2").value = null;
            document.querySelector("#code3").value = null;
            document.querySelector("#code4").value = null;

        console.log(code1,code4, "Hello ")
    }

setTimeout(returning, 60000)
function returning()
{
    window.location.href ="../Pages/payment.html"
}

let time= document.querySelector("#time")
function timer(seconds) {
    var remaningTime = seconds;
    window.setTimeout(function () {
        time.innerHTML = null;
        time.innerHTML = `${remaningTime} Sec`
        if (remaningTime > 0) {
            timer(remaningTime - 1);
        }
    }, 1000);
}
timer(60);