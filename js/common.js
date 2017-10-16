/**
 * Created by Rae. on 2017/7/8.
 */


/**
 * 获取任意对象的内部文本 （兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}


/**
 * 设置任意对象的内部文本 （兼容所有浏览器）
 * @param element
 * @param conetnt
 */
function setInnerText(element, conetnt) {
    if (typeof element.innerText === "string") {
        element.innerText = conetnt;
    } else {
        element.textContent = conetnt;
    }
}


/**
 * 获取下一个元素节点（兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}


/**
 * 获取上一个元素节点（兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getPreElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousElementSibling;
        while (prev && prev.nodeType !== 1) {
            prev = prev.nextSibling;
        }
        return prev;
    }
}


/**
 * 获取外联样式 （兼容所有浏览器）
 * @param element
 * @returns {*}
 */
function getStyle(element, style) {
    if (getComputedStyle(element, null)) {
        return getComputedStyle(element, null)[style];
    } else {
        return element.currentStyle[style];
    }
}


/**
 * 通过类名获取元素
 * @param className
 * @param element
 * @returns {NodeList}
 */



function getClassName(className, element) {
    if (element) {
        return element.getElementsByClassName(className);
    } else {
        return document.getElementsByClassName(className);
    }
};


/**
 * 通过id获取元素
 * @param id
 * @param element
 * @returns {Element|HTMLElement}
 */
function getId(id, element) {
    if (element) {
        return element.getElementById(id);
    } else {
        return document.getElementById(id);
    }
};


/**
 * 通过标签获取元素
 * @param tagName
 * @param element
 * @returns {*}
 */
function getTagName(tagName, element) {
    if (element) {
        return element.getElementsByTagName(tagName);
    } else {
        return document.getElementsByTagName(tagName);
    }
};


/**
 * 渐变变化动画
 * @param obj
 * @param json
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}


var eventUtils = {

    /**
     * 获取事件对象
     * @param event
     * @returns {*|Event}
     */
    getEvent: function (event) {
        return event || window.event;
    },

    /**
     * 获取事件对象水平坐标
     * @param event
     * @returns {number|Number|*}
     */
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },

    /**
     * 获取事件对象竖直坐标
     * @param event
     * @returns {number|Number|*}
     */
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },

    /**
     * 阻止冒泡
     * @param event
     */
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    /**
     * 获取事件目标
     * @param event
     * @returns {*|Element|Object}
     */
    getTarget: function (event) {
        return event.target || event.srcElement;
    }
};


