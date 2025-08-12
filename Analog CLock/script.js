const clock = document.getElementById("cwfClock");
    for (let i = 1; i <= 12; i++) {
      const num = document.createElement("div");
      num.classList.add("cwf-number");
      num.innerText = i;
      const angle = (i * 30) - 90;
      const radius = 130;
      const x = 160 + radius * Math.cos(angle * Math.PI / 180);
      const y = 160 + radius * Math.sin(angle * Math.PI / 180);
      num.style.left = x + "px";
      num.style.top = y + "px";
      clock.appendChild(num);
    }

    function updateClock() {
      const now = new Date();
      const h = now.getHours() % 12;
      const m = now.getMinutes();
      const s = now.getSeconds();

      const hDeg = (h + m / 60) * 30;
      const mDeg = (m + s / 60) * 6;
      const sDeg = s * 6;

      document.getElementById("hourHand").style.transform = `translate(-50%, -100%) rotate(${hDeg}deg)`;
      document.getElementById("minuteHand").style.transform = `translate(-50%, -100%) rotate(${mDeg}deg)`;
      document.getElementById("secondHand").style.transform = `translate(-50%, -100%) rotate(${sDeg}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();