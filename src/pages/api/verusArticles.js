export default async (req, res) => {
  let result = await fetch(
    'https://medium-f.herokuapp.com/api/v1/articles?orgid=veruscoin'
  );
  let articles = await result.json();
  let data = articles.articles.splice(0, 3);
  if (!data) {
    res.statusCode = 200;
  } else {
    res.statusCode = 401;
    res.json(data);
  }
};
