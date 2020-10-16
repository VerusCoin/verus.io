// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

const FetchMessage = async (query) => {
  let message = encodeURI(query.Message);
  let signer = encodeURI(query.Identity);
  let url = `https://verify.verus.tools/verifymessage/?message=${message}&signer=${signer}&signature=${query.Signature}`;
  try {
    let result = await fetch(url);
    let data = await result.json();

    return data;
  } catch (error) {
    return { message: 'invalid request or not a valid message' };
  }
};

export default async (req, res) => {
  let result = await FetchMessage(req.body);

  if (!result.error) {
    res.json(result);
  } else {
    res.statusCode = 401;
    res.json(result);
  }
};
