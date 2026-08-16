const eventDatesMulti = [
  new Date("Jun 25, 2027 21:00:00").getTime(),
  new Date("Jan 16, 2027 21:00:00").getTime(),
  new Date("Nov 14, 2026 22:00:00").getTime(),
  new Date("Dec 12, 2026 20:00:00").getTime(),
  new Date("Oct 31, 2026 20:30:00").getTime()
];

const eventDateSingle =
  new Date("Nov 14, 2026 21:00:00").getTime();

function updateCountdowns() {
  const now = new Date().getTime();

  eventDatesMulti.forEach((date, index) => {
    const idNum = index + 1;
    const distance = date - now;

    if (distance > 0) {
      const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours =
        Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        );

      const minutes =
        Math.floor(
          (distance % (1000 * 60 * 60)) /
          (1000 * 60)
        );

      const seconds =
        Math.floor(
          (distance % (1000 * 60)) / 1000
        );

      document.getElementById(`d${idNum}`).innerText =
        days < 10 ? "0" + days : days;

      document.getElementById(`h${idNum}`).innerText =
        hours < 10 ? "0" + hours : hours;

      document.getElementById(`m${idNum}`).innerText =
        minutes < 10 ? "0" + minutes : minutes;

      document.getElementById(`s${idNum}`).innerText =
        seconds < 10 ? "0" + seconds : seconds;
    }
  });

  const singleDistance = eventDateSingle - now;

  if (singleDistance > 0) {
    const days =
      Math.floor(singleDistance / (1000 * 60 * 60 * 24));

    const hours =
      Math.floor(
        (singleDistance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

    const minutes =
      Math.floor(
        (singleDistance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

    const seconds =
      Math.floor(
        (singleDistance % (1000 * 60)) / 1000
      );

    for (let i = 1; i <= 5; i++) {
      document.getElementById(`sd${i}`).innerText =
        days < 10 ? "0" + days : days;

      document.getElementById(`sh${i}`).innerText =
        hours < 10 ? "0" + hours : hours;

      document.getElementById(`sm${i}`).innerText =
        minutes < 10 ? "0" + minutes : minutes;

      document.getElementById(`ss${i}`).innerText =
        seconds < 10 ? "0" + seconds : seconds;
    }
  }
}

setInterval(updateCountdowns, 1000);

updateCountdowns();

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      y: 0.6
    }
  });
}

function openEnvelope(envId) {
  document
    .getElementById(envId)
    .classList.add("opened");

  triggerConfetti();
}

function openRSVP(name) {
  document.getElementById("rsvpTitle").innerText =
    "Confirmar - " + name;

  document
    .getElementById("rsvpModal")
    .classList.add("active");
}

function closeRSVP() {
  document
    .getElementById("rsvpModal")
    .classList.remove("active");
}

function submitRSVP(e) {
  e.preventDefault();

  const name =
    document.getElementById("rsvpName").value;

  alert(
    `¡Gracias ${name}! Tu asistencia ha sido confirmada.`
  );

  closeRSVP();

  triggerConfetti();
}

function openSongModal() {
  document
    .getElementById("songModal")
    .classList.add("active");
}

function closeSongModal() {
  document
    .getElementById("songModal")
    .classList.remove("active");
}

function submitSong(e) {
  e.preventDefault();

  const song =
    document.getElementById("songInput").value;

  alert(
    `¡Canción "${song}" enviada a la lista de sugerencias!`
  );

  closeSongModal();

  triggerConfetti();
}

function openWishModal(name) {
  const msg =
    prompt(`Escribe tu dedicatoria para ${name}:`);

  if (msg) {
    alert("¡Gracias por tu mensaje!");

    triggerConfetti();
  }
}
