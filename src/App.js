import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "19680826",
    gender: "남자",
    job: "직원",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이미숙",
    birthday: "1911116",
    gender: "여자",
    job: "학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "나잘난",
    birthday: "20001826",
    gender: "남자",
    job: "개발자",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
