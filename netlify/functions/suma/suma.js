// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
function suma(a,b){
  let suma = a + b
  return ` ${a+b}`
}

const handler = async (event) => {
  try {
    const resultado = suma()
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `El resultado es ${resultado}` }),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
