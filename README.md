# arta
# arta
Exe
npm install --save-dev electron-packager
npm run pack
npm install
https://chatgpt.com/g/g-p-6803cd111dcc8191ae7284acc72de4ec-tests-refactor-main-page/c/6803d32d-7248-8000-a01d-af28a3449a96  якщо не працює електрон 1. Видали старий node_modules і package-lock.json
bash
КопіюватиРедагувати
rm -rf node_modules package-lock.json
(не переживай, це стандартно для таких збоїв)
2. Встанови все з нуля, включаючи electron
   bash
   КопіюватиРедагувати
   npm install
   Перевір у package.json, що в тебе є:
   json
   КопіюватиРедагувати
   "devDependencies": {
   "electron": "^27.1.1",
   ...
   }

3. І ТІЛЬКИ після нормальної установки запусти:
   bash
   КопіюватиРедагувати
   npm run electron
 понизити vite npm install vite@4.4.9 --save-dev  