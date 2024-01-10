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

    function get_and_save_woocommerce_products() {
       
        $woocommerce_api_url = 'http://localhost/examensarbete/wordpress/wp-json/wc/v3/products';
    
        // Gör en GET-förfrågan till WooCommerce API
        $response = wp_remote_get($woocommerce_api_url, array(
            'headers' => array(
                'Authorization' => 'Basic ' . base64_encode($consumerKey . ':' . $consumerSecret)
            )
        ));
    
        if (is_wp_error($response)) {
            // Hantera fel här
            return;
        }
    
        $products = json_decode(wp_remote_retrieve_body($response), true);
    
        foreach ($products as $product) {
            // Extrahera produktinformation
            $product_id = $product['id'];
            $product_name = $product['name'];
            $product_description = $product['description'];
            $product_brandId = 0; // Antag standardvärde eller bestäm baserat på någon logik
            $product_categoryId = 0; // Antag standardvärde eller bestäm baserat på någon logik
        
            
           
        }        
    }
    
    function save_product_to_db($product) {
        // Din logik för att spara produktdata i databasen
        // Använd PDO eller en liknande databashanterare för att spara data
    }
    
    
}

