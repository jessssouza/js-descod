const mean = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
  };
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const inputs = [
      document.getElementById("num1").value,
      document.getElementById("num2").value,
      document.getElementById("num3").value,
    ];
  
    const isBlank = inputs.some((num) => !num);
    if (isBlank) {
      alert("Preencha todos os campos");
    } else {
      const inputsAsNumber = inputs.map((num) => Number(num));
      alert(`A média é ${mean(...inputsAsNumer)}`);
    }
  }
  