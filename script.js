function laskeHinta() {
  const pieniMaara = parseInt(document.getElementById("pieni").value) || 0;
  const keskiMaara = parseInt(document.getElementById("keski").value) || 0;
  const isoMaara = parseInt(document.getElementById("iso").value) || 0;

  const pieniHinta = 3.5;
  const keskiHinta = 7;
  const isoHinta = 10;

  const yhteensa = (pieniMaara * pieniHinta) + (keskiMaara * keskiHinta) + (isoMaara * isoHinta);

  document.getElementById("tulos").textContent = `Yhteensä: ${yhteensa.toFixed(2)} €`;
}

function näytäLomake() {
  document.getElementById("yhteyslomake").style.display = "block";
}

function lahetaLomake(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("viesti").textContent = `Kiitos viestistä! Otamme sinuun pian yhteyttä osoitteeseen: ${email}`;
  document.getElementById("viesti").style.display = "block";
  document.getElementById("yhteyslomake").style.display = "none";
}
