<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <form action="login-auth" method="post">
        @csrf
        <label for="username"></label>
        <input type="text" id="username" name="username" placeholder=""/>
        <label for="password">password</label>
        <input type="text" name="password" id="password" />
        <button type="submit">login</button>
    </form>
</body>

</html>