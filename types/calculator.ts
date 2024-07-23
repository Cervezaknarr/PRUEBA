// export function calcularResultado(rent: number, expenses: number, tipoAlquiler: string, duracionAlquiler: number): { resultadoNormal: string, resultadoMenosDiezPorciento: string } {
//   const factorTipoAlquiler = tipoAlquiler === 'residencial' ? 1.1 : 1.2;
//   const total = (rent + expenses) * factorTipoAlquiler * duracionAlquiler;
//   //result normal
//   const resultadoNormal = total.toFixed(2);
//   // result -10%
//   const resultadoMenosDiezPorciento = (total * 0.9).toFixed(2);

//   return { resultadoNormal, resultadoMenosDiezPorciento };

// }

// export function handleSubmit(event: Event): void {
//   event.preventDefault();
//   const form = event.target as HTMLFormElement;
//   const formData = new FormData(form);

//   const rent = parseFloat(formData.get('rent') as string);
//   const expenses = parseFloat(formData.get('expenses') as string);
//   const tipoAlquiler = formData.get('tipoAlquiler') as string;
//   const duracionAlquiler = parseInt(formData.get('duracionAlquiler') as string, 10);

//   const { resultadoNormal, resultadoMenosDiezPorciento } = calcularResultado(rent, expenses, tipoAlquiler, duracionAlquiler);

//   const resultElement = document.getElementById('result');
//   if (resultElement) {
//     resultElement.innerHTML = `<p>Resultado Normal: $${resultadoNormal}</p>
//       <p>Resultado -10%: $${resultadoMenosDiezPorciento}</p>`;
//   }
// }

// funciona para reflejar en 10% en la primer card
// export function calcularResultado(rent: number, expenses: number, tipoAlquiler: string, duracionAlquiler: number): { resultadoNormal: string, resultadoMenosDiezPorciento: string } {
//   const factorTipoAlquiler = tipoAlquiler === 'residencial' ? 1.1 : 1.2;
//   const total = (rent + expenses) * factorTipoAlquiler * duracionAlquiler;

//   // Resultado normal
//   const resultadoNormal = total.toFixed(2);

//   // Resultado -10%
//   const resultadoMenosDiezPorciento = (total * 0.9).toFixed(2);

//   return { resultadoNormal, resultadoMenosDiezPorciento };
// }

// export function handleSubmit(event: Event): void {
//   event.preventDefault();
//   const form = event.target as HTMLFormElement;
//   const formData = new FormData(form);

//   const rent = parseFloat(formData.get('rent') as string);
//   const expenses = parseFloat(formData.get('expenses') as string);
//   const tipoAlquiler = formData.get('tipoAlquiler') as string;
//   const duracionAlquiler = parseInt(formData.get('duracionAlquiler') as string, 10);

//   const { resultadoNormal, resultadoMenosDiezPorciento } = calcularResultado(rent, expenses, tipoAlquiler, duracionAlquiler);

//   const costoOriginalElement = document.getElementById('costoOriginal');
//   const descuentoValorElement = document.getElementById('descuentoValor');
//   const totalCostoElement = document.getElementById('totalCosto');
//   const descuentoElement = document.getElementById('descuento');

//   if (costoOriginalElement) {
//     costoOriginalElement.textContent = resultadoNormal;
//   }

//   if (descuentoValorElement) {
//     descuentoValorElement.textContent = (parseFloat(resultadoNormal) - parseFloat(resultadoMenosDiezPorciento)).toFixed(2);
//   }

//   if (totalCostoElement) {
//     totalCostoElement.textContent = resultadoMenosDiezPorciento;
//   }

//   if (descuentoElement) {
//     descuentoElement.textContent = `$${resultadoMenosDiezPorciento}`;
//   }
// }
// probando todas las cards
// export function calcularResultado(rent: number, expenses: number, tipoAlquiler: string, duracionAlquiler: number): { resultadoNormal: string, resultadoMenosDiezPorciento: string, anticipo25: string, cuota25: string, anticipo50: string, cuota50: string } {
//   const factorTipoAlquiler = tipoAlquiler === 'residencial' ? 1.1 : 1.2;
//   const total = (rent + expenses) * factorTipoAlquiler * duracionAlquiler;

