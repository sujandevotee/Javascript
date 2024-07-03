let row;
    let col;
    let size = 11;
    let total = Math.floor(size / 2);
    for (row = 0; row < size; row++) {
      for (col = 0; col < size; col++) {
        if (col == total || row == total) {
          document.write("&nbsp;*&nbsp;");
        } else {
          document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
        }
      }
      document.write("</br>");
    }