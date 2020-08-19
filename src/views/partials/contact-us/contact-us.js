import "./contact-us.scss";
import $ from "jquery";
import "bootstrap";

$(document).ready(function () {
  $("#btShow").on('click', showToast);
});

function showToast() {
  $(".toast").toast("show");
}
