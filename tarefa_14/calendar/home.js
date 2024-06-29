function handleSubmit(event) {
  event.preventDefault();

  const month = document.getElementById("month").value;
  const months = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  };
  if (!month) {
    alert("Preencha todos os campos");
  } else {
    const monthAsNumber = Number(month);
    if (monthAsNumber >= 1 && monthAsNumber <= 12) {
      const monthAsString = months[month];
      alert(`O mês é ${monthAsString}`);
    } else {
      alert("O número é inválido");
    }
  }
}
