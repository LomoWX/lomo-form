/**
 * @name: utils
 * @author: weixin
 * @date: 2022/12/1 13:43
 * @description：utils
 * @update: 2022/12/1 13:43
 */

/**
 * @name getKebabCase
 * @author weixin
 * @date 2022/12/01 14:08:30
 * @description 将驼峰转为短横线
 * @update 2022/12/01 14:08:30
 */
export function getKebabCase(v) {
  return v.replace(/([^-])([A-Z])/g, '$1-$2').toLowerCase()
}
/**
 * @name: 短横线转驼峰
 * @author: weixin
 * @date: 2022/12/01 13:47:30
 * @description：短横线转驼峰
 * @update: 2022/12/01 13:47:30
 */
export function getCamelCase(v) {
  return v.replace(/-(\w)/g, (a, b) => b.toUpperCase())
}
/**
 * @name includesKey
 * @author weixin
 * @date 2022/12/01 14:56:46
 * @description 判断 数组是否存在 key
 * @update 2022/12/01 14:57:01
 */
export function includesKey(keys, key) {
  return keys.includes(getKebabCase(key)) || keys.includes(getCamelCase(key));
}
/**
 * @name: getProp
 * @author: weixin
 * @date: 2022/12/01 13:48:10
 * @description 获取 prop 值 ，以支持短横线，驼峰，两种写法
 * @update: 2022/12/01 13:48:10
 */
export function getProp(obj, key) {
  let key1 = getKebabCase(key);
  if (obj.hasOwnProperty(key1)) return obj[key1]
  let key2 = getCamelCase(key);
  if (obj.hasOwnProperty(key2)) return obj[key2];
}

/**
 * @name getIncludeAttrs
 * @author weixin
 * @date 2022/12/01 14:11:16
 * @description 从目标对象获取指定属性
 * @update 2022/12/01 14:11:16
 */
export function getIncludeAttrs(keys, target) {
  let obj = {};
  keys.forEach((key) => {
    let value = getProp(target, key);
    if (value !== undefined) obj[key] = value;
  });
  return obj;
}
/**
 * @name getExcludeAttrs
 * @author weixin
 * @date 2022/12/01 15:12:46
 * @description 从目标对象排除指定属性
 * @update 2022/12/01 15:12:46
 */
export function getExcludeAttrs(keys, target) {
  let obj = {};
  for (const key in target) {
    if (!includesKey(keys, key)) obj[key] = target[key];
  }
  return obj;
}
/**
 * @name getCustomProps
 * @author weixin
 * @date 2022/12/01 15:14:29
 * @description 获取自定义的 props
 * @update 2022/12/01 15:14:29
 */
export function getCustomProps(props, attrs) {
  const propsKyes = Object.keys(props);
  const defaultProps = {};
  propsKyes.forEach(k => {
    defaultProps[k] = typeof props[k].default == 'function' ? props[k].default() : props[k].default
  })
  return attrs ? Object.assign(defaultProps, getIncludeAttrs(propsKyes, attrs)) : defaultProps;
}
export const getArrItems = function (arr) {
  if (Array.isArray(arr)) {
    return arr.map(item => {
      item.prop = item.prop || "_lomoid_" + toGenerateId();
      return item;
    })
  } else {
    return Object.keys(arr).map(key => {
      arr[key].prop = arr[key].prop || key;
      return arr[key]
    })
  }
}
// 生成一个 id
/**
 * @name toGenerateId
 * @author weixin
 * @date 2022/12/01 15:17:24
 * @description
 * @update 2022/12/01 15:17:24
 */
export function toGenerateId() {
  return "xxxxxxxx".replace(/[x]/g, (c) => {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * @name extend
 * @author weixin
 * @date 2022/12/01 14:13:10
 * @description 继承属性 关联响应式
 * @update 2022/12/01 14:13:17
 */
export function extend(obj, target = {}, vueset, cover = false) {
  for (const key in target) {
    let a = getProp(obj, key) !== undefined && !cover;
    let b = getProp(target, key) === undefined;
    if (a || b) continue;
    vueset(obj, key, target[key]);
  }
}
/**
 * @name findRef
 * @author weixin
 * @date 2022/12/01 14:14:29
 * @description
 * @update 2022/12/01 14:14:29
 */
export function findRef(context, refName) {
  let ref = null;
  if (context.$refs[refName]) {
    ref = context.$refs[refName];
  } else {
    context.$children.every(vm => {
      ref = findRef(vm, refName);
      return ref === null;
    })
  }
  return Array.isArray(ref) && ref.length === 1 ? ref[0] : ref;
}
