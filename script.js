function generarFibonacci(cantidad) {
    let serie = [0, 1];  
  
    for (let i = 2; i < cantidad; i++) {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie.slice(0, cantidad);  
  }  
  function esNumeroValido(valor) {
    return !isNaN(valor) && Number.isInteger(Number(valor)) && Number(valor) > 0;
  }
  
  document.getElementById("btnGenerar").addEventListener("click", () => {
    const input = document.getElementById("inputNumero").value;
    const numero = Number(input);
    if (esNumeroValido(numero)) {
      const serie = generarFibonacci(numero);
      document.getElementById("resultado").textContent = `Serie: ${serie.join(', ')}`;
      console.log(`Serie de Fibonacci: ${serie.join(', ')}`);
    } else {
      alert("Por favor, ingresa un número entero positivo.");
    }
  });
  