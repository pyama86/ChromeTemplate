// ==UserScript==
// @name          Auto Login Nishinihon
// @author        ka-yamashita
// @namespace     http://ten-snapon.jp
// @description   "Nishigin auto login macro"
// @include       https://*.ncbank.co*/*
// @license       MIT License
// ==/UserScript==

(function() {
    /*** AT YOUR OWN RISK ***/
    //会員番号
    var id    = '1234567890';
    //ログインパスワード
    var pass = '1234';
    //確認番号
    var table = [1,2,3,4,5,6,7,8,9,0];

    var e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false,
            false, false, false, 0, null);
    try {
        //ウィンドウ名が「ログイン」
        if (document.title == '\u30ed\u30b0\u30a4\u30f3')  {
            $('txtBox001_check').checked = false;
            $('txtBox001').value = id;
            $('pswd001').value = pass;
            $('btn999').dispatchEvent(e);
        }
        else if(document.title == '\u30ed\u30b0\u30a4\u30f3(\u78ba\u8a8d\u756a\u53f7\u8a8d\u8a3c)'){
        // page 2
            if ($('pswd001_check')) {
                $('pswd001_check').checked = false;
                $('pswd001').value = table[$('msg002-1').innerHTML-1].toString() + table[$('msg002-2').innerHTML-1].toString();
                $('btn002').dispatchEvent(e);
            }
        }
    }
    catch(e) {
        console.log(e);
    }

    function $$(name) {
        return document.getElementsByName(name).item(0);
    }

    function $(id) {
        return document.getElementById(id);
    }
})();
