<?php
require_once 'api-keys.php';
require 'vendor/autoload.php';

use Automattic\WooCommerce\Client;
use Automattic\WooCommerce\HttpClient\OAuth\OAuth1;

$woocommerce = new Client(
    'http://localhost/examensarbete/wordpress/', 
    CONSUMER_KEY, 
    CONSUMER_SECRET,
    [
        'wp_api' => true,
        'version' => 'wc/v3',
        'query_string_auth' => true, // Använd OAuth 1.0-autentisering
    ]
);

// Hämta alla produkter
$products = $woocommerce->get('products');

// Skriv ut produkterna
print_r($products);
