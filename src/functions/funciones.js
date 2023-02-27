function NadmErosion(TipoEje, CargaxFSC, k, h, Bermas, Dovelas) {
  // TipoEje=int(tipoEje)

  const E = 4 * 10 ** 6; // Módulo de elasticidad del concreto en psi usado por la PCA
  const u = 0.15; // Relación de Poisson del concreto usada por la PCA
  let ele = ((E * h ** 3) / 12 / k / (1 - u ** 2)) ** 0.25; // Radio de rigidez relativa
  let C1 = 1 - (((k / 2000) * 4) / h) ** 2; // Factor de ajuste para subbase tratada o sin tratar
  let pc, f5, f6, f7, C2, deq, P, resultado;

  if (TipoEje === 1 && Bermas === 0 && Dovelas === 0) {
    pc = 1.571 + 46.127 / ele + 4372.7 / ele ** 2 - 22886 / ele ** 3;
  } else if (TipoEje === 2 && Bermas === 0 && Dovelas === 0) {
    pc = 1.847 + 213.68 / ele - 1260.8 / ele ** 2 + 22989 / ele ** 3;
  } else if (TipoEje === 3 && Bermas === 0 && Dovelas === 0) {
    pc =
      2.0252 +
      201.63 / ele +
      11.061 / ele ** 2 +
      1905 / ele ** 3 -
      13050 / ele ** 4;
  } else if (TipoEje === 1 && Bermas === 1 && Dovelas === 0) {
    pc = 0.5874 + 65.108 / ele + 1130.9 / ele ** 2 - 5245.8 / ele ** 3;
  } else if (TipoEje === 2 && Bermas === 1 && Dovelas === 0) {
    pc = 1.47 + 102.2 / ele - 1072 / ele ** 2 + 14451 / ele ** 3;
  } else if (TipoEje === 3 && Bermas === 1 && Dovelas === 0) {
    pc = 3.1386 + 12.915 / ele + 648.44 / ele ** 2 + 1450.3 / ele ** 3;
  } else if (TipoEje === 1 && Bermas === 0 && Dovelas === 1) {
    pc = -0.3019 + 128.85 / ele + 1105.8 / ele ** 2 + 3269.1 / ele ** 3;
  } else if (TipoEje === 2 && Bermas === 0 && Dovelas === 1) {
    pc = 1.258 + 97.491 / ele + 1484.1 / ele ** 2 - 180 / ele ** 3;
  } else if (TipoEje === 3 && Bermas === 0 && Dovelas === 1) {
    pc = 2.9687 + 48.452 / ele + 2547.9 / ele ** 2 - 14917 / ele ** 3;
  } else if (TipoEje === 1 && Bermas === 1 && Dovelas === 1) {
    pc = 0.018 + 72.99 / ele + 323.1 / ele ** 2 + 1620 / ele ** 3;
  } else if (TipoEje === 2 && Bermas === 1 && Dovelas === 1) {
    pc = 0.0345 + 146.25 / ele - 2385.6 / ele ** 2 + 23848 / ele ** 3;
  } else if (TipoEje === 3 && Bermas === 1 && Dovelas === 1) {
    pc = 1.0457 + 125.79 / ele - 2632.2 / ele ** 2 + 28563 / ele ** 3;
  }

  if (TipoEje === 1) {
    f5 = CargaxFSC / 18;
  } else if (TipoEje === 2) {
    f5 = CargaxFSC / 36;
  } else if (TipoEje === 3) {
    f5 = CargaxFSC / 54;
  }

  if (Dovelas === 0) {
    if (Bermas === 0) {
      f6 = 0.95;
    } else if (Bermas === 1) {
      f6 = 1.001 - (0.26363 - k / 3034.5) ** 2;
    }
  } else if (Dovelas === 1) {
    f6 = 1;
  }

  if (Bermas === 0) {
    f7 = 0.896;
    C2 = 0.06;
  } else if (Bermas === 1) {
    f7 = 1;
    C2 = 0.94;
  }

  deq = (pc * f5 * f6 * f7) / k;
  P = 268.7 * ((k ** 1.27 * deq ** 2) / h);

  if (C1 * P > 9) {
    resultado = Math.round(
      10 ** (14.524 - Math.log10(C2) - 6.777 * (C1 * P - 9) ** 0.103)
    );
  } else if (C1 * P <= 9) {
    resultado = "Ilimitadas";
  }

  return resultado;
}

function NadmFatiga(tipoEje, CargaxFSC, MR, k, h, bermas) {
  // tipoEje=int(tipoEje)

  const E = 4 * 10 ** 6; //psi
  const u = 0.15; //Relación de Poisson
  const CV = 0.15; //Coeficiente de variación
  const f3 = 0.894;
  const f4 = 1 / (1.235 * (1 - CV));

  let ele = ((E * h ** 3) / 12 / k / (1 - u ** 2)) ** 0.25; //Radio de rigidez relativa
  let Med, f1, f2, EsfEq, resultado;

  if (bermas == 0) {
    // 0 es No en la variable del RadioButton

    if (tipoEje == 1) {
      Med = -1600 + 2525 * Math.log10(ele) + 24.42 * ele + 0.204 * ele ** 2;
      f1 = (24 / 18) * (CargaxFSC / 24) ** 0.94;
    } else if (tipoEje == 2) {
      Med = 3029 - 2966.8 * Math.log10(ele) + 133.69 * ele - 0.0632 * ele ** 2;
      f1 = (48 / 36) * (CargaxFSC / 48) ** 0.94;
    } else if (tipoEje == 3) {
      Med = -0.0485 * ele ** 3 + 5.5793 * ele ** 2 - 135.53 * ele + 2339.9;
      if (CargaxFSC <= 75) {
        f1 = (CargaxFSC / 54) * (72 / CargaxFSC) ** 0.06;
      } else {
        f1 = (CargaxFSC / 54) * (72 / CargaxFSC) ** 0.08;
      }
    }
    f2 = 0.892 + h / 85.71 - h ** 2 / 3000;
  } else if (bermas == 1) {
    // 1 es Sí en la variable del RadioButton

    if (tipoEje == 1) {
      Med =
        (-970.4 + 1202.6 * Math.log10(ele) + 53.587 * ele) *
        (0.8742 + 0.01088 * k ** 0.447);
      f1 = (24 / 18) * (CargaxFSC / 24) ** 0.94;
      f2 = 1;
    } else if (tipoEje == 2) {
      Med =
        (2005.4 - 1980.9 * Math.log10(ele) + 99.008 * ele) *
        (0.8742 + 0.01088 * k ** 0.447);
      f1 = (48 / 36) * (CargaxFSC / 48) ** 0.94;
      f2 = 1;
    } else if (tipoEje == 3) {
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
