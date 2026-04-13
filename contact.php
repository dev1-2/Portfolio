<?php
/**
 * contact.php – Contact form handler for Portfolio Jasper Haas
 * No database required. Sends email via PHP mail().
 */

// ---- Headers ----
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ---- Honeypot check ----
$honeypot = isset($_POST['website']) ? $_POST['website'] : '';
if (!empty($honeypot)) {
    // Silent success to fool bots
    echo json_encode(['success' => true, 'message' => 'Danke für deine Nachricht!']);
    exit;
}

// ---- Time check (bot submits too fast) ----
$formTime = isset($_POST['form_time']) ? intval($_POST['form_time']) : 0;
if ($formTime > 0) {
    $elapsed = time() - (intval($formTime) / 1000);
    if ($elapsed < 4) {
        echo json_encode(['success' => true, 'message' => 'Danke für deine Nachricht!']);
        exit;
    }
}

// ---- Sanitize & validate inputs ----
$name    = isset($_POST['name'])    ? strip_tags(trim($_POST['name']))    : '';
$email   = isset($_POST['email'])   ? strip_tags(trim($_POST['email']))   : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Bitte alle Felder ausfüllen.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

// Limit lengths to prevent abuse
if (mb_strlen($name) > 120 || mb_strlen($email) > 254 || mb_strlen($message) > 4000) {
    echo json_encode(['success' => false, 'message' => 'Eingabe zu lang.']);
    exit;
}

// Escape for safe use in email body
$safeName    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// ---- Compose email ----
$to      = 'info@jasperhaas.de';
$subject = '=?UTF-8?B?' . base64_encode('Neue Kontaktanfrage von ' . $safeName) . '?=';

$body  = "Neue Nachricht über das Portfolio-Kontaktformular:\n\n";
$body .= "Name:    " . $safeName . "\n";
$body .= "E-Mail:  " . $safeEmail . "\n";
$body .= "Nachricht:\n" . $safeMessage . "\n\n";
$body .= "---\nGesendet am: " . date('d.m.Y H:i:s') . "\n";

// Strip newlines from name to prevent email header injection
$safeNameHeader = str_replace(["\r", "\n", '%0a', '%0d'], '', $safeName);

$headers  = "From: =?UTF-8?B?" . base64_encode($safeNameHeader) . "?= <noreply@jasperhaas.de>\r\n";
$headers .= "Reply-To: " . $safeEmail . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// ---- Send ----
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Nachricht gesendet! Ich melde mich bald.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Fehler beim Senden. Bitte versuche es erneut oder schreibe direkt an info@jasperhaas.de.']);
}
exit;
