<?php
session_start();
    require_once ('mysql_connect.php');
    //if login-form is filled in, query database by username, check password against db, if correct, display shipping address
    // on file for the user to verify or modify, if not correct, display error
    $_POST['user_name']= "pearl";
    $_POST['password']= "pearl";
    if (!empty ($_POST['user_name']) and !empty ($_POST['password'])) {
        $user = "'".$_POST['user_name']."'";
        $pass = $_POST['password'];
        $query = "SELECT * FROM  `customer` WHERE `username` = $user";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                var_dump($row);
                foreach ($row as $key => $value) {
                if($key == "password") {
                    if(sha1($pass) == $value) {
                        echo "user exists, username: ".$_POST['user_name']."<br> pass : ".$pass."<br>";
                        echo "Hello".$row["firstName"];
                        echo "Please verify your shipping address: ".$row["city"]." , ".$row["street"]." , ".$row["zip"]."<br>";
                        $_SESSION["id"] = $row["id"];
                        print json_encode($row);
                    }///end of check for $pass
                    else{
                        echo "username or password are incorrect";
                    }
                }//end of check for key
               }///end of foreach
            }//end of while
        }//end of if result>0
        else{
            echo "username or password are incorrect";
        }
    }////if not empty
?>