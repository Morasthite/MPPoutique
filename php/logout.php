<?php
session_start();
setcookie(session_name(), '', 100);
session_unset();
session_destroy();
print_r($_SESSION);
header('location: ../logout.html');
exit();
