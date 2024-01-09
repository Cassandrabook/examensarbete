<?php
    class DB {
        protected $pdo;
        protected $table;
        protected $tableJoin;
    
        public function __construct(PDO $pdo) {
            $this->pdo = $pdo;
        }

        public function getProducts() {
            $statement = $this->pdo->prepare("SELECT * FROM products");
            $statement->execute();
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }

        public function syncWoocommerce(){
                try {
                    $query = "SELECT p.id, p.name, p.type, ps.price FROM Products p
                    JOIN Product_colors pc on pc.fk_productId = p.id
                    JOIN Product_sizes ps on ps.fk_productId = p.id";
                    $stmt = $this->pdo->prepare($query);
                    $stmt->execute();
                    return $stmt->fetchAll();
         
                } catch(PDOException $e) {
                    error_log("Database error: " . $e->getMessage());
                    return ['error' => 'An error occurred while fetching products.'];
         
                }
        }
}
    
?>