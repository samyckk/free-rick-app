import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Load from "./Load";
import Navbar from "./Navbar";

function News({ category }) {
  const apiKey = "e349a462053b4aa9ac6792cc68c137c4"; //alwaystom
  // const apiKey = "8725b8acf4924d0786ab9245075dd7e0"; //samyck
  const [page, setPage] = useState(1);
  const [articles, setArticle] = useState([]);
  const [totalP, setTotalP] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticle(parsedData.articles);
      setTotalP(parseInt(parsedData.totalResults));
      document.title = `Rick-News - ${
        category.charAt(0).toUpperCase() + category.slice(1)
      }`;
    }

    fetchNews();
  }, [category]);

  const fetchMoreData = async () => {
    // Fetch more news data
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setPage(page + 1);

    // Concatenate new articles with the existing ones
    // setArticle(articles.concat(parsedData.articles));
    setArticle([...articles, ...parsedData.articles]);
    console.log("done");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center align-middle m-12 mt-28">
        <h1 className="text-6xl">
          Top Headlines - {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={page < Math.ceil(totalP / 15)}
        loader={<Load />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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
      </InfiniteScroll>
    </>
  );
}

export default News;
