
const handler = async (event) => {
  const a = event.queryStringParameters.num1
  const b = event.queryStringParameters.num2

  let numero1 = parseInt(a)
  let numero2 = parseInt(b)

  try {

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `El resultado de ${a} + ${b} es ${numero1 + numero2}` }),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
