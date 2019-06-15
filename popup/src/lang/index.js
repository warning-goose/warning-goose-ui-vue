
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocal from './en'
import frLocal from './fr'

//import {LANGUAGE_TYPE} from "~/constant/constant";

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocal
    },
    fr: {
        ...frLocal
    }
}

let i18nLang = navigator.language || navigator.userLanguage
window.console.log(`Detected language: ${i18nLang}`)
if (!messages[i18nLang]) {
    i18nLang = i18nLang.replace(/-.*/,'')
}
if (!messages[i18nLang]) {
    i18nLang = "en" // default
}
window.console.log(`Used language: ${i18nLang}`)


const i18n = new VueI18n({
    // set locale
    // options: en | zh
    locale: i18nLang,
    // set locale messages
    messages
})

export default i18n

