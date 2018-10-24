// --- CALCUL --- //
function mesOperations() {
    var v1 = document.getElementById("id-val1").value;
    var v2 = document.getElementById("id-val2").value;

    var op = document.getElementById('id-operation');
    var opc = op.options[op.selectedIndex].value;

    switch (opc) {
        case '+':
            var r = Number(v1) + Number(v2);
            break;


        case '-':
            var r = Number(v1) - Number(v2);
            break;


        case '*':
            var r = Number(v1) * Number(v2);
            break;


        case '/':
            var r = Number(v1) / Number(v2);
            break;
    }

    document.getElementById("id-resultat").innerHTML = r;

    confirm('Le resultat de l\'operation ' + v1 + opc + v2 + " = " + (document.getElementById("id-resultat").innerHTML = r));
}

// --- APPARAITRE - DISPARAITRE --- //

function apparaitre() {
    document.getElementById('id-visibilite').style.visibility = "hidden";
}

function disparaitre() {
    document.getElementById('id-visibilite').style.visibility = "visible";
}

// --- APPARAITRE L'INFORMATION AVEC LE SURVOL ---//

function initElement() {
    var infooperation = document.getElementById('id-operation')
    var infoval1 = document.getElementById("id-val1");
    var infoval2 = document.getElementById("id-val2")

    infoval1.onmouseover = montrerinfo;
    infoval1.onmouseout = cacheinfo;
    infoval2.onmouseover = montrerinfo;
    infoval2.onmouseout = cacheinfo;

    infooperation.onmouseover = montrerinfoop;
    infooperation.onmouseout = cacheinfoop;
};

function montrerinfo() {
    var divinfo = document.getElementById("id-info");
    divinfo.innerHTML = 'Saisir un Chiffre';
}
function cacheinfo() {
    var divinfo = document.getElementById("id-info");
    divinfo.innerHTML = '';
}

function montrerinfoop() {
    var divinfo = document.getElementById("id-info");
    divinfo.innerHTML = 'Selectionner un operateur:  +  -  *  /  ';
}

function cacheinfoop() {
    var divinfo = document.getElementById("id-info");
    divinfo.innerHTML = '';
}