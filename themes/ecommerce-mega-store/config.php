<?php

$host = 'localhost';
$db = 'webshop';
$user = 'webshop'; // Byt ut detta till ditt användarnamn om det är något annat
$password = 'Torsplan8';
$charset = 'utf8';

function connect($host, $db, $user, $password, $charset) {
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";

    try {
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ];
        return new PDO($dsn, $user, $password, $options);
    } catch (PDOException $e) {
        die('Connection failed: ' . $e->getMessage());
    }
}

$pdo = connect($host, $db, $user, $password, $charset);

?>
