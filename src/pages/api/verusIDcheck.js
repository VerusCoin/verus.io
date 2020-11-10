// In: /getid/?id=<identity>
// out: Identity information

const fetchID = async (query) => {
  let url = `https://verify.verus.tools/getid/?id=${query.id}`;
  try {
    let result = await fetch(url);
    let data = await result.json();
    return data;
  } catch (error) {
    return { result: null, error: { code: -5, message: 'network issue' } };
  }
};

export default async (req, res) => {
  let result = await fetchID(req.query);
  if (!result.error) {
    res.statusCode = 200;
    res.json(result);
  } else {
    res.statusCode = 200;
    res.json(result);
  }
};
