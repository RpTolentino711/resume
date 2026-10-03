<?php
/**
 * DevResume Studio - PHP Backend Save Endpoint
 * Persists resume changes directly to resume_data.json on the server
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Only POST is supported.']);
    exit;
}

$rawInput = file_get_contents('php://input');

if (empty($rawInput)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No data received.']);
    exit;
}

$decoded = json_decode($rawInput, true);

if (json_last_error() !== JSON_ERROR_NONE || !isset($decoded['basics']) || !isset($decoded['skills'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid resume payload structure.',
        'details' => json_last_error_msg()
    ]);
    exit;
}

$targetFile = __DIR__ . '/resume_data.json';

// Write formatted JSON
$saved = file_put_contents($targetFile, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

if ($saved === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to write data to server disk.']);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Resume saved successfully on PHP server!',
    'timestamp' => date('Y-m-d H:i:s'),
    'bytes' => $saved
]);
