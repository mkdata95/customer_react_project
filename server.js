const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`서버의 동작 포트는 ${port}`));
