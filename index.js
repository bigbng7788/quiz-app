"use strict";

var bookmark1 = document.querySelector('#bookmark1');
bookmark1.addEventListener('click', function () {
  bookmark1.classList.toggle('card__bookmark--on');
});
var bookmark2 = document.querySelector('#bookmark2');
bookmark2.addEventListener('click', function () {
  bookmark2.classList.toggle('card__bookmark--on');
});
var bookmark3 = document.querySelector('#bookmark3');
bookmark3.addEventListener('click', function () {
  bookmark3.classList.toggle('card__bookmark--on');
});
var bookmark4 = document.querySelector('#bookmark4');
bookmark4.addEventListener('click', function () {
  bookmark4.classList.toggle('card__bookmark--on');
});
var bookmark5 = document.querySelector('#bookmark5');
bookmark5.addEventListener('click', function () {
  bookmark5.classList.toggle('card__bookmark--on');
});
var mainHome = document.querySelector('#maindashboard');
var mainBookmark = document.querySelector('#mainbookmark');
var mainCreate = document.querySelector('#maincreate');
var mainProfile = document.querySelector('#mainprofile');
var navHome = document.querySelector('#nav_home');
var navBookmark = document.querySelector('#nav_bookmark');
var navCreate = document.querySelector('#nav_create');
var navProfile = document.querySelector('#nav_profile');

var hideAllSections = function hideAllSections() {
  mainHome.classList.add('dn');
  mainBookmark.classList.add('dn');
  mainCreate.classList.add('dn');
  mainProfile.classList.add('dn');
};

var inactiveAllSections = function inactiveAllSections() {
  navHome.classList.remove('nav--active');
  navBookmark.classList.remove('nav--active');
  navCreate.classList.remove('nav--active');
  navProfile.classList.remove('nav--active');
};

navHome.addEventListener('click', function () {
  hideAllSections();
  inactiveAllSections();
  mainHome.classList.remove('dn');
  navHome.classList.add('nav--active');
});
navBookmark.addEventListener('click', function () {
  hideAllSections();
  inactiveAllSections();
  mainBookmark.classList.remove('dn');
  navBookmark.classList.add('nav--active');
});
navCreate.addEventListener('click', function () {
  hideAllSections();
  inactiveAllSections();
  mainCreate.classList.remove('dn');
  navCreate.classList.add('nav--active');
});
navProfile.addEventListener('click', function () {
  hideAllSections();
  inactiveAllSections();
  mainProfile.classList.remove('dn');
  navProfile.classList.add('nav--active');
});
var showAnswerButton1 = document.querySelector('.card__showanswer1');
var answerText1 = document.querySelector('.card__answer1');
var hideButton1 = document.querySelector('.card__hideanswer1');
showAnswerButton1.addEventListener('click', function () {
  answerText1.classList.remove('dn');
  showAnswerButton1.classList.add('dn');
  hideButton1.classList.remove('dn');
});
hideButton1.addEventListener('click', function () {
  answerText1.classList.add('dn');
  showAnswerButton1.classList.remove('dn');
  hideButton1.classList.add('dn');
});
var showAnswerButton2 = document.querySelector('.card__showanswer2');
var answerText2 = document.querySelector('.card__answer2');
var hideButton2 = document.querySelector('.card__hideanswer2');
showAnswerButton2.addEventListener('click', function () {
  answerText2.classList.remove('dn');
  showAnswerButton2.classList.add('dn');
  hideButton2.classList.remove('dn');
});
hideButton2.addEventListener('click', function () {
  answerText2.classList.add('dn');
  showAnswerButton2.classList.remove('dn');
  hideButton2.classList.add('dn');
});
var showAnswerButton3 = document.querySelector('.card__showanswer3');
var answerText3 = document.querySelector('.card__answer3');
var hideButton3 = document.querySelector('.card__hideanswer3');
showAnswerButton3.addEventListener('click', function () {
  answerText3.classList.remove('dn');
  showAnswerButton3.classList.add('dn');
  hideButton3.classList.remove('dn');
});
hideButton3.addEventListener('click', function () {
  answerText3.classList.add('dn');
  showAnswerButton3.classList.remove('dn');
  hideButton3.classList.add('dn');
});
var showAnswerButton4 = document.querySelector('.card__showanswer4');
var answerText4 = document.querySelector('.card__answer4');
var hideButton4 = document.querySelector('.card__hideanswer4');
showAnswerButton4.addEventListener('click', function () {
  answerText4.classList.remove('dn');
  showAnswerButton4.classList.add('dn');
  hideButton4.classList.remove('dn');
});
hideButton4.addEventListener('click', function () {
  answerText4.classList.add('dn');
  showAnswerButton4.classList.remove('dn');
  hideButton4.classList.add('dn');
});
var showAnswerButton5 = document.querySelector('.card__showanswer5');
var answerText5 = document.querySelector('.card__answer5');
var hideButton5 = document.querySelector('.card__hideanswer5');
showAnswerButton5.addEventListener('click', function () {
  answerText5.classList.remove('dn');
  showAnswerButton5.classList.add('dn');
  hideButton5.classList.remove('dn');
});
hideButton5.addEventListener('click', function () {
  answerText5.classList.add('dn');
  showAnswerButton5.classList.remove('dn');
  hideButton5.classList.add('dn');
});
var cardQuestion1 = document.querySelector('.card__question1');
var cardAnswer1 = document.querySelector('.answer1');
var cardTags1 = document.querySelector('.tags1');
var cardSubmitButton1 = document.querySelector('.createcard__button');
cardSubmitButton1.addEventListener('submit', function (event) {
  event.preventDefault();
  cardQuestion1.value = '';
  cardAnswer1.value = '';
  cardTags1.value = '';
});
var showReadMoreBio = document.querySelector('.readmore__button');
var readMoreTextBio = document.querySelector('.readmorebio__text');
var readLessBio = document.querySelector('.readless__button');
showReadMoreBio.addEventListener('click', function () {
  readMoreTextBio.classList.remove('dn');
  showReadMoreBio.classList.add('dn');
  readLessBio.classList.remove('dn');
});
readLessBio.addEventListener('click', function () {
  readMoreTextBio.classList.add('dn');
  showReadMoreBio.classList.remove('dn');
  readLessBio.classList.add('dn');
});