//   // Resultado normal
//   const resultadoNormal = total.toFixed(2);

//   // Resultado -10%
//   const resultadoMenosDiezPorciento = (total * 0.9).toFixed(2);

//   // 25% Anticipo + 3 cuotas
//   const anticipo25 = (total * 0.25).toFixed(2);
//   const cuota25 = ((total * 0.75) / 3).toFixed(2);

//   // 50% Anticipo + 6 cuotas
//   const anticipo50 = (total * 0.5).toFixed(2);
//   const cuota50 = ((total * 0.5) / 6).toFixed(2);

//   return { resultadoNormal, resultadoMenosDiezPorciento, anticipo25, cuota25, anticipo50, cuota50 };
// }

// export function handleSubmit(event: Event): void {
//   event.preventDefault();
//   const form = event.target as HTMLFormElement;
//   const formData = new FormData(form);

//   const rent = parseFloat(formData.get('rent') as string);
//   const expenses = parseFloat(formData.get('expenses') as string);
//   const tipoAlquiler = formData.get('tipoAlquiler') as string;
//   const duracionAlquiler = parseInt(formData.get('duracionAlquiler') as string, 10);

//   const { resultadoNormal, resultadoMenosDiezPorciento, anticipo25, cuota25, anticipo50, cuota50 } = calcularResultado(rent, expenses, tipoAlquiler, duracionAlquiler);

//   const resultElement10Off = document.getElementById('result10Off');
//   const costoOriginalElement = document.getElementById('costoOriginal');
//   const descuentoValorElement = document.getElementById('descuentoValor');
//   const totalCostoElement = document.getElementById('totalCosto');

//   const anticipo25Element = document.getElementById('anticipo25');
//   const cuota25Element = document.getElementById('cuotas25');
//   const cuotaValor25Element = document.getElementById('cuotaValor25');
//   const totalCosto25Element = document.getElementById('totalCosto25');

//   const anticipo50Element = document.getElementById('anticipo50');
//   const cuota50Element = document.getElementById('cuotas50');
//   const cuotaValor50Element = document.getElementById('cuotaValor50');
//   const totalCosto50Element = document.getElementById('totalCosto50');

//   if (resultElement10Off) {
//     resultElement10Off.textContent = `$${resultadoMenosDiezPorciento}`;
//   }
//   if (costoOriginalElement) {
//     costoOriginalElement.textContent = resultadoNormal;
//   }
//   if (descuentoValorElement) {
//     descuentoValorElement.textContent = (parseFloat(resultadoNormal) - parseFloat(resultadoMenosDiezPorciento)).toFixed(2);
//   }
//   if (totalCostoElement) {
//     totalCostoElement.textContent = resultadoMenosDiezPorciento;
//   }

//   if (anticipo25Element) {
//     anticipo25Element.textContent = `$${anticipo25}`;
//   }
//   if (cuota25Element) {
//     cuota25Element.textContent = `$${cuota25}`;
//   }
//   if (cuotaValor25Element) {
//     cuotaValor25Element.textContent = cuota25;
//   }
//   if (totalCosto25Element) {
//     totalCosto25Element.textContent = resultadoNormal;
//   }

//   if (anticipo50Element) {
//     anticipo50Element.textContent = `$${anticipo50}`;
//   }
//   if (cuota50Element) {
//     cuota50Element.textContent = `$${cuota50}`;
//   }
//   if (cuotaValor50Element) {
//     cuotaValor50Element.textContent = cuota50;
//   }
//   if (totalCosto50Element) {
//     totalCosto50Element.textContent = resultadoNormal;
//   }
// }


