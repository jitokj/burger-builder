import React, { Component } from "react";
import Order from "../../components/Orders/Order";
import axios from "../../axios-orders";
import withErrorhandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedData });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
export default withErrorhandler(Orders, axios);
