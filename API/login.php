<?php
// Enable CORS (for development purposes)
header("Access-Control-Allow-Origin: *");
// Set the response content type to JSON
header('Content-Type: application/json');

// Dummy user credentials
$validEmail = 'vishal@gmail.com';
$validPassword = 'vishal@gmail.com';
$validProfileImg = 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg';

// Get request body
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

// Check if username and password are provided
if (isset($data['username']) && isset($data['password'])) {
    // Validate username and password
    if ($data['username'] === $validEmail && $data['password'] === $validPassword) {
        // Authentication successful
        http_response_code(200);
        echo json_encode(array(
            'message' => 'Login successful',
            'user' => array(
                'username' => "Vishal Patel",
                'email' => $data['username'],
                'profileImg' => $validProfileImg
            ), 'token' => '12341234'
        ));
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
