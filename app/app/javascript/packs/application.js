// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'jquery'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).on('turbolinks:load', function() {

    /**
     * トップページ : タブ切り替え制御
     */
    let loginFormTab = $('.login')
    let registFormTab = $('.regist')
    let loginForm = $('#login-form')
    let registForm = $('#regist-form')

    if (getParam('tab') === 'regist') {
        loginFormTab.removeClass('is-active')
        registFormTab.addClass('is-active')
        loginForm.css('display', 'none')
        registForm.css('display', 'block')
    } else {
        registFormTab.removeClass('is-active')
        loginFormTab.addClass('is-active')
        registForm.css('display', 'none')
        loginForm.css('display', 'block')
    }

    loginFormTab.click(function () {
        registFormTab.removeClass('is-active')
        loginFormTab.addClass('is-active')
        registForm.css('display', 'none')
        loginForm.css('display', 'block')
    })
    registFormTab.click(function () {
        loginFormTab.removeClass('is-active')
        registFormTab.addClass('is-active')
        loginForm.css('display', 'none')
        registForm.css('display', 'block')
    })

    // 時間に応じてランダムに背景画像変更
    let day = new Date();
    let hour = day.getHours();

    let randnum = Math.floor(Math.random() * 3) + 1;

    if (6 < hour && hour < 11) {
        $('body').addClass(`morning-${randnum}`);
    } else if (hour < 16) {
        $('body').addClass(`lunch-${randnum}`);
    } else if (hour < 22) {
        $('body').addClass(`dinner-${randnum}`);
    } else {
        $('body').addClass(`midnight-${randnum}`);
    }
  
    /**
     * Map
     */
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2lzaGktZ29oYW4iLCJhIjoiY2t0eTJpdHBoMnltaTJwbzIydzYwaGZnZCJ9.huyeJH0eaXmtCL7a4klCOw'
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [139.745451, 35.658577],
        minZoom: 2,
        maxZoom: 6,
        zoom: 4
    }).addControl(
        new MapboxLanguage({
            defaultLanguage: 'ja'
    })).addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: false
            },
            trackUserLocation: true,
            showUserHeading: true
        }))
    // ユーザー設定のモーダル
    let userSettingButton = $('.user-setting-button')
    let userSettingModal = $('.modal-user-setting')
    let closeUserSettingButton = $('.close-user-setting-button')

    userSettingButton.click(function () {
        userSettingModal.addClass('is-active')
    })
    closeUserSettingButton.click(function () {
        userSettingModal.removeClass('is-active')
    })
    /**
     * ハンバーガーメニュー
     */
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); //②

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () { 
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
});

/**
 * getパラメーター取得用メソッド
 * @param name
 * @param url
 * @returns {string|null}
 */
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
