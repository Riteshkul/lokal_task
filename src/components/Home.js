import React, { useState, useEffect } from "react";
import Headlines from "./Headlines";
import Header from "./Header";
import { Container, Button } from "react-bootstrap";
const Home = ({ data, isLoading, category }) => {
  const [items, setItems] = useState([]);
  const [articleCount, setarticleCount] = useState();
  const [isloading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  let [page, setpageNo] = useState(1);
  useEffect(() => {
    const getbaddata = async () => {
      setIsLoading(true);
      const result = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=a018bf892097482eab072784eed5dd84&q=${query}&pageSize=10`
      );
      const parsedresult = await result.json();

      setarticleCount(parsedresult.totalResults);
      setItems(parsedresult.articles);
      setIsLoading(false);
    };
    getbaddata();
  }, [query]);
  const updateNews=async()=>{
    const result = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=a018bf892097482eab072784eed5dd84&q=${query}&page=${
        page 
      }&pageSize=10`
    );
    const parsedresult = await result.json();
    console.log(parsedresult.articles);
    setItems(parsedresult.articles);
    setIsLoading(false);
  }
  const nextpage = async () => {
   
    setpageNo((page += 1));
    updateNews()
  };
  const previouspage = async () => {
    setpageNo((page -= 1));
    updateNews()
  };
  return (
    <>
      <Header getQuery={(q) => setQuery(q)} />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Headlines isLoading={isloading} data={items} />
          <Container className="d-flex justify-content-between my-3">
            <Button disabled={page <= 1} variant="dark" onClick={previouspage}>
              &larr; Previous
            </Button>
            <Button
              disabled={page >= Math.ceil(articleCount / 10)}
              variant="dark"
              onClick={nextpage}
            >
              Next &rarr;
            </Button>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
