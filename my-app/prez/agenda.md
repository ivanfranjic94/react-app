## 1.dan

- [ ] JS prezentacija
    - [ ] Prezentacija
    - [ ] Rjesavanje zadataka
- [ ] React prezentacija 
- [ ] Kreiranje prve aplikacije
    - [ ] Kreirat aplikaciju
    - [ ] Prodiskutirat kaj je sve unutra
    - [ ] Sloziti .gitignore
    - [ ] Commitat aplikaciju
    - [ ] Pokrenut aplikaciju
    - [ ] Instalirat react dev tools
- [ ] ESlint i Prettier
    - [ ] Dodavanje `npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier`
    - [ ] Dodajeno
  ```
        extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier, eslintPluginPrettierRecommended],
  ```
    - [ ] Dodajeno
  ```
            "prettier/prettier": [
                "warn",
                {
                    endOfLine: "auto",
                },
            ],
            "@typescript-eslint/no-unused-expressions": ["warn"],
            "@typescript-eslint/no-unused-vars": ["warn"],
  ```
- [ ] Kreiranje Welcome screena
- [ ] Igranje
    - [ ] Obrisat sve
    - [ ] Dodat neki svoj tekst koji dolazi iz varijable
    - [ ] Dodat gumb i state da se napravi neki toggle
- [ ] Kreiranje prvih komponenti
    - [ ] Prebacit sve to iz App u zasebnu komponentu (bitno da imamo neki prop)
    - [ ] ZADATAK: Napravit Button i Title komponentu
    - [ ] ZADATAK: Napravit NavBar komponentu 

## 2.dan

- [ ] Ponavljanje stvari od dana prije
- [ ] ZADATAK: Napraviti komponentu koja prima

  ```js
  {
  src: string;
  type: string;
  title: string;
  duration: string;
  }
  ```

- [ ] Dodajemo listu koja se rendera
    - [ ] Dodajemo 1 element koji ima sve ovo kaj prima ko propove
    - [ ] Radimo isto s listom KEY PROP
- [ ] Uredujemo aplikaciju da lijepo izgleda ovo kaj smo napravili
- [ ] Button mijenjamo tako da prima children, label stavljamo da je Child
- [ ] Hooks i context dio preze
- [ ] radimo language picker - Koristimo context 
  - [ ] Prvo radimo select 
  - [ ] Radimo context
  - [ ] Mijenjamo title i days u karticama
- [ ] Router preza
- [ ] Dodajemo react router
  - [ ] `npm i react-roter`
- [ ] Kreiramo formu za prijavu korisnika
  - [ ] ZADATAK: Napravit sami input field

## 3.dan

- [ ] Ponavljanje stvari od dana prije
- [ ] Prezentacija o komunikaciji REST-om
- [ ] GET
  - [ ] Prvi poziv
  - [ ] Spremanje u state
  - [ ] ZADATAK: Dohvat courses
- [ ] POST
  - [ ] route param
  - [ ] Slanje requesta iz forme
- [ ] ZADATAK: Uber
  - [ ] Napravit novi page
  - [ ] Dohvatit listu polaznika
  - [ ] Prikaz liste polaznika
- [ ] Error handling
  - [ ] Greske u requestu
  - [ ] Error boundry
- [ ] Validacija
- [ ] Deployment prezentacija 
- [ ] Anketa

