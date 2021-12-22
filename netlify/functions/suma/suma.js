// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
function suma(a,b){
  return `La resultado de ${a} + ${b} es ${a+b}`
}

const handler = async (a,b) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `La resultado de ${a} + ${b} es ${a+b}`}),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
