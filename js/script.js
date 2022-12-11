$(document).ready(() => {
  // DOM Elements

  // Variables
  let firstValue = "";
  let isFirstValue = false;
  let secondValue = "";
  let isSecondValue = false;
  let sign = "";
  let resultValue = 0;

  // Add Event Listeners to numbers
  for (let i = 0; i < $(".num").length; i++) {
    $(".num")[i].addEventListener("click", (e) => {
      let clickNumEl = $($(".num")[i]).val();
      if (isFirstValue === false) {
        getFirstValue(clickNumEl);
      }
      if (isSecondValue === false) {
        getSecondValue(clickNumEl);
      }
    });
  }

  function getFirstValue(el) {
    $(".resultPlace").text("");
    firstValue += el;
    $(".resultPlace").text(firstValue);
    firstValue = +firstValue;
    $(".resultWork").html(firstValue);
  }

  function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
      secondValue += el;
      $(".resultPlace").text(secondValue);
      secondValue = +secondValue;
      $(".resultWork").html(firstValue + sign + secondValue);
    }
  }

  function getSign() {
    for (let i = 0; i < $(".signs").length; i++) {
      $(".signs")[i].addEventListener("click", (e) => {
        sign = $($(".signs")[i]).val();
        isFirstValue = true;
        $(".resultWork").html($(".resultWork").html() + sign);
      });
    }
  }
  getSign();

  $(".equal").on("click", () => {
    $(".resultPlace").text("");
    if (sign === "+") {
      resultValue = firstValue + secondValue;
      $(".resultWork").html(
        `${firstValue} ${sign} ${secondValue} = ${resultValue}`
      );
    } else if (sign === "-") {
      resultValue = firstValue - secondValue;
      $(".resultWork").html(
        `${firstValue} ${sign} ${secondValue} = ${resultValue}`
      );
    } else if (sign === "*") {
      resultValue = firstValue * secondValue;
      $(".resultWork").html(
        `${firstValue} ${sign} ${secondValue} = ${resultValue}`
      );
    } else if (sign === "/") {
      resultValue = firstValue / secondValue;
      $(".resultWork").html(
        `${firstValue} ${sign} ${secondValue} = ${resultValue}`
      );
    }
    $(".resultPlace").text(resultValue);
    firstValue = resultValue;
    secondValue = "";
  });

  // Check it Letter
  // let CheckResultLength = () => {
  //   resultValue = JSON.stringify(resultValue);

  //   if (resultValue.length >= 8) {
  //     resultValue = JSON.parse(resultValue);
  //     $(".resultPlace").text().toFixed(5);
  //   }
  // }

  $(".negative").on("click", () => {
    $(".resultPlace").text("");
    if (firstValue != "") {
      resultValue = -firstValue;
      firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
      resultValue = -firstValue;
    }
    $(".resultPlace").text(resultValue);
  });

  $(".percent").on("click", () => {
    $(".resultPlace").text("");
    if (firstValue != "") {
      resultValue = firstValue / 100;
      firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
      resultValue = firstValue / 100;
    }
    $(".resultPlace").text(resultValue);
  });

  $(".ce").on("click", () => {
    $(".resultPlace").text(0);

    secondValue = "";
    isSecondValue = false;
    $(".resultWork").text(firstValue);
  });

  $(".c").on("click", () => {
    $(".resultPlace").text("");

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    $(".resultPlace").text(0);
    $(".resultWork").text(0);
  });

  $(".delete").on("click", () => {
    for (let i = 0; i < firstValue.length; i++) {
      if (firstValue != "") {
        $(".resultPlace").text($($(".resultPlace")[i]).remove());
        console.log(`Fancy`);
      } else {
        console.log(`Pigeon`);
      }
    }
  });

  $(".oneOverX").on("click", () => {
    if (firstValue != "") {
      resultValue = $(".resultPlace").text(1 / firstValue);
      firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
      resultValue = $(".resultPlace").text(1 / firstValue);
    }
  });

  $(".xPowerTwo").on("click", () => {
    if (firstValue != "") {
      resultValue = $(".resultPlace").text(firstValue * firstValue);
      firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
      resultValue = $(".resultPlace").text(firstValue * firstValue);
    }
  });

  $(".radicalX").on("click", () => {
    if (firstValue != "") {
      resultValue = $(".resultPlace").text(Math.sqrt(firstValue));
      firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
      resultValue = $(".resultPlace").text(Math.sqrt(firstValue));
    }
  });

  // ************** //
  // Side Menu Down
  // ************** //
  $(".menuDropIcon i").on("click", () => {
    $(".dropMenu").toggleClass("hideSlideMenu");
    $(".menuDropIcon").toggleClass("hideSlideMenu");
    $(".settings").toggleClass("hideSlideMenu");
  });

  $(".menu").on("click", () => {
    $(".dropMenu").toggleClass("hideSlideMenu");
    $(".menuDropIcon").toggleClass("hideSlideMenu");
    $(".settings").toggleClass("hideSlideMenu");
  });
});
