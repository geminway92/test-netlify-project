
const handler = async (event) => {
  const a = event.queryStringParameters.num1
  const b = event.queryStringParameters.num2
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `El resultado de ${a} + ${b} es ${a + b}` }),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
