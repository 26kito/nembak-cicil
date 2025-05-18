<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <title>Misi Mendapatkan Cicil</title>
  <?php date_default_timezone_set("Asia/Jakarta");
  if (isset($_GET['jawaban'])) {
    $fp = fopen('dekatutorial.txt', 'r');
    echo '<link rel="stylesheet" href="https://dekatutorial.github.io/18nembak/tampil.css" /></head><body><div class="top">Jawaban<br /></div><div class="content">';
    while (!feof($fp)) {
      echo "" . fgets($fp) . "<br>";
    }
    echo '</div></body></html>';
    die;
    fclose($fp);
  }
  if (isset($_POST['submit'])) {
    $date = date("d-M-Y (H:i)");
    $status = $_POST["Status"];
    $pesan = $_POST["Pesan"];
    $fp = fopen('dekatutorial.txt', 'a');
    $phone = "6285173326020";
    fwrite($fp, $date . "\nStatus :\n<strong>" . $status . "\n</strong> Pesan :\n<strong>" . $pesan . "</strong>\n\n");
    fclose($fp);
    header("Location: https://wa.me/$phone?text=$pesan");
  } 
  ?>
  <script>
    var musik = "";
    var backgound = "";
    var gambarStiker1 = "";
    var gambarStiker2 = "";
    var gambarStiker3 = "";
  </script>
  <script src="https://dekatutorial.github.io/sweetalert2.all.min.js"></script>
  <!-- <link rel="stylesheet" href="https://dekatutorial.github.io/18nembak/style.css" /> -->
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="preload">
    <p>Loading dulu . . .</p>
  </div>
  <div class="open">
    <div>
      <div class="lope" onclick="ilang()"><i class="love material-icons-sharp"> favorite </i></div>
      <h3>Pencet Love nya</h3>
    </div>
  </div>
  <div class="bg"></div>
  <div class="lopeBg"></div>
  <div class="top stiker"><img src="" /><img src="" /><img src="" /></div>
  <div class="ucapan">
    <div id="slider">
      <!-- Ucapan awal -->
      <p>Haii cicil:) I have been waiting for this moment like a month, since I think this is the perfect time and it would be sweet date if I have you on this day</p>
      <p>You know that I had a crush on you right? Back then we just met and doesn't know each other. Year has been passed and my feelings toward you still same</p>
      <p>I know that I'm not perfect, but I'm learn and trying to be better. I promise that it will be worth it :p</p>

      <!-- Pertanyaan -->
      <p>Kamu mau gaa jadi pacar aku?</p>
    </div>
    <div id="slider">
      <!-- Ucapan diterima -->
      <p>Makasih ya udah mau nerima aku</p>
    </div>
  </div>
  <script>
    // PENTING : jika ekstensi file berbeda silahkan ganti di bawah ini
    musik = "ily.mp3";
    background = "background.jpeg";
    gambarStiker1 = "FileStiker1.gif";
    gambarStiker2 = "FileStiker2.gif";
    gambarStiker3 = "FileStiker3.gif";
  </script>
  <div class="button">
    <div>
      <button>Back</button>
      <button>Next</button>
    </div>
    <div>
      <button>Gamau</button>
      <button>Mau</button>
    </div>
    <div>
      <button>Kirim Pesan</button>
    </div>
  </div>
  <div class="container-pesan" style="display: none">
    <div class="kirim-pesan">
      <p>Kirim Pesan</p>
      <form method="post">
        <input name="Status" hidden class="jawaban" type="text" value="" />
        <textarea required name="Pesan" id="" cols="30" rows="10" placeholder="Tulis pesan..."></textarea>
        <button type="submit" name="submit">Kirim</button>
      </form>
    </div>
  </div>
  <script src="script.js"></script>
</body>

</html>