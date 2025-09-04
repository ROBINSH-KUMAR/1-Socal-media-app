import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/PostList";
import Forms from "./components/Forms";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Product from "./components/Product";
import { useState, useReducer } from "react";
import PostListProvide from "./Store/post-list-store";
import InstagramCard from "./components/InstagramCard";

const App = () => {
  const reducer = (selectedTab, action) => {
    switch (action.type) {
      case "Home": {
        return "Home";
      }
      case "Create Post": {
        return "Create Post";
      }
      case "Orders": {
        return "Orders";
      }
      case "Products": {
        return "Products";
      }
      case "Customers": {
        return "Customers";
      }
      default: {
        return selectedTab;
      }
    }
  };
  const [selectedTab, dispatch] = useReducer(reducer, "Home");
  let content;
  switch (selectedTab) {
    case "Home":
      content = <PostList />;
      break;
    case "Create Post":
      content = <Forms />;
      break;
    case "Products":
      content = (
        <>
          {" "}
          <Product />
        </>
      );
      break;
    case "Customers":
      content = (
        <>
          <InstagramCard />
        </>
      );
      break;
    case "Orders":
      content = <div className="a"> </div>;
      break;
    default:
      content = null;
  }

  return (
    <>
      <PostListProvide>
        <div className="app-container ">
          <Navbar selectedTab={selectedTab} dispatch={dispatch}></Navbar>
          <div className="content">
            <Header selectedTab={selectedTab} dispatch={dispatch}></Header>
            {content}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvide>
    </>
  );
};

export default App;
