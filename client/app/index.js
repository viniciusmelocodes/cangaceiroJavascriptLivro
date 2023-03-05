var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos); // verificando o conteúdo do array
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    // cancelando a submissão do formulário
    event.preventDefault();

    // substituindo o alert pelo novo código
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    // limpa o campo da data
    campos[0].value = '';
    // limpa o campo da quantidade
    campos[1].value = 1;
    // limpa o campo do valor
    campos[2].value = 0;
    // foca no campo da data
    campos[0].focus();
});