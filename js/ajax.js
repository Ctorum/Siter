$(document).ready(function() {
    $.get('https://brasil.io/covid19/' + name, function(response) {
        var blecous = $(response).find('div.card-content.card-body.number');

        var headers = $('.inf1');

        blecous.each((i, e) => {
            if(i!=0) {
                headers[i-1].innerHTML += $(e).text();
            }
        });

        console.log(blecous.text());
    });
});

const alfabeto = [
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z'
];

function decodificar(texto) {
    var decodificado = '';
    texto = texto.replace(/[\s-]/g,"");
    for (char of texto) {
        var index = alfabeto.indexOf(char);
        if (index === 25) {
            decodificado += alfabeto[0];
        } else if(index !== 25) {
            decodificado += alfabeto[index + 1];
        }
    }
    return decodificado;
}

$('.btn').click(()=> {
    var nome = $('input.txtName').text();
    var corpo = $('div.box2').text();

    var destiny = $('input.txtEmail').val();
    console.log(destiny);

    Email.send({
        Host : "smtp.gmail.com",
        Username : decodificar('urbnod') + "." + decodificar("qnns") + "@gmail.com",
        Password : decodificar('fhnuzmmz').toUpperCase() + '030204',
        To : destiny, 
        From : decodificar('urbnod') + "." + decodificar("qnns") + "@gmail.com",
        Subject : nome,
        Secure: true,
        Body : corpo
    }).then((message) => {
            alert('O e-mail foi enviado com sucesso!');

            $('.subject').val("");
            $('div.textbox').text("");

            console.log(message);
        }
    )
    .catch((error) => {
        alert('FALHA! Para mais informações, abra o menu console do seu navegador!');
        console.log(error)
    });
});