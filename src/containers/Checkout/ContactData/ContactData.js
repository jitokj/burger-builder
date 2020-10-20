import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

import React, { Component } from "react";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderhandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "jito",
        address: {
          street: "kochi",
          pincode: "682021",
          country: "India",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="your Mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="your Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="your PostalCode"
        />
        <Button btnType="Success" clicked={this.orderhandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
