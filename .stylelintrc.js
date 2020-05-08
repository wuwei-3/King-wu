/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-03-10 14:50:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-25 14:07:13
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'rule-empty-line-before': 'never',
    'string-quotes': 'single',
    indentation: 2,
    'selector-pseudo-element-colon-notation': 'single',
    'no-descending-specificity': null,
    'value-list-comma-newline-before': 'always-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never-single-line',
    'color-named': 'always-where-possible',
    'function-blacklist': ['/^rgb/', '/^hsl/', 'gray'],
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null
  }
};
