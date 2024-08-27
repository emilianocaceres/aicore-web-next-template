import { PathInto } from '@/types/utility-types.type';


const DEFAULT_LANG: TSupportedLangs = 'es';

export const dictionaries = {
    es: () => import('./es.json').then((module) => module.default),
};

export type TSupportedLangs = keyof typeof dictionaries;

export const supportedLangs = Object.keys(dictionaries) as TSupportedLangs[];

export const getDictionary = async (lang: TSupportedLangs = DEFAULT_LANG) => {
    const dictionary = await dictionaries[lang]();

    return dictionary;
};

//
// Helper types
//

export type i18nKeysMap = Awaited<ReturnType<(typeof dictionaries)[typeof DEFAULT_LANG]>>;

export type i18nKeys = PathInto<i18nKeysMap>;

type TDataKeysMap = Awaited<ReturnType<(typeof dictionaries)[keyof typeof dictionaries]>>['data'];

export type TDataKeys = keyof TDataKeysMap;
