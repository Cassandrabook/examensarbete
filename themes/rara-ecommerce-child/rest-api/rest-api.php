<?php
require_once('path/till/api-keys.php');
require 'vendor/autoload.php'; // Sökvägen till autoload.php kan variera beroende på din installation

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'http://localhost/examensarbete/wordpress/', 
    CONSUMER_KEY, 
    CONSUMER_SECRET,
    [
        'wp_api' => true,
        'version' => 'wc/v3',
    ]
);

// Exempel på att hämta produkter från WooCommerce
$products = $woocommerce->get('products');

// Gör något med $products, t.ex. skriv ut dem
print_r($products);
