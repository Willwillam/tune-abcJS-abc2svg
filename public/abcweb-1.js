// abc2svg - ABC to SVG translator
// @source: https://chiselapp.com/user/moinejf/repository/abc2svg
// Copyright (C) 2014-2023 Jean-Francois Moine - LGPL3+
//abcweb-1.js file to include in html pages
window.onerror = function (msg, url, line) {
    if (typeof msg == 'string')
        alert("window error: " + msg + "\nURL: " + url + "\nLine: " + line)
    else if (typeof msg == 'object')
        alert("window error: " + msg.type + ' ' + msg.target.src)
    else
        alert("window error: " + msg)
    return false
}
var user, abcplay
if (typeof abc2svg == "undefined")
    var abc2svg = {}
abc2svg.mu = ""
abc2svg.abc_end = function () { }
abc2svg.jsdir = document.currentScript ? document.currentScript.src.match(/.*\//) : (function () {
    var s_a = document.getElementsByTagName('script')
    for (var k = 0; k < s_a.length; k++) {
        if (s_a[k].src.indexOf("abcweb") >= 0)
            return s_a[k].src.match(/.*\//) || ''
    }
    return ""
})()
abc2svg.loadjs = function (fn, relay, onerror) {
    var s = document.createElement('script')
    if (/:\/\//.test(fn))
        s.src = fn
    else
        s.src = abc2svg.jsdir + fn
    s.onload = relay
    s.onerror = function () {
        if (onerror)
            onerror(fn)
        else
            alert('error loading ' + fn)
    }
    document.head.appendChild(s)
}
function dom_loaded() {
    var abc, src, outb, err, a_inc = {}, tune_lst = [], html, busy, playing, playconf = { onend: function () { playing = 0 } }
    function visible() {
        var mu, r, wh = window.innerHeight || document.documentElement.clientHeight
        while (1) {
            mu = abc2svg.alldiv[0]
            if (!mu)
                break
            r = mu.d.getBoundingClientRect()
            if (r.top > wh)
                break
            musgen(mu)
            abc2svg.alldiv.shift()
        }
        if (abc2svg.alldiv.length) {
            if (!abc2svg.onscroll) {
                abc2svg.onscroll = visible
                window.addEventListener("scroll", visible)
            }
        } else { window.removeEventListener("scroll", visible) }
    }
    function get_p(e) {
        var i, j, k, r, o = '', sh = document.styleSheets, s = e.style
        c = e.getAttribute("class")
        if (c) {
            c = '.' + c
            for (i = 0; i < sh.length; i++) {
                r = sh[i].rules
                for (j = 0; j < r.length; j++) {
                    if (r[j].selectorText == c)
                        break
                }
                if (j < r.length)
                    break
            }
            if (i < sh.length) {
                r = r[j]
                for (i = 0; i < r.style.length; i++) {
                    k = r.style[i]
                    if (k[0] == '-' && k[1] == '-')
                        o += '%%' + k.slice(2) + ' '
                            + r.style.getPropertyValue(k)
                            + '\n'
                }
            }
        }
        for (i = 0; i < s.length; i++) {
            k = s[i]
            if (k[0] == '-' && k[1] == '-')
                o += '%%' + k.slice(2) + ' '
                    + s.getPropertyValue(k)
                    + '\n'
        }
        return o
    }
    function move_music(src) {
        var re, res, i, j, k, t, re_stop = /\n<|\n%.begin[^\s]+/g, ss = 0, out = ""
        if (/<[^>]* class="[^"]*abc[^"]*/.test(src))
            re = '<[^>]* class="[^"]*abc[^"]*'
        else
            re = '%abc-\\d|X:\\s*\\d'
        re = new RegExp('(^|\n)(' + re + ')', 'g')
        while (1) {
            res = re.exec(src)
            if (!res)
                break
            i = re.lastIndex - res[0].length
            if (i > ss) {
                out += src.slice(ss, i)
                html = 1
            }
            t = res[2]
            if (t[0] == '<') {
                i = src.indexOf('>', i) + 1
                j = res[2].indexOf(' ')
                t = res[2].slice(1, j)
                j = src.indexOf('</' + t + '>', i)
                ss = j + t.length + 4
            } else {
                re_stop.lastIndex = i
                while (1) {
                    res = re_stop.exec(src)
                    if (!res || res[0] == "\n<")
                        break
                    k = src.indexOf(res[0].replace("begin", "end"), re_stop.lastIndex)
                    if (k < 0)
                        break
                    re_stop.lastIndex = k
                }
                if (!res || k < 0)
                    j = src.length
                else
                    j = re_stop.lastIndex - 1
                ss = j
            }
            out += '<script type="text/vnd.abc">\n'
                + src.slice(i, j)
                + '</script>\n'
            re.lastIndex = ss
        }
        out += src.slice(ss)
        if (abc2svg.page && html)
            out += '\
<pre class="nop" style="background:#ff8080">\
Printing may be bad because the file contains pure HTML and %%pageheight\
</pre>\n'
        document.body.innerHTML = out
    }
    function useDivTagInsteadOfScript(){

    }
    function save_music() {
        var i, k, div, c, s, sa
        abc2svg.music = [{ t: "", n: "mus0" }]
        k = location.search
        if (k) {
            k = k.substr(1).split("&")
            for (i = 0; i < k.length; i++)
                abc2svg.music[0].t += "%%"
                    + decodeURIComponent(k[i].replace('=', ' '))
                    + '\n'
        }
        // 目前修改的所有源码都在这个函数里面, 后期有问题可以拿线上的源码对比
        // 修改点: 1. 用div的渲染替换script标签的渲染
        // 2. 格式化abcString, 使得能够正常渲染简谱
        sa = document.getElementsByName("text/vnd.abc")
        let index = 0
        while (index<=sa.length && sa.length) {
            console.log("渲染多少次");
            index ++
        
            for (i = 0; i < sa.length; i++) {
                s = sa[i]
            }
            div = document.createElement('div')
                let innerTextStr = ''
                innerTextStr = s.innerText.replace(/\n/g, "@@@")   // 占位
                innerTextStr = innerTextStr.replace(/\x20/g, "")   // 去掉多余空格
                let arr = innerTextStr.split("@@@")
                let resStr =  arr.join("\n")
                resStr = resStr.replace(/jianpu/g,"$& ")

                // 处理简谱小节数的显示
                resStr = resStr.replace(/(K:[A-Za-z].*$)/gm, '$1 splitFlag')
                let tempArr = resStr.split("splitFlag")
                let firstStr = tempArr[0]
                let secondStr = tempArr[1]
                secondStr = secondStr.replace(/\n/g,"")
                resStr = firstStr+ "\n" + secondStr
                
                abc2svg.music[0].t += resStr
                if (!abc2svg.music[0].d){
                    abc2svg.music[0].d = div
            } 
            // else { abc2svg.music.push({ n: "mus" + abc2svg.music.length, t: c + s.innerHTML, d: div }) }
            console.log(abc2svg.music, abc2svg.music[0].t, 'abc2svg.music', 9.0)
            // debugger
            s.parentNode.replaceChild(div, s)

        }
    }
    function musgen(mu) {
        var t = mu.t
        if (busy) {
            mu.w = 1
            return
        }
        busy = 1
        function render() {
            var i, j, e
            outb = err = ""
            abc.tosvg(mu.n, t)
            abc2svg.abc_end()
            if (mu.d) {
                if (err)
                    outb += '<pre class="nop" style="background:#ff8080">'
                        + err + "</pre>\n"
                if (abc.cfmt().with_source && outb)
                    outb = '<pre class="source">'
                        + clean_txt(t)
                        + '</pre>\n\
<div class="source">\n'
                        + outb
                        + '</div>\n'
                mu.d.innerHTML = outb
                mu.d.addEventListener('click', abc2svg.playseq)
                e = mu.d.getElementsByTagName('svg')
                for (i = 0; i < e.length; i++) {
                    j = e[i].getAttribute('class')
                    if (!j)
                        continue
                    j = j.match(/tune(\d+)/)
                    if (!j)
                        continue
                    j = j[1]
                    tune_lst[j] = null
                }
            }
            mu.w = busy = 0
            for (i = 1; i < abc2svg.music.length; i++) {
                if (abc2svg.music[i].w) {
                    musgen(abc2svg.music[i])
                    break
                }
            }
        }
        function include() {
            var i, j, fn, r, k = 0
            while (1) {
                i = t.indexOf('%%abc-include ', k)
                if (i < 0) {
                    render()
                    return
                }
                i += 14
                j = t.indexOf('\n', i)
                fn = t.slice(i, j).trim()
                if (!a_inc[fn])
                    break
                k = j
            }
            r = new XMLHttpRequest()
            r.open('GET', fn, true)
            r.onload = function () {
                if (r.status === 200) {
                    a_inc[fn] = r.responseText
                    if (abc2svg.modules.load(a_inc[fn], include))
                        include()
                } else {
                    a_inc[fn] = '%\n'
                    alert('Error getting ' + fn + '\n' + r.statusText)
                    include()
                }
            }
            r.onerror = function () {
                a_inc[fn] = '%\n'
                alert('Error getting ' + fn + '\n' + r.statusText)
                include()
            }
            r.send()
        }
        if (abc2svg.modules.load(t, include))
            include()
    }
    abc2svg.musgen = musgen
    user = { read_file: function (fn) { return a_inc[fn] }, errmsg: function (msg, l, c) { err += clean_txt(msg) + '\n' }, img_out: function (p) { outb += p } }
    function clean_txt(txt) {
        return txt.replace(/<|>|&.*?;|&/g, function (c) {
            switch (c) {
                case '<': return "&lt;"
                case '>': return "&gt;"
                case '&': return "&amp;"
            }
            return c
        })
    }
    abc2svg.playseq = function (evt) {
        if (playing) {
            abcplay.stop()
            return
        }
        var i, j, svg = evt.target, e = svg
        while (svg.tagName != 'svg') {
            svg = svg.parentNode
            if (!svg)
                return
        }
        i = svg.getAttribute('class')
        if (!i)
            return
        i = i.match(/tune(\d+)/)
        if (!i)
            return
        i = i[1]
        if (!abcplay) {
            if (typeof AbcPlay == "undefined") {
                abc2svg.playseq = function () { }
                return
            }
            if (abc.cfmt().soundfont)
                playconf.sfu = abc.cfmt().soundfont
            abcplay = AbcPlay(playconf)
        }
        if (!tune_lst[i]) {
            tune_lst[i] = abc.tunes[i]
            abcplay.add(tune_lst[i][0], tune_lst[i][1], tune_lst[i][3])
        }
        s = tune_lst[i][0]
        i = e.getAttribute('class')
        if (i)
            i = i.match(/abcr _(\d+)_/)
        if (i) {
            i = i[1]
            while (s && s.istart != i)
                s = s.ts_next
            if (!s) {
                alert("play bug: no such symbol in the tune")
                return
            }
        }
        while (s && !s.fname)
            s = s.ts_next
        for (i = 1; i < abc2svg.music.length; i++) {
            if (abc2svg.music[i].n == s.fname)
                break
        }
        abc2svg.mu = abc2svg.music[i]
        playing = 1
        abcplay.play(s, null)
    }
    src = document.body.innerHTML
    if (!abc2svg.Abc) {
        abc2svg.loadjs("abc2svg-1.js", dom_loaded)
        return
    }
    if (src.indexOf('type="text/vnd.abc"') < 0)
        move_music(src)
    save_music()
    abc = new abc2svg.Abc(user)
    if (typeof follow == "function")
        follow(abc, user, playconf)
    if (abc2svg.music[0].t)
        musgen(abc2svg.music[0])
    abc2svg.alldiv = []
    for (var i = 1; i < abc2svg.music.length; i++)
        abc2svg.alldiv.push(abc2svg.music[i])
    visible()
}
abc2svg.get_music = function (d) {
    var i, mu
    for (var i = 1; i < abc2svg.music.length; i++) {
        mu = abc2svg.music[i]
        if (mu.d == d)
            return mu.t
    }
}
abc2svg.set_music = function (d, t) {
    var i, mu
    for (var i = 1; i < abc2svg.music.length; i++) {
        mu = abc2svg.music[i]
        if (mu.d == d) {
            mu.t = t
            abc2svg.musgen(mu)
            break
        }
    }
}
window.addEventListener("load", dom_loaded, { once: true })
