<?php

class Rest_Controller {
    private $pdo;
    private $db;
    // ... andra attribut ...

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
        $this->db = new DB($pdo); // Antag att det inte finns någon tableJoin just nu
    }

    public function fetch_products_from_woocommerce() {
        $url = 'http://localhost/examensarbete/wordpress/wp-json/ecommerce-mega-store/v1/products';
        $params = ['consumer_key' => $this->consumerKey, 'consumer_secret' => $this->consumerSecret];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url . '?' . http_build_query($params));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($ch);
        curl_close($ch);

        return json_decode($response, true);
    }

    public function get_products() {
        try {
            $result = $this->db->getProducts();
            return rest_ensure_response($result);
        } catch (PDOException $e) {
            return new WP_Error('database_error', 'Error fetching products', array('status' => 500));
        }
    }

}

