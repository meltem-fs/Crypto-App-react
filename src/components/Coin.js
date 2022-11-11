import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Main from "./Main";

const Coin = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getApi = async () => {
    try {
      const { data } = await axios(url);
      // console.log(data);
      setCoin(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  
const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(text);
  };
  const filteredData = useMemo(() => {
    return coin?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [coin, search]);

  

  // console.log(search);

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <div className="container">
        <Main key={filteredData.id} data={filteredData} />
      </div>
    </div>
  );
};

export default Coin;
