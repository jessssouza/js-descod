function handleSubmit(event) {
  event.preventDefault();

  const age = document.getElementById("age").value;

  if (!age) {
    alert("Preencha todos os campos");
  } else {
    const ageAsNumber = Number(age);
    if (ageAsNumber < 18) {
      alert("Você é menor de idade!");
    } else {
      alert("Você é maior de idade!");
    }
  }
}
