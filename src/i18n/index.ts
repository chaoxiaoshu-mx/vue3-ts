/*
 * @Author: chaoxiaoshu-mx leukotrichia@163.com
 * @Date: 2023-03-06 11:05:48
 * @LastEditors: chaoxiaoshu-mx leukotrichia@163.com
 * @LastEditTime: 2023-03-06 11:50:34
 * @FilePath: \my-vue-app\src\i18n\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

const messages = {
    zh,
    en
}

const language = (navigator.language || 'zh').toLocaleLowerCase() // 获取浏览器的语言
const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || language.split('-')[0] || 'zh', // 首先从缓存里拿，没有的话就用浏览器语言,
    messages
  });
  export default i18n;