<?php
require_once 'db.php';
require_once 'config.php';
require_once 'controller.php';

class Rest_routes {
    private $controller;

    public function __construct(PDO $pdo) {
        $this->controller = new Rest_Controller($pdo);
        add_action('rest_api_init', array($this, 'custom_api_routes'));
    }

    public function custom_api_routes() {
        register_rest_route('ecommerce-mega-store/v1', '/products', array(
            'methods' => 'GET',
            'callback' => array($this->controller, 'get_products'),
        ));
    }
}

new Rest_routes($pdo);
