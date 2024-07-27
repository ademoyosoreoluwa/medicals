<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$staffName = $_POST['staff-name'];
$date = $_POST['date'];
$serviceUserName = $_POST['service-user-name'];
$medications = $_POST['medications'];

// Add the path where you want to save the Excel file
$filePath = 'file:///Users/apple/Desktop/Triangle%20Housing/Book.xlsx';  // <-- Change this to your desired path
$filename = $filePath . $serviceUserName . '_medication_record.xlsx';

if (file_exists($filename)) {
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filename);
} else {
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $headers = ['Block letters', 'Date Commenced', 'Drug Name', 'Dosage', 'Route of Administration', '8am', '12pm', '4pm', '8pm', 'Staff Name', 'Date'];
    foreach ($headers as $index => $header) {
        $sheet->setCellValueByColumnAndRow($index + 1, 1, $header);
    }
}

$sheet = $spreadsheet->getActiveSheet();
$row = $sheet->getHighestRow() + 1;

foreach ($medications as $index => $medication) {
    $sheet->setCellValue('A' . $row, chr(65 + $index)); // Block letters
    $sheet->setCellValue('B' . $row, ''); // Date Commenced
    $sheet->setCellValue('C' . $row, ''); // Drug Name
    $sheet->setCellValue('D' . $row, ''); // Dosage
    $sheet->setCellValue('E' . $row, ''); // Route of Administration
    $sheet->setCellValue('F' . $row, isset($medication['8am']) ? 'Yes' : 'No');
    $sheet->setCellValue('G' . $row, isset($medication['12pm']) ? 'Yes' : 'No');
    $sheet->setCellValue('H' . $row, isset($medication['4pm']) ? 'Yes' : 'No');
    $sheet->setCellValue('I' . $row, isset($medication['8pm']) ? 'Yes' : 'No');
    $sheet->setCellValue('J' . $row, $staffName);
    $sheet->setCellValue('K' . $row, $date);
    $row++;
}

$writer = new Xlsx($spreadsheet);
$writer->save($filename);

$lastDayOfMonth = date('t');

if (date('d') == $lastDayOfMonth) {
    $to = 'recipient@example.com';
    $subject = 'Monthly Medication Record';
    $body = 'Attached are the medication records for the month.';
    $headers = 'From: sender@example.com';

    $attachments = [];
    foreach (['MR. Anil Chakravarti', 'MS. Jane Doe', 'MR. John Smith'] as $user) {
        $userFilename = $filePath . $user . '_medication_record.xlsx';  // <-- Add path to each user's file
        if (file_exists($userFilename)) {
            $attachments[$userFilename] = file_get_contents($userFilename);
        }
    }

    $boundary = md5(time());

    $headers .= "\r\nMIME-Version: 1.0\r\n"
        . "Content-Type: multipart/mixed; boundary=\"{$boundary}\"";

    $message = "--{$boundary}\r\n"
        . "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n"
        . "Content-Transfer-Encoding: 7bit\r\n"
        . "\r\n"
        . $body . "\r\n";

    foreach ($attachments as $filename => $fileContents) {
        $attachment = chunk_split(base64_encode($fileContents));
        $message .= "--{$boundary}\r\n"
            . "Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; name=\"{$filename}\"\r\n"
            . "Content-Transfer-Encoding: base64\r\n"
            . "Content-Disposition: attachment; filename=\"{$filename}\"\r\n"
            . "\r\n"
            . $attachment . "\r\n";
    }

    $message .= "--{$boundary}--";

    mail($to, $subject, $message, $headers);
}

echo "Data saved successfully. And thank you for completing the night duty tasks. Your submission has been recorded.";
?>
