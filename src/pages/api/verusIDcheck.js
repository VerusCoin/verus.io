const fetchID = async (query) => {
  let url = `https://verusverify.pleiades.dev/getid/?id=${query.id}`;
  try {
    let result = await fetch(url);
    let data = await result.json();
    return data;
  } catch (error) {
    console.error('error in verusIDcheck', error);
    return { error: 'invalid request or not a valid verusID' };
  }
};

export default async (req, res) => {
  let result = await fetchID(req.query);

  if (!result.error) {
    res.statusCode = 200;
    res.json(result);
  } else {
    res.statusCode = 401;
    res.json(result);
  }
};
