/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 20:57:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 20:57:44
 */
const markdown = require('markdown-it');

function markLoader(src) {
  const md = markdown({
    html: true,
    typographer: true,
  });
  const html = md.render(src);

  return (
    '<template>\n' + `<div class="markdown">${html}</div>\n` + '</template>\n'
  );
}

module.exports = markLoader;
