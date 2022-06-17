import React from "react";

const NewsItem = (props) => {
  const showContentof = (type, src) => {
    if (src == null) return `${type} is not avilable`;
    else return src;
  };

  let { data, noImg } = props;
  return (
    <div className="card bg-dark text-light">
      <img
        src={data.image_url === null ? noImg : data.image_url}
        className="card-img-top"
        alt="Loading/Null...."
      />
      <div className="card-body">
        <h5 className="card-title">{showContentof("Title", data.title)}</h5>
        <p className="card-text">
          {showContentof("description", data.description)}
        </p>
        <div className="dropdown dropdown-pp">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Read More
          </button>
          <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenu2">
            <li>
              <p className="content">
                {showContentof("sippet", data.snippet)}
                <a href={data.url} target="_blank" rel="noreferrer">
                  {" "}
                  Read More
                </a>
              </p>
            </li>
            <li>
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-info "
              >
                More..
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
