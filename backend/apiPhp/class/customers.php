<?php

class Customer
{
    private $conn;

    // Propiedades
    public $nombreCompleto;
    public $email;
    public $telefono;
    public $empresa;
    public $mensaje;


    // Metodo constructor
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // meotodo oara crear clientes 
    public function createCustomer()
    {
        //Asiganamos el Query de insert into 
        $sql_query = "INSERT INTO clientes 
                        SET 
                        nombre_completo = :nombre_completo,
                        email = :email,
                        telefono = :telefono,
                        empresa = :empresa,
                        mensaje = :mensaje
                        ;";


        //preparamaos la conexion con los datos que se insertaran desde create
        $statement = $this->conn->prepare($sql_query);
        $statement->bindParam(':nombre_completo', $this->nombreCompleto);
        $statement->bindParam(':email', $this->email);
        $statement->bindParam(':telefono', $this->telefono);
        $statement->bindParam(':empresa', $this->empresa);
        $statement->bindParam(':mensaje', $this->mensaje);

        // ejecutamos el query y retornamos un true o false con un ternario  
        return $statement->execute() ? true : false;
    }
}
