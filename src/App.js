import { useEffect, useState } from "react";
import axios from "axios";
import { SHIPS_WRAPPER, SHIP_BOX } from "./styled"
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const styles = {
    height: "100vh",
    backgroundSize: "cover",
    //backgroundImage: 'url(images/background3.PNG)',
    textAlign: "center",
    padding: "10px"
  }

  const [ships, setShips] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => {
        console.log(res)
        setShips((prev) => prev.concat(res.data.results))
      })
  }, [page])



 

  return (
    <div style={styles} className="App">
      <SHIPS_WRAPPER>
        <h1>Star Ships</h1>
        <InfiniteScroll
          dataLength={ships.length}
          hasMore={true}
          next={() => setPage((prev) => prev + 1)}
        >
          {ships.map(item => {
            return <SHIP_BOX key={item.model}>
              <p>{item.name}</p>
              <p>{item.model}</p>
            </SHIP_BOX>
          })}
        </InfiniteScroll>
      </SHIPS_WRAPPER>
    </div>
  );
}

export default App;

/*
import { useEffect, useState }  from "react";
import axios from "axios"; 
import { SHIPS_WRAPPER, SHIP_BOX} from "./styled"


const App = (_) => {
  const styles = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: 'url(images/background3.PNG)',
    textAlign: "center",
    padding: "10px"
  }

  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios
     .get(`https://swapi.dev/api/starships/?page=1`)
     .then((res) => {
      console.log(res)
      setShips(res.data.results)
    })
  }, [])

  return (
    <div style={styles}className="App">
      <SHIPS_WRAPPER>
        <h1>Star Ships</h1>
      {ships.map(item => {
        return <SHIP_BOX key={item.model}>
          <p>{item.name}</p>
          <p>{item.model}</p>
        </SHIP_BOX>
      })}
      </SHIPS_WRAPPER>
    </div>
  );
}

export default App;
 */