export function calcularResultado(
  rent: number,
  expenses: number,
  tipoAlquiler: string,
  duracionAlquiler: number
): {
  resultadoNormal: string,
  resultadoMenosDiezPorciento: string,
  anticipo25: string,
  cuota25: string,
  anticipo50: string,
  cuota50: string
} {
  let total = 0;

  switch (tipoAlquiler) {
    case 'temporal':
      total = (rent + expenses) * duracionAlquiler;
      break;
    case 'residencial':
    case 'comercial':
      total = (rent + expenses) * duracionAlquiler;
      break;
    default:
      throw new Error('Tipo de alquiler no soportado');
  }

  const descuento10 = total * 0.10;
  const totalMenosDiez = total - descuento10;

  const anticipo25 = total * 0.25;
  const cuota25 = (total - anticipo25) / 3;

  const anticipo50 = total * 0.50;
  const cuota50 = (total - anticipo50) / 6;

  return {
    resultadoNormal: total.toFixed(2),
    resultadoMenosDiezPorciento: totalMenosDiez.toFixed(2),
    anticipo25: anticipo25.toFixed(2),
    cuota25: cuota25.toFixed(2),
    anticipo50: anticipo50.toFixed(2),
    cuota50: cuota50.toFixed(2),
  };
}

export function handleSubmit(event: Event) {
  event.preventDefault();

  const rentElement = document.getElementById('rent') as HTMLInputElement;
  const expensesElement = document.getElementById('expenses') as HTMLInputElement;
  const tipoAlquilerElement = document.getElementById('tipoAlquiler') as HTMLSelectElement;
  const duracionAlquilerElement = document.getElementById('duration') as HTMLSelectElement;

  const rent = parseFloat(rentElement.value);
  const expenses = parseFloat(expensesElement.value);
  const tipoAlquiler = tipoAlquilerElement.value;
  const duracionAlquiler = parseFloat(duracionAlquilerElement.value);

  const resultado = calcularResultado(rent, expenses, tipoAlquiler, duracionAlquiler);

  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.innerText = `Total: $${resultado.resultadoNormal}`;
  }
  const result10OffElement = document.getElementById('result10Off');
  if (result10OffElement) {
    result10OffElement.innerText = `$${resultado.resultadoMenosDiezPorciento}`;
  }
  const costoOriginalElement = document.getElementById('costoOriginal');
  if (costoOriginalElement) {
    costoOriginalElement.innerText = `$${resultado.resultadoNormal}`;
  }
  const descuentoValorElement = document.getElementById('descuentoValor');
  if (descuentoValorElement) {
    descuentoValorElement.innerText = `$${(parseFloat(resultado.resultadoNormal) - parseFloat(resultado.resultadoMenosDiezPorciento)).toFixed(2)}`;
  }
  const totalCostoElement = document.getElementById('totalCosto');
  if (totalCostoElement) {
    totalCostoElement.innerText = `$${resultado.resultadoMenosDiezPorciento}`;
  }

  const anticipo25Element = document.getElementById('anticipo25');
  if (anticipo25Element) {
    anticipo25Element.innerText = `$${resultado.anticipo25}`;
  }
  const cuotas25Element = document.getElementById('cuotas25');
  if (cuotas25Element) {
    cuotas25Element.innerText = `$${resultado.cuota25}`;
  }
  const totalCosto25Element = document.getElementById('totalCosto25');
  if (totalCosto25Element) {
    totalCosto25Element.innerText = `$${resultado.resultadoNormal}`;
  }

  const anticipo50Element = document.getElementById('anticipo50');
  if (anticipo50Element) {
    anticipo50Element.innerText = `$${resultado.anticipo50}`;
  }
  const cuotas50Element = document.getElementById('cuotas50');
  if (cuotas50Element) {
    cuotas50Element.innerText = `$${resultado.cuota50}`;
  }
  const totalCosto50Element = document.getElementById('totalCosto50');
  if (totalCosto50Element) {
    totalCosto50Element.innerText = `$${resultado.resultadoNormal}`;
  }
}
