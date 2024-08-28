var a;
var b;
var c;
var d;
var resulte = 0;
var average = 0;

function Calculate() {
    a = parseInt(form1.txtnum1.value);
    b = parseInt(form1.txtnum2.value);
    c = parseInt(form1.txtnum3.value);
    d = parseInt(form1.txtnum4.value);

    resulte = a + b + c + d;

    average = resulte / 3;

    document.write("Your Total is :" + "<b>" + resulte + "<b>" + "<br>");
    document.write(" Your Percantege is :" + "<b>" + average + "<b>" + "<br>");

    if (average > 50) {
        document.write("your Grade is :" + "<b>" + "pass" + "<b>");
    }
    else {
        document.write("your Grade  is :" + "<b>" + "fail" + "<b>");
    }

}

