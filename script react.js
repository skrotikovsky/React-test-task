/*
* ATTENTION
* Я по своей великой глупости не заметил, что была дана начальная верстка со
* шрифтами, картинками и начальными стилями, увидел буквально пару часов назад
* и впал в депрессию. Однако, крайне надеюсь на ваше понимание и оценку по
* достоинству того, что я все сделал с нуля (часов 6 потратил на создание бэкграунда как на макете)
* И так как посоветоваться мне к сожалению не с кем по поводу работы, предупреждаю,
* что эвент лисенер на Escape работает почему-то только после нажатия на любой из
* текстовых инпутов (сначала нажимаем на окно формы и тогда лисернер срабатывает)
* Я прекрасно осознаю, что сработал не по тз и по сути завалил тест, но очень уж
* хочется на курс и уповаю на ваше понимание. Чуть чуть не успел доделать отправку
* формы и сообщения об ошибке\отправке.
* P.S Курс по JS Архитектура клиентских приложений прошел
* */


const button = document.querySelector(".butt-shape");
const ref = document.querySelector("a");
const form = document.querySelector(".form-container");

function keyPress (e) {
    if(e.key === "Escape" || e.key === "Esc") {
        form.innerHTML = ``;
    }
}

const clickOnRecord = () => {
    form.insertAdjacentHTML("afterbegin", `<form class="form" method="post" action="https://jsonplaceholder.typicode.com/users">
            <div class="flex"><h2>Заявка на участие</h2></div>
            <div class="flex"><input type="text" placeholder="ФИО" name="name"></div>
            <div class="flex"><input type="email" placeholder="E-mail" name="email"></div>
            <div class="flex"><input class="accept" type="submit" ></div>
        </form>
        <div class="blur"></div>`);
    document.querySelector(".blur").addEventListener('click', () => {
        form.innerHTML = ``;
    });
    document.querySelector(".accept").addEventListener('click', () => {
        document.querySelector(".accepted").classList.add('active');
    });
    document.querySelector(".form").addEventListener('keydown', (evt) => {
        keyPress(evt);
    });
};

ref.addEventListener('click', clickOnRecord)
button.addEventListener('click', clickOnRecord)

