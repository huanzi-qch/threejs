/**
 * 公用工具类
 */
export class CommonUtil {

    /**
     * 比较两个对象键值对是否相等
     */
    public static objIsEqual(obj1 ?: Object, obj2?: Object): boolean {

        let o1 = obj1 instanceof Object;
        let o2 = obj2 instanceof Object;
        if (!o1 || !o2) {
            return obj1 === obj2;
        }

        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let attr in obj1) {
            let t1 = obj1[attr] instanceof Object;
            let t2 = obj2[attr] instanceof Object;
            if (t1 && t2) {
                return this.objIsEqual(obj1[attr], obj2[attr]);
            } else if (obj1[attr] !== obj2[attr]) {
                return false;
            }
        }
        return true;
    }
}

//为了能够使用obj1[attr]
interface Object {
    [key: string]: any,
}

//canvas换行(参数：(上下文，显示的文本，文本初始X坐标，Y坐标，一行多少汉字长度))
// function drawText(context, t, x, y, w) {
//     let chr = t.split("");
//     let temp = "";
//     let row = [];//切割后的文本数组
//     let j = context.measureText('M').width;//一个汉字长度
//
//     for (let a = 0; a < chr.length; a++) {
//         if (context.measureText(temp).width < (j * w)) {
//         } else {
//             row.push(temp);
//             temp = "";
//         }
//         temp += chr[a];
//     }
//     row.push(temp);
//     for (let b = 0; b < row.length; b++) {
//         //180为字体大小，px
//         context.fillText(row[b], x, y + (b + 1) * 180);
//     }
// }