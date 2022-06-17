const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.jhxqo.mongodb.net/?retryWrites=true&w=majority', function (에러, client) {

})


// 어디에 열지 명시
app.listen(8080, function () {
    // 8080으로 열리면 ~를 출력해주세요
    console.log('listening on 8080')
});


// 누군가 /pet으로 방문을 하면~
// 관련된 안내문 띄우기

// '/'은 메인페이지
app.get('/', function (요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
});

app.get('/write', function (요청, 응답) {
    응답.sendFile(__dirname + '/write.html')
});

app.get('/beauty', function (요청, 응답) {
    응답.send('뷰티용품 쇼핑 할 수 있는 사이트입니다');
});


// /add 경로로 POST요청을 하면
// ~~ 해주세요
app.post('/add', function (요청, 응답) {
    응답.send('전송완료')


    // input에 적은 정보는 '요청'에 저장되어 있음
    // 꺼내오려면 body-parser
    // 요청.body하면 form에 입력된 정보를 서버에 전달
    console.log(요청.body.title)
    console.log(요청.body.date)


    // 영구 저장하기
    // DB에 저장해주세요~
    // restAPI??

});
