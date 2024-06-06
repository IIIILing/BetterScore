
        let clickCount = 0;

        function getRandomNumber() {
            const min = 10;
            const max = 50;
            const randomNumber = Math.floor(Math.random() * ((max - min) / 5 + 1)) * 5 + min;
            return randomNumber;
    }

        function displayRandomNumber() {
            if (clickCount >= 15) {
                const img = document.getElementById('btnImg');
                img.hidden = true;
                const randomNumberElement = document.getElementById('randomNumber');
                randomNumberElement.innerText = "别做白日梦了，赶紧复习去吧";
                randomNumberElement.style.fontSize = '2em'; // 设置大号字体
            } else {
                const randomNumber = getRandomNumber();
                const randomNumberElement = document.getElementById('randomNumber');
                randomNumberElement.innerText = `高考总分+ ${randomNumber} 分`;
                clickCount++;
            }
        }

        function show() {
            const img = document.getElementById('btnImg');
            img.hidden = false;
        }

window.oncontextmenu = () => false;
window.onkeydown = () => {
    if (window.event && window.event.keyCode == 123) {
        return false;
    }
    return false;
}
    document.write(Date());
    function time() {
    const date = new Data.getDate();
    const month = new Data.getMonth();
    const year = new Data.getFullYear();
    const hour = new Data.getHours();
    const minute = new Data.getMinutes();
    const second = new Data.getSeconds();
    year -= 2024;
    month -= 6;
    date -= 10;
    hour -= 16;
    minute -= 30;
    if (minute < 0) {
        minute += 60;
        hour -= 1;
    } else if (hour < 0) {
        hour += 24;
        date -= 1;
    } else if (date < 0) {
        date += 30;
        month -= 1;
    } else if (month < 0) {
        month += 12;
        year -= 1;
    }
    document.write("各位的高中生涯将在"+${year}+'年'+${month}+'月'+date+'日'+hour+'小时'+minute+'分钟'+second+'秒后结束');
}
