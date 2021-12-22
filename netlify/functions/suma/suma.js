
const suma = async (a,b) => {
  try {

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${a}+${b} es ${a+b}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { suma }
