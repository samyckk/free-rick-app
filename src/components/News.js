import React, { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

import Navbar from "./Navbar";

function News({ category }) {
  // const [page, setPage] = useState(1);
  const [articles, setArticle] = useState([]);
  // const [totalP, setTotalP] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticle(parsedData.articles);
      // setTotalP(parseInt(parsedData.totalResults));
      document.title = `Rick-News - ${
        category.charAt(0).toUpperCase() + category.slice(1)
      }`;
    }
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // const fetchMoreData = async () => {
  //   // Fetch more news data
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${
  //     page + 1
  //   }&pageSize=15`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   setPage(page + 1);

  //   // Concatenate new articles with the existing ones
  //   // setArticle(articles.concat(parsedData.articles));
  //   setArticle([...articles, ...parsedData.articles]);
  //   console.log("done");
  // };

  return (
    <>
      <Navbar />
      <div className="flex justify-center align-middle m-12 mt-28">
        <h1 className="md:text-6xl font-bold text-lg text-white">
          Top Headlines - {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>

      
        <div
          id="startNews"
          className="flex justify-center flex-wrap w-full flex-row"
        >
          {articles.map((element) => (
            <div key={element.url} id="main-content" className="w-96 m-3">
              <NewsItem
                title={
                  element.title.length > 0
                    ? element.title.slice(0, 45) + "..."
                    : element.title
                }
                imageUrl={element.urlToImage}
                itemDesc={
                  element.description
                    ? element.description.slice(0, 150) + "..."
                    : ""
                }
                url={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
        </div>
    </>
  );
}

export default News;
