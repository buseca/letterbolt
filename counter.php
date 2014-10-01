<?php  $File = "counter.txt";  //This is the text file we keep our count in, that we just made 

$handle = fopen($File, 'r+') ;  //Here we set the file, and the permissions to read plus write   
$data = fread($handle, 512) ;  //Actully get the count from the file   
$count = $data + 1;  //Add the new visitor to the count   
print $count;  //Prints the count on the page   
fseek($handle, 0) ;  //Puts the pointer back to the begining of the file   
fwrite($handle, $count) ;  //saves the new count to the file   
fclose($handle) ;  //closes the file  

?>