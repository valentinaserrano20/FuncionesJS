// Esta funcion recibe un 'elemento' y nos dice si es un numero valido
export const esNumero = (elemento) => {
  // Usamos 'typeof' para preguntar de que tipo es el dato
  /* usamos una  condicion para verificar que el tipo sea 'number' */
  if (typeof elemento === 'number') {
    // Luego verificamos que NO sea NaN (no es un numero) esto para que no pueda ingresar un string
    if (!isNaN(elemento)) {
      // Si pasa ambas pruebas, devolvemos true
      return true;
    }
  }
  // Si no cumple lo anterior, devolvemos false
  return false;
}

// Funcion para validar si es texto y no numero, ademas de no ser un texto vacio
export const esTexto = (elemento) => {
  // Primero verificamos que sea de tipo string
  if (typeof elemento === 'string') {
    // Luego verificamos que NO sea un texto vacio
    if (elemento.length === 0) {
      return false;
    }
    /* usamos un condicional para que el texto valide que no es un numero */
    if (isNaN(Number(elemento))) {
      
      return true;
    }
    // Si resulta ser un texto disfrazado de numero, devolvemos false
    return false;
  }
  // Si no es string, devolvemos false
  return false;
}
