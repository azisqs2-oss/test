const express = require('express');
const app = express();
const data = {
	name: "황동현",
	age: "23",
	school: "인하공업전문대학",
	dep: "정보통신공학과",
	food1: "짜장면",
	food2: "파스타",
	food3: "라면"
};
function renderPage(title, content) {
    return `
        <!DOCTYPE html>
        <html lang='ko'>
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body { background-color: lightgray; color: black; text-align: center; margin: 0;  display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; }
                h1 { font-size: 40px; margin-bottom: 10px; }
		p { font-size: 24px; }
            </style>
        </head>
        <body>
            ${content}
        </body>
        </html>
    `;
}
app.get('/', (req, res) => {
    const content =`
	    <h1>소개 페이지</h1>
            <p>
                <a href="/profile">프로필</a> / 
                <a href="/food">좋아하는 음식</a>
            </p>
    `;
	res.send(renderPage('홈', content));
});

app.get('/profile', (req, res) => {
    const content=`
            <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="프로필">
	    <p>이름: ${data.name}</p>
	    <p>나이: ${data.age}</p>
	    <p>학교: ${data.school}</p>
	    <p>학과: ${data.dep}</p>
	    <a href="/">돌아가기</a>
	    `;
	res.send(renderPage('프로필', content));
});

app.get('/food', (req, res) => {
    const content=`
    <img src="https://cdn-icons-png.flaticon.com/512/1405/1405021.png" alt="음식">
    <p>1. ${data.food1}<img src="https://cdn-icons-png.flaticon.com/512/2090/2090248.png" alt="음식1" width="100" height="100"></p>
    <p>2. ${data.food2}<img src="https://cdn-icons-png.flaticon.com/512/4727/4727368.png" alt="음식2" width="100" height="100"></p>
    <p>3. ${data.food3}<img src="https://cdn-icons-png.flaticon.com/512/2276/2276941.png" alt="음식3" width="100" height="100"></p>
    <a href="/">돌아가기</a>
    `;
	res.send(renderPage('프로필', content));
});


app.listen(3000, () => {
    console.log('http://localhost:3000');
});
