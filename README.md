# IntelliLearn
> **IntelliLearn** este o platformă educațională inovatoare care utilizează tehnologia pentru a transforma modul în care învățământul se desfășoară în era digitală. Cu ajutorul unei inteligențe artificiale puternice și a unei suite de instrumente EdTech, IntelliLearn își propune să îmbunătățească experiența de învățare, accesibilitatea și implicarea studenților.
> La IntelliLearn, ne concentrăm pe valorificarea tehnologiei educaționale pentru a îmbunătăți experiențele de învățare, accesibilitatea și implicarea studenților. Ne dorim să creăm un mediu educațional care să fie captivant, personalizat și interactiv.
## Caracteristici principale:

     - MinaAI - Asistența AI: Cu ajutorul MinaAI, o inteligență artificială puternică, elevii și mentori pot comunica într-un chat public dedicat membrilor clasei. MinaAI poate oferi asistență în timp real și feedback automat pe baza codului introdus.
     - Atribuiri și Rezolvare de Sarcini: Mentori pot asigna sarcini și exerciții de algoritmă și codare direct pe platformă. Elevii pot rezolva aceste sarcini, iar serverul va verifica automat codul, oferind feedback instantaneu.
     - Interacțiune Socială și Colaborare: Chatul public permite membrilor clasei să discute întrebări sau probleme legate de materie, să colaboreze și să învețe unii de la alții într-un mediu interactiv.
     - Verificare și Feedback Automat: Sistemul automat de verificare a codului asigură că toate testele sunt trecute și oferă feedback detaliat pentru a ajuta elevii să-și îmbunătățească abilitățile de programare.
    
 ## Beneficii:
     - Eficiență sporită: Procesul automatizat de atribuire și evaluare a sarcinilor economisește timp atât elevilor, cât și mentorilor.
     - Personalizare: Feedback-ul automat și interacțiunea cu MinaAI permit un proces de învățare personalizat, adaptat la nevoile și ritmul fiecărui elev.
     - Accesibilitate: Prin intermediul unei platforme online, IntelliLearn oferă acces la educație de calitate indiferent de locație sau program.
## Instalare:
     - Instalati nodejs de [aici](https://nodejs.org/en/download/current) sau printr-un interpretator de comenzi. Daca aveti deja, nu este necesara reinstalarea acesteia.
     - Intrati in ambele directoare (client si server) pentru a instala package-urile, folosind comanda npm install si setati enviroment variables, stabilite asa:
     > ./server/.env
     MONGO_DB = string connection pentru conectarea la baza de date
     SECRET_KEY = pentru tokenul principal de jwt
     SECOND_SECRET_KEY = pentru tokenul de refreshing jwt (rotirea tokenilor)
     OpenAI = key pentru api-ul celor de la OpenAI
     > ./client/.env
     REACT_APP_TINYMCE = key pentru api-ul celor de la TinyMCE
 ## Screenshots:
 	You can see each screnshoot in the repo.
 ## Used techologies:
 	- Frontend:
 	> ReactJS, TanStack Query, Tailwind, NextUI, MUI
 	- Backend:
 	> NodeJS, ExpressJS, OpenAI, MongoDB
