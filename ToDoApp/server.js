const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb+srv://admin:581583tntn^^M@cluster0.jhxqo.mongodb.net/?retryWrites=true&w=majority', function (에러, client) {
    // 에러가 발생하면
    if (에러) { return console.log(에러) }

    // 접근할 DB연결
    db = client.db('ToDoApp');

    app.post('/add', function (요청, 응답) {
        응답.send(요청.body.title, 요청.body.date)

    })

    // post라는 collection에 넣을게요
    // 데이터마다 __id 부여해야함 (안하면 임시로 부여됨)
    db.collection('post').insertOne({ 이름: 'John', 나이: 20, _id: 100 }, function (에러, 결과) {
        console.log('저장완료');
    });

    // DB에 연결
    app.listen(8080, function () {
        console.log('listening on 8080')
    });
})


// 누군가 /pet으로 방문을 하면~
// 관련된 안내문 띄우기
// '/'은 메인페이지
app.get('/', function (요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
});

app.get('/write', function (요청, 응답) {
    응답.sendFile(__dirname + '/write.html')
});

// /list로 접속하면 HTML을 보여줌
app.get('/list', function (요청, 응답) {
    응답.render('list.ejs')
});



// 어떤 사람이 /add 경로로 post 요청을 하면,
// 데이터 2개 (날짜, 제목)을 보내주고,
// 이때 'post'라는 이름을 가진 collection에 데이터 저장하기
app.post('/add', function (요청, 응답) {
    응답.send('전송완료')


    // input에 적은 정보는 '요청'에 저장되어 있음
    // 꺼내오려면 body-parser
    // 요청.body하면 form에 입력된 정보를 서버에 전달
    console.log(요청.body.title)
    console.log(요청.body.date)


    db.collection('post').insertOne({ 제목: 요청.body.title, 날짜: 요청.body.date }, function (에러, 결과) {
        console.log('저장완료')
    })
});
