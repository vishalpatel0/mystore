<?php
// Enable CORS (for development purposes)
header("Access-Control-Allow-Origin: *");
// Set the response content type to JSON
header('Content-Type: application/json');

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the POST data
    $postData = json_decode(file_get_contents('php://input'), true);

    // Check if the POST data is valid
    if ($postData !== null) {
        // Process the POST data (you can perform any operations here)

        // Prepare the response data
        $responseData = [
            'success' => true,
            'message' => 'Data received successfully',
            'data' => $postData // Echoing back the received data for demonstration
        ];

        // Return the response data as JSON
        echo json_encode($responseData);
    } else {
        // Invalid POST data
        echo json_encode(['success' => false, 'message' => 'Invalid POST data']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {

    // Array to store user information
    $users = [];

    // Indian names
    $indian_names = ["Aarav", "Aarushi", "Arjun", "Ananya", "Aditi"];

    // User 1
    $user1 = [
        'name' => $indian_names[0],
        'email' => 'user1@example.com',
        'id' => 1,
        'mobile' => '1234567891',
        'photo' => 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
        'password' => 'password1'
    ];
    $users[] = $user1;

    // User 2
    $user2 = [
        'name' => $indian_names[1],
        'email' => 'user2@example.com',
        'id' => 2,
        'mobile' => '1234567892',
        'photo' => 'https://cdn140.picsart.com/39063465592866053138.webp?type=webp',
        'password' => 'password2'
    ];
    $users[] = $user2;

    // User 3
    $user3 = [
        'name' => $indian_names[2],
        'email' => 'user3@example.com',
        'id' => 3,
        'mobile' => '1234567893',
        'photo' => 'https://a.storyblok.com/f/191576/1200x800/d0f2558acb/profile_picture_maker_after_.webp',
        'password' => 'password3'
    ];
    $users[] = $user3;

    // User 4
    $user4 = [
        'name' => $indian_names[3],
        'email' => 'user4@example.com',
        'id' => 4,
        'mobile' => '1234567894',
        'photo' => 'https://static-cse.canva.com/blob/1378708/1600w-4scUCs_7-ss.jpg',
        'password' => 'password4'
    ];
    $users[] = $user4;

    // User 5
    $user5 = [
        'name' => $indian_names[4],
        'email' => 'user5@example.com',
        'id' => 5,
        'mobile' => '1234567895',
        'photo' => 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=',
        'password' => 'password5'
    ];
    $users[] = $user5;

    echo json_encode($users, JSON_PRETTY_PRINT);
} else {
    // Invalid request method
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
