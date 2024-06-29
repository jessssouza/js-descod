const mean = (num1, num2, num3, num4, num5) => {
  return (num1 + num2 + num3 + num4 + num5) / 5;
};

function handleSubmit(event) {
  event.preventDefault();

  const inputs = [
    document.getElementById("num1").value,
    document.getElementById("num2").value,
    document.getElementById("num3").value,
    document.getElementById("num4").value,
    document.getElementById("num5").value,
  ];

  const isBlank = inputs.some((num) => !num);
  if (isBlank) {
    alert("Preencha todos os campos");
  } else {
    const inputsAsNumber = inputs.map((num) => Number(num));
    alert(`A média é ${mean(...inputsAsNumer)}`);
  }
}
