/**
 * @desc 获取数据类型
 * @param { Object } object 待判断数据
 * @return {String} 类型(类名称)
 */
export function getType(object: any): string {
  return Object.prototype.toString.apply(object).match(/\s(\w*)/)[1];
}

/**
 * @desc 是否是某个特定类型
 * @param { Object } object 待判断数据
 * @param {string} type 类型
 * @return {Boolean}
 */
export function isType(object: any, type: string): boolean {
  return Object.prototype.toString.apply(object).match(/\s(\w*)/)[1] === type;
}
