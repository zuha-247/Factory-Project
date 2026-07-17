export async function POST(request) {
  const body = await request.json()
  const { object_name } = body

  const correctAnswer = 'cystic_duct'

  if (object_name === correctAnswer) {
    return Response.json({ valid: true, message: 'Correct!' })
  } else {
    return Response.json({ valid: false, message: 'Incorrect, try again.' })
  }
}