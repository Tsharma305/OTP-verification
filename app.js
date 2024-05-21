document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("ft-pg-sec").style.display = "none";
  document.getElementById("sec-pg-sec").style.display = "flex";
});

document.getElementById("continue-btn").addEventListener("click", () => {
  phone = document.getElementById("phone-number").value;
  if (phone.length != 10) {
    document.getElementById("error-1").style.display = "block";
  } else {
    document.getElementById("error-1").style.display = "none";

    num = "";

    function run() {
      var a = 0;
      while (a == 0) {
        num = Math.round(Math.random() * 100000);
        if (num > 9999) {
          a = 1;
        }
      }
      alert(`The One Time Password is ${num}.`);
    }
    run();
    document.getElementById("th-pg-sec").style.display = "flex";
    document.getElementById("sec-pg-sec").style.display = "none";
  }
});

document.getElementById("verify-btn").addEventListener("click", () => {
  const num1 = document.getElementById("num1").value;
  // const num2 = document.getElementById("num2").value;
  // const num3 = document.getElementById("num3").value;
  // const num4 = document.getElementById("num4").value;
  // const num5 = document.getElementById("num5").value;
  // const otp = parseInt(num1.concat(num2, num3, num4, num5));

  if (num == num1) {
    document.getElementById("fr-pg-sec").style.display = "flex";
    document.getElementById("th-pg-sec").style.display = "none";
    setTimeout(function () {
      window.location.href = "https://portfolio-jitender.netlify.app";
    }, 4000);
  } else {
    alert("Please enter the correct otp ");
    document.getElementById("resend").addEventListener("click", () => {
      num = "";
      var a = 0;
      while (a == 0) {
        num = Math.round(Math.random() * 100000);
        if (num > 9999) {
          a = 1;
        }
      }
      alert(`The One Time Password is ${num}.`);
    });
  }
});
