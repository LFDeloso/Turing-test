<?php
// Headers para el endpoint
header("Access-Control-Allow-Origin: *");
// datos en json
header("Content-Type: application/json; charset=UTF-8");
// Permitimos el metodo post
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


//Importamos la clase Database para utilizar su metodo getConnection() 
include_once './config/db.php';


//importamos la clase Customer para utilizar su metodo contructor y createCustomer() 
include_once './class/customers.php';

// Creamos una nueva variable de tipo de Database
$database = new Database();
$connection = $database->getConnection();

// Creamos una nueva variable de tipo Customer
$customer = new Customer($connection);

// decodificamos el json de los datos recibidos
$data = json_decode(file_get_contents("php://input"));

// Asignamos los valores traidos a cada propiedad correspondiente
$customer->nombreCompleto = $data->nombreCompleto;
$customer->email = $data->email;
$customer->telefono = $data->telefono;
$customer->empresa = $data->empresa;
$customer->mensaje = $data->mensaje;

//Ejecutamos la fución createCustomer() e imprimimos una respuesta
echo $customer->createCustomer() ? 'ok': 'failed';
