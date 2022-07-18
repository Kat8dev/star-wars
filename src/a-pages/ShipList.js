import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ShipItem from "../components/ShipItem";
import ClipLoader from "react-spinners/ClipLoader";


const ShipList = () => {
	const [ships, setShips] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios.get(`https://swapi.dev/api/starships/?page=${page}`).then((res) => {
			setShips((prev) => prev.concat(res.data.results));
		});
	}, [page]);

	return (
		<>
			{ships.length > 0 ? (
				<div>
					<InfiniteScroll
						dataLength={ships.length}
						hasMore={true}
						next={() => setPage((prev) => prev + 1)}
					>
						{ships.map((item) => {
							return (
								<ShipItem
									id={GetUrlId(item.url)}
									name={item.name}
									model={item.model}
								/>
							);
						})}
					</InfiniteScroll>
				</div>
			) : (
				<ClipLoader color={"#aaa"} cssOverride={override} size={150} />
			)}
		</>
	);
};
export default ShipList;

const GetUrlId = (url) => {
	let urlId = url.match(/\d+/g);
	return urlId[0];
};

const override = {
	display: "block",
	margin: "300px auto",
	borderColor: "#aaa",
};
