import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

// const handleHome = (req, res) => res.send("Hello from my heart!");

// const handleProfile = (req, res) => res.send("You are on my profile.");

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

//
/*MIDDLEWARES
* Morgan(middleware) : logging(무슨 일이 어디서 일어났는지 기록)
 - npm install morgan
 - import morgan from "morgan";
 - app.use(morgan());
 - 인자로 로깅 옵션 설정 가능
   - "tiny", "combined", "common", "dev"

* helmet(middleware) : node.js 앱 보안에 도움
 - npm install helmet
 - import helmet from "helmet"
 - app.use(helmet());

* middleware로 연결(connection) 끊기
 - 미들웨어가 res.send 호출하면 거기서 연결 끝

* cookie parser(middleware) : session을 다루기 위해 cookie에 사용자 정보 저장
 - npm install cookie-parser
 - import cookieParser from "cookie-parser";
 - app.user(cookiePaerser());

* body parser(middleware) : form 데이터 가진 request object에 접근
 - npm install body-parser
 - import bodyParser from "body-parser";
 - app.use(bodyParser());
 - 옵션
   - json : bodyParser.json();
   - html : bodyParser.urlencoded({extended:true});*/
// app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// const middleware = (req, res, next) => {
//   console.log("Not Happening");
//  next()안부르면 미들웨어가 다음것을 못불러오게할수있음. app get 에 넣어주삼.
// };

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
