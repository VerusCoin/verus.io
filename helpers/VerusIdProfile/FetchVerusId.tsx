interface Query {
  [key: string]: string | Query | string[]
}

const FetchVerusId = async (query: Query) => {
  const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getidentity`
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identity: query.id }),
    }).then((res) => res.json())

    if (result.identity) {
      return { result: result, error: null }
    } else {
      return {
        result: null,
        error: { error: result.error, message: result.error_detail },
      }
    }
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } }
  }
}

export default FetchVerusId
