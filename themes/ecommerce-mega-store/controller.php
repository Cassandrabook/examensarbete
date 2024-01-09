<?php

class Rest_Controller {
    private $pdo;
    private $db;
    private $consumerKey = "ck_9ad8d1a80bc845843dff7b612f2c1f1f41fee286";
    private $consumerSecret = "cs_bb1fcf5cb6a1d62be62ead19132f3dfbaa965936";

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
        $this->db = new DB($pdo); // Antag att det inte finns någon tableJoin just nu
    }

    public function get_products() {
        try {
            $result = $this->db->getProducts();
            return rest_ensure_response($result);
        } catch (PDOException $e) {
            return new WP_Error('database_error', 'Error fetching products', array('status' => 500));
        }
    }

    public function sync_to_woocommerce() {
        $productsToWoocommerce = $this->get_products();
    
        foreach ($productsToWoocommerce as $product) {
            $data = [
                "name" => $product["name"],
                "type" => $product["type"],
                "regular_price" => $product["price"]
            ];
    
            $response = wp_remote_post('http://localhost/examensarbete/wordpress/wp-json/wc/v3/products', array(
                'body' => json_encode($data),
                'headers' => array(
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Basic ' . base64_encode($this->consumerKey . ':' . $this->consumerSecret),
                ),
            ));
    
            if (is_wp_error($response)) {
                continue;
                // error_log('Fel vid synkronisering av produkt: ' . $product["name"]);
            }
        }
    }
    
}

