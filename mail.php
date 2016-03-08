<?php

$recepient = "artur0509@mail.ru";
$sitename = "x-vibe";
$pagetitle = "Заказ X-Vibe v.3";

if (!empty($_POST["name"])) {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $pagetitle = "Заказ X-Vibe v.3 + розыгрыш призов";
}
if (!empty($_POST["name-b"])) {
    $name = trim($_POST["name-b"]);
    $email = trim($_POST["email-b"]);
    $pagetitle = "Заказ обратного звонка по X-Vibe v.3";
}
if (!empty($_POST["name-c"])) {
    $name = trim($_POST["name-c"]);
    $email = trim($_POST["email-c"]);
    $pagetitle = "Заказ X-Vibe v.3 по акции со сниженной ценой";
}


$message = "Имя: $name  \nE-mail: $email ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email ");