<?php
// Enable CORS (for development purposes)
header("Access-Control-Allow-Origin: *");
// Set the response content type to JSON
header('Content-Type: application/json');

// Get request body
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

// Check if username and password are provided
if (isset($data['token'])) {
    // Validate username and password
    if ($data['token'] === '12341234') {
        // Authentication successful
        http_response_code(200);
        echo json_encode(array('message' => 'Tokan check successful', 'status' => true));
    } else {
        // Authentication failed
        http_response_code(401);
        echo json_encode(array('message' => 'Invalid username or password'));
    }
} else {
    // Username or password not provided
    http_response_code(400);
    echo json_encode(array('message' => 'Username or password not provided'));
}
