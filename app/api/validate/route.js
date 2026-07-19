const ANATOMY_IDS = ["liver", "gallbladder", "cystic-duct", "common-hepatic-duct", "common-bile-duct"];

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch (err) {
    return Response.json({ valid: false, message: 'Invalid JSON body' }, { status: 400 })
  }

  const { object_name } = body

  if (!object_name || typeof object_name !== 'string') {
    return Response.json({ valid: false, message: 'object_name is required and must be a string' }, { status: 400 })
  }

  if (!ANATOMY_IDS.includes(object_name)) {
    return Response.json({ valid: false, message: `Unknown object: ${object_name}` }, { status: 400 })
  }

  return Response.json({ valid: true, message: `${object_name} is a valid anatomy object.` })
}