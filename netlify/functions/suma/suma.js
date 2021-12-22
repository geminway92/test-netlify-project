// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
function suma(a,b){
  return `La resultado de ${a} + ${b} es ${a+b}`
}

const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: suma() }),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
