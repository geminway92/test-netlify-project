function isMayor(n1,n2,n3,n4,n5,n6) {

}

const handler = async (event) => {
  try {
    const totalNumber =[]
    const num1 = totalNumber.push(event.queryStringParameters.num1)
    const num2 = totalNumber.push(event.queryStringParameters.num2)
    const num3 = totalNumber.push(event.queryStringParameters.num3)
    const num4 = totalNumber.push(event.queryStringParameters.num4)
    const num5 = totalNumber.push(event.queryStringParameters.num5)
    const num6 = totalNumber.push(event.queryStringParameters.num6)
    console.log(totalNumber)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${totalNumber}` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
