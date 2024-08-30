<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/styles.css">
    <title>Login</title>
</head>

<body>
    <form method="post" action="processa_login.php" class="container container__color-text">
        <h1 class="container__logo"><span>Gas</span>Alcool</h1>
        <fieldset class="container__content">
            <label for="username">Usuário</label>
            <input type="text" name="username" required>
            <label for="password">Senha</label>
            <input type="password" name="password" class="<?php echo isset($_GET['erro']) && $_GET['erro'] === 'senha' ? 'password-field error' : 'password-field'; ?>" required>
            <button class="container__btn-format container__btn-cta">Login</button>
        </fieldset>
    </form>
</body>

</html>