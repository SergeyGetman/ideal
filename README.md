#### start
install all packages
`npm i`

---
#### dev

`npm run dev` - hotreload frontend mode
application start on localhost:9001

`npm run start` - build dev mode with watch

`npm run build` - build production mode
all files (styles, images, fonts, js, html) compiled in dist folder


---

#### i18n

Для переводов используется `ttaq`. При инициализации приложения считывается кука, если её нет, используется локаль по умолчанию (en).
При использовании любой другой локали все строки в коде завернутые в `{t``}` будут переведены, в случае существования на них переводов  в json файле
Также `ttaq` позволяет использовать pluralize для множественных форм текста.
Документация - https://ttag.js.org/

Добавить локаль (для примера fr)
`npx ttag init fr src/i18n/fr.po`

Для обновления переводов нужно обновить po файл командой
`npx ttag update src/i18n/de.po src/`
`npx ttag update src/i18n/es.po src/`
`npx ttag update src/i18n/fr.po src/`
`npx ttag update src/i18n/hi.po src/`
`npx ttag update src/i18n/id.po src/`
`npx ttag update src/i18n/it.po src/`
`npx ttag update src/i18n/ja.po src/`
`npx ttag update src/i18n/ko.po src/` 
`npx ttag update src/i18n/ms.po src/`
`npx ttag update src/i18n/pl.po src/` 
`npx ttag update src/i18n/pt.po src/`
`npx ttag update src/i18n/th.po src/`
`npx ttag update src/i18n/vi.po src/`
`npx ttag update src/i18n/zh.po src/`
`npx ttag update src/i18n/uk.po src/`
И все строки требующие перевода попадут в po файлы.
Далее можно вручную добавить нужные переводы 
