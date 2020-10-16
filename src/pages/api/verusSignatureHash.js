// In: /verifymessage/?message=<message>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

// In: /verifyhash/?hash=<filehash>&signer=<signer>&signature=<signature>
// out: { valid : true|false }

const FetchHash = async (query) => {
  let signer = encodeURI(query.Identity);
  let url = `https://verify.verus.tools/verifyhash/?hash=${query.Hash}&signer=${signer}&signature=${query.Signature}`;
  try {
    let result = await fetch(url);
    let data = await result.json();
    return data;
  } catch (error) {
    return { message: 'invalid request or not a valid message' };
  }
};

export default async (req, res) => {
  let result = await FetchHash(req.body);

  if (!result.error) {
    res.json(result);
  } else {
    res.statusCode = 401;
    res.json(result);
  }
};
