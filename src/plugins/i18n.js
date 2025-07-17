import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
    locale: savedLocale,
    fallbackLocale: 'en',
    messages: {en},
})

export const loadLocaleMessages = async (locale) => {
    const messages = await import(`../locales/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
    localStorage.setItem('locale', locale || 'en');
    return messages;
}

export default i18n