import * as $ from "jquery";

/**
 * 公用工具类
 */
export class CommonUtil {

    /**
     * 扩展方法
     */
    public static extentFun() {
        /**
         * 扩展数组方法：数组是否包含了该字符串
         */
        Array.prototype["contains"] = function (str) {
            return $.inArray(str, this) !== -1;
        };

        /**
         * 自动将form表单封装成json对象
         * 依赖jqury
         * 使用参考：let formJson = $("#form1").serializeObject();
         */
        $.fn["serializeObject"] = function () {
            let o = {};
            let a = this.serializeArray();
            $.each(a, function () {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };

        /**
         * 表单自动回显
         * 依赖jqury
         * 使用参考：$("#form1").form("load",{"id":"112","username":"ff","password":"111","type":"admin"});
         */
        $.fn["form"] = function (data) {
            let form = $(this);
            for (let i in data) {
                if (!data.hasOwnProperty(i)) continue;
                let name = i;
                let value = data[i];
                if (name !== "" && value !== "") {
                    valuAtion(name, value);
                }
            }

            function valuAtion(name, value) {
                if (form.length < 1) {
                    return;
                }
                if (form.find("[name='" + name + "']").length < 1) {
                    return;
                }
                let input = form.find("[name='" + name + "']")[0];
                if ($.inArray(input.type, ["text", "password", "hidden", "select-one", "textarea"]) > -1) {
                    $(input).val(value);
                } else if (input.type == " " || input.type == "checkbox") {
                    form.find("[name='" + name + "'][value='" + value + "']").attr("checked", "checked");
                }
            }

        };
    }

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

    /**
     * 获取当前时间，并格式化输出为：2018-05-18 14:21:46
     */
    public static getNowTime(): string {
        let time = new Date();
        let year = time.getFullYear();//获取年
        let month = time.getMonth() + 1;//或者月
        let day = time.getDate();//或者天

        let hour = time.getHours();//获取小时
        let minu = time.getMinutes();//获取分钟
        let second = time.getSeconds();//或者秒
        let data = year + "-";
        if (month < 10) {
            data += "0";
        }
        data += month + "-";
        if (day < 10) {
            data += "0"
        }
        data += day + " ";
        if (hour < 10) {
            data += "0"
        }

        data += hour + ":";
        if (minu < 10) {
            data += "0"
        }
        data += minu + ":";
        if (second < 10) {
            data += "0"
        }
        data += second;
        return data;
    }

    /**
     * json对象value null转""
     * @param jsonObj json对象
     * @returns {*}
     */
    public static jsonObjShiftNULL(jsonObj ?: object): object {
        for (let key in jsonObj) {
            if (!jsonObj.hasOwnProperty(key)) continue;
            if (jsonObj[key] === null) {
                jsonObj[key] = "";
            }
        }
        return jsonObj;
    }

    /**
     * json对象的相加、合并
     * @param destination 目标json对象，最终返回它
     * @param source 来源json对象，它的属性要加到destination对象中
     * @returns {*} destination目标json对象
     */
    public static jsonExtend(destination ?: object, source ?: object): object {
        for (let property in source) {
            if (!source.hasOwnProperty(property)) continue;
            destination[property] = source[property];
        }
        return destination;
    }

    /**
     * json对象清除空字段
     */
    public static jsonRinse(jsonObj ?: object): object {
        for (let key in jsonObj) {
            if (!jsonObj.hasOwnProperty(key)) continue;
            if (null === jsonObj[key] || "" === jsonObj[key]) {
                delete jsonObj[key];
            }
        }
        return jsonObj;
    }

    /**
     * 按照对象key排序，可字符可数字排序！
     * @param filed
     * @param rev
     * @param primer
     */
    public static sortBy(filed, rev, primer) {
        rev = (rev) ? -1 : 1;
        return function (a, b) {
            a = a[filed];
            b = b[filed];
            if (typeof (primer) != 'undefined') {
                a = primer(a);
                b = primer(b);
            }
            if (a < b) {
                return rev * -1;
            }
            if (a > b) {
                return rev * 1;
            }
            return 1;
        }
    };

    /**
     * 根据数组值获取数组下标
     * @param arr 数组对象
     * @param value 需要获取下标的元素值
     * @returns {string} 下标
     */
    public static getArrayIndexByValue(arr?: Array<object>, value?: object): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i;//i就是下标
            }
        }
    }

    /**
     * 删除Array数组中指定元素
     * @param arr 数组对象
     * @param value 需要删除的元素值
     */
    public static removeArrayByValue(arr?: Array<object>, value?: object): void {
        arr.splice(this.getArrayIndexByValue(arr, value), 1);
    }

    /**
     * 获取今日往前多少天的日期
     * @param count 往前多少天
     * @returns {string} 格式化后的日期，例：2018-06-14
     */
    public static timeForMat(count?: number): string {
        // 拼接时间
        let time1 = new Date();
        time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000));

        let time2 = new Date();
        time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count));
        let Y2 = time2.getFullYear();
        let M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1));
        let D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate());
        return Y2 + '-' + M2 + '-' + D2;
    }

    /**
     * canvas换行(参数：(上下文，显示的文本，文本初始X坐标，Y坐标，一行多少汉字长度))
     */
    public static drawText(context, t, x, y, w) {
        let chr = t.split("");
        let temp = "";
        let row = [];//切割后的文本数组
        let j = context.measureText('M').width;//一个汉字长度

        for (let a = 0; a < chr.length; a++) {
            if (context.measureText(temp).width < (j * w)) {
            } else {
                row.push(temp);
                temp = "";
            }
            temp += chr[a];
        }
        row.push(temp);
        for (let b = 0; b < row.length; b++) {
            //180为字体大小，px
            context.fillText(row[b], x, y + (b + 1) * 180);
        }
    }
}

//为了能够使用obj[key]
interface Object {
    [key: string]: any,
}