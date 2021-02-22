function calculate() {
    var first = 500;
    var bilimDengeyi = Number(document.getElementById("bilim").value);
    var otbasyTabysy = Number(document.getElementById("tabys").value);
    var onerlygy = 0;
        for (i = 0; i < document.talant.option.length; i++){
            if(document.talant.option[i].checked == true){
                onerlygy += Number(document.talant.option[i].value);
            }
        }
    var jasy = 1;
        for (i = 0; i < document.age.option.length; i++){
            if(document.age.option[i].checked == true){
                jasy = Number(document.age.option[i].value);
                break;
            }
        }
    var final = (((first * bilimDengeyi * otbasyTabysy) + onerlygy) * jasy);
        if(document.bedel.option[0].checked == true){
            final *= document.bedel.option[0].value;
        }
        if(document.bedel.option[1].checked == true){
            final *= document.bedel.option[1].value;
        }
        if(document.bedel.option[2].checked == true){
            final -= document.bedel.option[2].value;
        }
    alert(final + "$");
}
