import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = "News Monkey - " + capitalizeFirstLetter(props.cat);
  const apikey = "ebiluCGvEZ67p9B6Jv5LUQ4NwrryPCjp4fKtLdJK";
  const noImg = "https://i.ibb.co/V2sZm4L/5ee772d099588c0004aa684b-1.png";
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true)
  const fetchData = async (inti) => {

    const url = `https://api.thenewsapi.com/v1/news/all?language=hi,en&locale=in&categories=${props.cat}&page=${page}&api_token=${apikey}`;
    props.lode(30);
    let Data = await fetch(url);
    let parseData = await Data.json();
    setData(data.concat(parseData.data));
    console.log(parseData);
    console.log("Facted data of : " + page);
    setLoading(false)
    console.log(parseData.meta.found / parseData.meta.returned >= page)
    setHasMore(parseData.meta.found / parseData.meta.returned >= page)
    props.lode(100);
  };

  useEffect(() => {
    fetchData(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="px-3">
      <h2 className="my-3 text-center Monky">
        Monky News : TOP {capitalizeFirstLetter(props.cat)} Headlines
      </h2>


      {page === 1 && loading && <Spinner />}

      <InfiniteScroll
        dataLength={data.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<Spinner />}

      ><div className="grid-container">
          {
            // !loading &&
            data.map((element, i) => {
              return (
                <div key={i} >
                  <NewsItem key={element.uuid} data={element} noImg={noImg} />
                </div>
              );
            })
          }
        </div> </InfiniteScroll>

      {/* <div className="d-flex justify-content-between my-3">
        <button
          type="button"
          className="btn btn-dark "
          onClick={handelOnPrev}
          disabled={page === 1}
        >
          Previpous
        </button>
        <button type="button" className="btn btn-dark " onClick={handelOnNext}>
          Next
        </button>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="btn btn-primary">{page}</div>
      </div> */}
    </div>
  );
};

export default News;

News.defaultProps = {};
