(function() {

    window.addEventListener('load', init);


    function init() {

        alert('JavaScript Online!');

        createCalculatingTable();
        document.getElementById('div_to_table').appendChild(createCalculatingTable());



    }

    function createCalculatingTable() {

        // asks many classes do I want to insert
        if (grades().length === 0) {

            var numberOfClasses = prompt("How many classes?");
        }

        var disciplines = grades();

        var sumOfECTS = 0;
        var sumOfGrades = 0;
        var sumOfGradesTimesECTS = 0;

        // 3 columns: name of discipline, ECTS of discipline, final grade
        var numberOfColumns = 3;
        // create a table element
        var myTable = document.createElement('table');
        //create a thead element
        var myTableHead = document.createElement('thead');
        // create a row for thr thead element
        var myTableHeadRow = document.createElement('tr');
        // create 3 th elements to fill the tr element
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        // titles for the columns
        th1.innerHTML = "Discipline";
        th2.innerHTML = "ECTS";
        th3.innerHTML = "Final Grade";
        // append th elements to tr 
        myTableHeadRow.appendChild(th1);
        myTableHeadRow.appendChild(th2);
        myTableHeadRow.appendChild(th3);
        // append tr element to thead element
        myTableHead.appendChild(myTableHeadRow);
        // append thead element to table element
        myTable.appendChild(myTableHead)


        // create tbody element and then fill it
        var myTableBody = document.createElement('tbody');
        // create rows for various disciplines
        for (var i = 0; i < disciplines.length; i++) {

            var rowOftd = document.createElement('tr');

            var td1 = document.createElement('td'); //td1.innerHTML = '<input type="text"/>';
            var inp1 = document.createElement('input');
            inp1.type = 'text';
            inp1.value = disciplines[i][0];
            td1.appendChild(inp1);

            var td2 = document.createElement('td'); //td2.innerHTML = '<input type="number" min="3" max="9"/>';
            var inp2 = document.createElement('input');
            inp2.type = 'number';
            inp2.min = '3';
            inp2.max = '9';
            inp2.value = disciplines[i][1];
            td2.appendChild(inp2);

            var td3 = document.createElement('td'); //td3.innerHTML = '<input type="number" min="10" max="20"/>';
            var inp3 = document.createElement('input');
            inp3.type = 'number';
            inp3.min = '10';
            inp3.max = '20';
            inp3.value = disciplines[i][2];
            td3.appendChild(inp3);

            rowOftd.appendChild(td1);
            rowOftd.appendChild(td2);
            rowOftd.appendChild(td3);

            myTableBody.appendChild(rowOftd);

            sumOfECTS += inp2.value * 1;
            sumOfGrades += inp3.value * 1;

            sumOfGradesTimesECTS += (inp2.value * inp3.value);


        }
        // append tbody to table element
        myTable.appendChild(myTableBody);
        // creta tfoot element
        var myTableFoot = document.createElement('tfoot');
        // create tr element for tfoot
        var myTableFootRow = document.createElement('tr');
        // create 3 td elements for tr
        var tf1 = document.createElement('td');
        tf1.innerHTML = 'Total';
        var tf2 = document.createElement('td');
        tf2.innerHTML = sumOfECTS;
        var tf3 = document.createElement('td');
        tf3.innerHTML = sumOfGradesTimesECTS / sumOfECTS;
        // append the 3 td elements to tr
        myTableFoot.appendChild(tf1);
        myTableFoot.appendChild(tf2);
        myTableFoot.appendChild(tf3);
        // append tfoot element to table element
        myTable.appendChild(myTableFoot);

        document.getElementById('div_to_table').title = "" + grades().length + " disciplinas feitas!";

        return myTable;


    }

    function grades() {

        var grades = [

            ['Matemática Discreta', 6, 18],
            ['Arquitetura de Computadores', 6, 12],
            ['Organização de Empresas', 5, 15],
            ['Oficinas de Língua Portuguesa', 3, 17],
            ['Algoritmia e Programação', 8, 13],
            ['Sociedade da Informação e Conhecimento', 3, 17],
            ['Redes de Computadores', 4, 14],
            ['Sistemas de Informação', 6, 13],
            ['Programação Orientada a Objetos', 7, 17],
            ['Análise Matemática', 6, 20],
            ['Álgebra Linear', 6, 17],
            ['Laboratórios de Programação', 6, 16],
            ['Modelos Estatísticos', 6, 15],
            ['Desenvolvimento de Sistemas de Informação', 6, 10],
            ['Algoritmia Aplicada', 6, 17],
            ['Sistemas Operativos', 6, 16],
            ['Sistemas Web', 6, 11],
            ['Sistemas Multimédia', 6, 15],
            ['Fundamentos de Bases de Dados', 6, 15],
            ['Inteligência Artificial', 5, 16],
            ['Estruturas de Dados', 6, 14],
            ['Empreendedorismo', 6, 15],
            ['Tecnologias de Bases de Dados', 6, 18],
            ['Linguagens e Tecnologias Web', 6, 10],
            ['Engenharia de Software', 7, 17],
            ['Sistemas Distribuídos', 6, 17],
            ['Produção de Conteúdos Multimédia', 6, 14]

        ];

        return grades;

    }










})();