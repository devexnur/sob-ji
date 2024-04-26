const d = new Date("2015-03-25");
document.getElementById("date").innerHTML = d;

function clock() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let z = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = z;
  setTimeout(startTime, 1000);
}
window.setInterval(clock, 1000);
