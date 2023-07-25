import "./TopBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listItem" key={item.id}>
            <div className="users">
              <img src={item.img} alt="" />
              <div className="userTexts">
                <span className="userName">{item.username}</span>
                <span className="userEmail">{item.email}</span>
              </div>
            </div>
            <span className="amount">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
