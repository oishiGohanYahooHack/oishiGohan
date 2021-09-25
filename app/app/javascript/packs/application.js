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

$(document).on('turbolinks:load', function () {

	/**
	 * トップページ : タブ切り替え制御
	 */
	let loginFormTab = $('.login')
	let registFormTab = $('.regist')
	let loginForm = $('#login-form')
	let registForm = $('#regist-form')

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

	// ハンバーガーメニュー
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); //②

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