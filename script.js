var count = 10;
setTimeout(() => {
  document.getElementById("myDiv").innerHTML = count;
  count--;
  setTimeout(() => {
    document.getElementById("myDiv").innerHTML = count;
    count--;
    setTimeout(() => {
      document.getElementById("myDiv").innerHTML = count;
      count--;
      setTimeout(() => {
        document.getElementById("myDiv").innerHTML = count;
        count--;
        setTimeout(() => {
          document.getElementById("myDiv").innerHTML = count;
          count--;
          setTimeout(() => {
            document.getElementById("myDiv").innerHTML = count;
            count--;
            setTimeout(() => {
              document.getElementById("myDiv").innerHTML = count;
              count--;
              setTimeout(() => {
                document.getElementById("myDiv").innerHTML = count;
                count--;
                setTimeout(() => {
                  document.getElementById("myDiv").innerHTML = count;
                  count--;
                  setTimeout(() => {
                    document.getElementById("myDiv").innerHTML = count;
                    count--;
                    setTimeout(() => {
                      document.getElementById("myDiv").innerHTML = "";
                      document.getElementById("t1").innerHTML = "Happy";
                      document.getElementById(
                        "t2"
                      ).innerHTML = `Indep<span id="t2s2">en</span>dence`;
                      document.getElementById("t3").innerHTML = "Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
