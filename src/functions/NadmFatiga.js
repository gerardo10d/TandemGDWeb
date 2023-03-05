function NadmFatiga(tipoEje, CargaxFSC, MR, k, h, bermas) {
  // tipoEje=int(tipoEje)

  const E = 4 * 10 ** 6; //psi
  const u = 0.15; //Relación de Poisson
  const CV = 0.15; //Coeficiente de variación
  const f3 = 0.894;
  const f4 = 1 / (1.235 * (1 - CV));

  let ele = ((E * h ** 3) / 12 / k / (1 - u ** 2)) ** 0.25; //Radio de rigidez relativa
  let Med, f1, f2, EsfEq, resultado;

  if (bermas === 0) {
    // 0 es No en la variable del RadioButton

    if (tipoEje === 1) {
      Med = -1600 + 2525 * Math.log10(ele) + 24.42 * ele + 0.204 * ele ** 2;
      f1 = (24 / 18) * (CargaxFSC / 24) ** 0.94;
    } else if (tipoEje === 2) {
      Med = 3029 - 2966.8 * Math.log10(ele) + 133.69 * ele - 0.0632 * ele ** 2;
      f1 = (48 / 36) * (CargaxFSC / 48) ** 0.94;
    } else if (tipoEje === 3) {
      Med = -0.0485 * ele ** 3 + 5.5793 * ele ** 2 - 135.53 * ele + 2339.9;
      if (CargaxFSC <= 75) {
        f1 = (CargaxFSC / 54) * (72 / CargaxFSC) ** 0.06;
      } else {
        f1 = (CargaxFSC / 54) * (72 / CargaxFSC) ** 0.08;
      }
    }
    f2 = 0.892 + h / 85.71 - h ** 2 / 3000;
  } else if (bermas === 1) {
    // 1 es Sí en la variable del RadioButton

    if (tipoEje === 1) {
      Med =
        (-970.4 + 1202.6 * Math.log10(ele) + 53.587 * ele) *
        (0.8742 + 0.01088 * k ** 0.447);
      f1 = (24 / 18) * (CargaxFSC / 24) ** 0.94;
      f2 = 1;
    } else if (tipoEje === 2) {
      Med =
        (2005.4 - 1980.9 * Math.log10(ele) + 99.008 * ele) *
        (0.8742 + 0.01088 * k ** 0.447);
      f1 = (48 / 36) * (CargaxFSC / 48) ** 0.94;
      f2 = 1;
    } else if (tipoEje === 3) {
      Med = -0.018 * ele ** 3 + 2.0704 * ele ** 2 - 28.234 * ele + 1105.9;
      f2 = 0.8742 + 0.01088 * k ** 0.447; // Antes era f2=1
      if (CargaxFSC <= 75) {
        f1 = (CargaxFSC / 54) * (72 / CargaxFSC) ** 0.06;
      } else {
        f1 = (CargaxFSC / 54) * (72 / CargaxFSC) ** 0.08;
      }
      //f2=1 va aquí cuando se deja igual para los tres ejes, ahorita está diferente para trídem
    }
  }

  EsfEq = (6 * Med * f1 * f2 * f3 * f4) / h ** 2;

  if (EsfEq / MR >= 0.55) {
    resultado = Math.round(10 ** (11.737 - 12.077 * (EsfEq / MR)));
  } else if (0.45 < EsfEq / MR && EsfEq / MR < 0.55) {
    resultado = Math.round((4.2577 / (EsfEq / MR - 0.4325)) ** 3.268);
  } else if (EsfEq / MR <= 0.45) {
    resultado = "Ilimitadas";
  }
  return resultado;
}

export default NadmFatiga
// let TipoEje, CargaxFSC, k, h, Bermas, Dovelas, MR;
// TipoEje = 2;
// CargaxFSC = 19.2;
// k = 130;
// h = 9.5;
// Bermas = 0;
// Dovelas = 1;
// MR = 650;

// let r = NadmErosion(TipoEje, CargaxFSC, k, h, Bermas, Dovelas);
// console.log(r);

// let r2 = NadmFatiga(TipoEje, CargaxFSC, MR, k, h, Bermas);
// console.log(r2);
