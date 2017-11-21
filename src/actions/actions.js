const sumar = suma => {
 return {
    type: 'SUMAR',
    num: suma
  }
} 

const restar = resta => {
    return {
        type: 'RESTAR',
        num: resta
      }
}



export {restar,sumar} 