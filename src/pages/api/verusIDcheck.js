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
  // Check for vanity '@' before doing fetch
  let IDvariable = req.query;
  if (IDvariable.id.slice(-1) != '@') {
    IDvariable.id = IDvariable.id + '@';
  }
  let result = await fetchID(IDvariable);
  if (!result.error) {
    res.statusCode = 200;
    res.json(result);
  } else {
    res.statusCode = 200;
    res.json(result);
  }
};
