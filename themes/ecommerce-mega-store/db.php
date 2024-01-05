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
    }
    
?>