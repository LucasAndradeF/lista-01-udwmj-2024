<?php
session_start();

$usuario_correto = "admin";
$senha_correta = "123admin";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        if ($username === $usuario_correto && $password === $senha_correta) {
            $_SESSION['usuario'] = $username;
            header("Location: ../index.html");
            exit();
        } else {
            header("Location: login.php?erro=senha");
            exit();
        }
    } 
} 
?>
