function stripeTables() {
    if (!document.getElementsByName()) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i=0; i<tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j=0; j<rows.length; j++) {
            rows[j].style.backgroundColor = "#ffc";
            odd = false;
        } else {
            odd = true;
        }
    }
}