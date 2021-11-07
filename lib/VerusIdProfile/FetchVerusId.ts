interface Query {
  [key: string]: string | string[]
}

const FetchVerusId = async (query: Query) => {
  const endpoint = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getidentity`

  let result: Record<string, any> = {}
  try {
    result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identity: query.id }),
    }).then((res) => res.json())
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } }
  }

  if (result.identity) {
    return { result: result, error: null }
  } else {
    return {
      result: null,
      error: { error: result.error, message: result.error_detail },
    }
  }
}

export default FetchVerusId
