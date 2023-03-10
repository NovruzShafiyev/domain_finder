import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/style.scss";

const menu = (
  <Menu
    items={[
      {
        label: (
          <span>
            Only domain <input type="checkbox" />
          </span>
        ),
        key: "0",
      },
      {
        label: (
          <span>
            Other options <input type="checkbox" />
          </span>
        ),
        key: "1",
      },
    ]}
  />
);

const SearchingBox = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === "home") {
      navigate("/");
    } else if (searchQuery.toLowerCase() === "content") {
      navigate("/content");
    } else if (searchQuery.toLowerCase() === "detail") {
      navigate("/detail");
    } else if (searchQuery.toLowerCase() === "searchresult") {
      navigate("/SearchResult");
    } else {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="search">
      <div className="select">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a href=" " onClick={(e) => e.preventDefault()}>
            <Space>
              <b>Resources</b>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div className="searchbox">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search something..."
          spellCheck={false}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <button className="search_btn" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchingBox;
