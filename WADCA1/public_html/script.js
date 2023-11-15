function searchButton() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "Product.xml", true);
    xhttp.send();

}

function myFunction(xml) {
    var xmlDoc, Products, table;
    xmlDoc = xml.responseXML;
    Products = xmlDoc.getElementsByTagName("product");
    var table = "<tr><th>code</th></tr><tr><th>category</th></tr><tr><th>Name</th></tr>\n\
    <tr><th>Description</th></tr><tr><th>Quantity</th></tr><tr><th>UnitPrice</th></tr>";
    alert(Products.length);
    for (i = 0; i < Products.length; i++) {
        if (document.myForm.code.value == Products[i].getAttribute("Code")) {
            table += "<tr><td>" +
                    Products[i].getAttribute("Code") +
                    "</td><td>" +
                    Products[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    Products[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    Products[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    Products[i].getElementsByTagName("Quantity")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    Products[i].getElementsByTagName("UnitPrice")[0].childNodes[0].nodeValue +
                    "</td></tr>";
        }
    }
    alert(table);
    document.getElementById("demo").innerHTML = table;
}
