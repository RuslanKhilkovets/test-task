Зроблено:
    авторизацію
    підключено reCAPTCHA(v2) (для v3 треба мати домен)
    гугл аналітику
    використано компоненти з mui
    підключено favicon 
    підключено файли конфігурації середовища .env (з них витягуються дані які використовуються при авторизації)
    підключено mock-backend (json-server)
    створено сторінки помилок для неіснуючої сторінки (404) та для помилок на стороні сервера (500)
    зроблено локалізацію за допомогою ліби next18-react


Проект не дороблено до кінця, пошук у формі не працює, пдф рендериться з статичних даних
тому, що не вдалося отримати дані з useParams

;)

проект запускається командою npm run dev, зразу запускаються 2 сервери, 1 з додатком, 2 з json для парсингу з нього даних;