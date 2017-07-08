/**
 * Created by xltao on 2017/7/8.
 */
export default {
  /**
   * J获取dom绝对位置
   * @param obj dom
   * @returns {{x: number, y: number}}
   */
  getElemPos: function (obj) {
    if(!obj) {
      return null;
    }
    var pos = {"top": 0, "left": 0};
    if (obj.offsetParent) {
      while (obj.offsetParent) {
        pos.top += obj.offsetTop;
        pos.left += obj.offsetLeft;
        obj = obj.offsetParent;
      }
    } else if (obj.x) {
      pos.left += obj.x;
    } else if (obj.x) {
      pos.top += obj.y;
    }
    return {x: pos.left, y: pos.top};
  }
}
