<?php
// din-huvudfil.php

require_once 'api-keys.php';

$woocommerce = new Automattic\WooCommerce\Client(
    'http://localhost/examensarbete/wordpress/', 
    CONSUMER_KEY, 
    CONSUMER_SECRET,
    [
        'wp_api' => true,
        'version' => 'wc/v3',
    ]
);

print_r($woocommerce->get('products'));
