<html>

<head>
    <title>
        <?php
        require_once 'head.php';
        ?>
    </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="header">
        <?php
        require_once 'top.php';
        ?>
    </div>
    <div class="page">
        <div class="content">
            <?php
            require_once 'content_new.php';
            ?>
        </div>
    </div>
    <div>
        <!-- <?php
        if (!isset($_COOKIE['Name'])):
            ?>
            <h2> Пройдите авторизацию для покупки билета</h2>
        <?php else: ?>
            <p>Yo, <?= $_COOKIE['Name'] ?></p>
            <a href="exit.php"> Exit</a>
        <?php endif; ?> -->
    </div>
    <!-- <script lang="JavaScript">
        for (let i = 0; i < 10; i++)alert(`${i}`);
    </script> -->

    <div class="footer">
        <?php
        require_once 'footer.php';
        ?>
    </div>
</body>

</html>