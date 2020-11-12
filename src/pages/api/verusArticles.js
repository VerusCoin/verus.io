export default async (req, res) => {
  let result = await fetch(
    'https://medium-f.herokuapp.com/api/v1/articles?orgid=veruscoin'
  );
  let articles = null;
  let data = null;
  try {
      articles = await result.json();
      data = articles.articles.splice(0, 3);
  } catch (error) {
       console.error("error in articles", error)
  }
  if (!data) {
    res.statusCode = 200;
  } else {
    res.statusCode = 200;
    res.json(data);
  }
};
