//Array das questoes agrupadas por categoria (25 questoes cada)

const questions = [
    {
        category: "Javascript",
        questions: [
            {
                question: "Qual destes é um tipo de dado primitivo em JavaScript?",
                options: ["Array", "String", "Function", "Object"],
                correctAnswer: 1,
            },
            {
                question: "Qual é o resultado de `typeof null`?",
                options: ["undefined", "null", "object", "string"],
                correctAnswer: 2,
            },
            {
                question: "Qual método converte uma string para um número inteiro?",
                options: ["parseFloat()", "toFixed()", "parseInt()", "Number.toInt()"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas palavras-chave é usada para declarar uma variável com escopo de bloco?",
                options: ["var", "let", "const", "global"],
                correctAnswer: 1,
            },
            {
                question: "O que `===` verifica em JavaScript?",
                options: ["Apenas igualdade de valor", "Apenas igualdade de tipo", "Igualdade de valor e tipo", "Nenhuma das anteriores"],
                correctAnswer: 2,
            },
            {
                question: "Qual método adiciona um item ao final de um array?",
                options: ["shift()", "unshift()", "push()", "pop()"],
                correctAnswer: 2,
            },
            {
                question: "O que `NaN` significa?",
                options: ["Nada além de nulo", "Not a Number", "Número anulado", "Número absoluto negativo"],
                correctAnswer: 1,
            },
            {
                question: "Qual operador é usado para encadear condições lógicas?",
                options: ["&", "|||", "&&", "=="],
                correctAnswer: 2,
            },
            {
                question: "Qual estrutura repete um bloco de código enquanto uma condição for verdadeira?",
                options: ["if", "while", "switch", "forEach"],
                correctAnswer: 1,
            },
            {
                question: "Como se chama uma função definida dentro de um objeto?",
                options: ["Closure", "Função interna", "Método", "Callback"],
                correctAnswer: 2,
            },
            {
                question: "O que `JSON.parse()` faz?",
                options: ["Converte um JSON em string", "Converte uma string JSON em objeto", "Valida JSON", "Converte JSON em array"],
                correctAnswer: 1,
            },
            {
                question: "Qual evento é disparado quando um usuário clica em um botão?",
                options: ["submit", "change", "click", "input"],
                correctAnswer: 2,
            },
            {
                question: "Qual método transforma um array em uma string?",
                options: ["slice()", "join()", "split()", "toStringArray()"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a saída de `Boolean(0)`?",
                options: ["true", "undefined", "false", "null"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas não é uma estrutura de controle?",
                options: ["if", "for", "echo", "switch"],
                correctAnswer: 2,
            },
            {
                question: "O que `this` representa dentro de um método?",
                options: ["O objeto global", "O objeto dono do método", "A função atual", "O escopo pai"],
                correctAnswer: 1,
            },
            {
                question: "Como se previne o comportamento padrão de um formulário?",
                options: ["form.cancel()", "event.cancel()", "event.preventDefault()", "stopPropagation()"],
                correctAnswer: 2,
            },
            {
                question: "Como escrever um comentário de múltiplas linhas?",
                options: ["// comentário", "<!-- comentário -->", "/* comentário */", "# comentário"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas não é uma biblioteca ou framework de JavaScript?",
                options: ["Vue.js", "React", "Django", "Laravel"],
                correctAnswer: 3,
            },
            {
                question: "Qual método remove o último item de um array?",
                options: ["shift()", "pop()", "unshift()", "slice()"],
                correctAnswer: 1,
            },
            {
                question: "O que significa AJAX?",
                options: ["All JavaScript and XML", "Asynchronous JavaScript and XML", "Application JSON and XML", "Active Java Application XML"],
                correctAnswer: 1,
            },
            {
                question: "Qual valor `undefined == null` retorna?",
                options: ["true", "false", "true", "erro"],
                correctAnswer: 0,
            },
            {
                question: "Qual método copia parte de um array sem modificá-lo?",
                options: ["splice()", "slice()", "cut()", "split()"],
                correctAnswer: 1,
            },
            {
                question: "Qual símbolo inicia uma template literal?",
                options: ["'", "\"", "`", "~"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas estruturas cria um loop com número conhecido de iterações?",
                options: ["while", "do…while", "for", "forEach"],
                correctAnswer: 2,
            },
        ]
    },
    {
        category: "PHP",
        questions: [
            {
                question: "Qual símbolo inicia uma variável em PHP?",
                options: ["&", "$", "%", "@"],
                correctAnswer: 1,
            },
            {
                question: "Qual função exibe algo na tela?",
                options: ["println()", "console.log()", "echo", "printout()"],
                correctAnswer: 2,
            },
            {
                question: "Qual é o delimitador de fim de bloco no PHP?",
                options: ["{ }", "begin end", ";", "endif"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas é uma estrutura de repetição em PHP?",
                options: ["foreach", "for", "while", "Todas as anteriores"],
                correctAnswer: 3,
            },
            {
                question: "Como concatenar strings em PHP?",
                options: ["+", ".", "\".\"", ","],
                correctAnswer: 2,
            },
            {
                question: "Como incluir um arquivo em PHP?",
                options: ["include()", "require()", "Ambos", "Nenhum"],
                correctAnswer: 2,
            },
            {
                question: "Qual função verifica se uma variável está definida?",
                options: ["isset()", "defined()", "isset()", "var_exists()"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a extensão padrão de um arquivo PHP?",
                options: [".html", ".php", ".phtml", ".ph"],
                correctAnswer: 1,
            },
            {
                question: "Qual valor `empty([])` retorna?",
                options: ["true", "false", "true", "null"],
                correctAnswer: 0,
            },
            {
                question: "Como declarar uma constante?",
                options: ["constant NAME = \"valor\";", "const = \"valor\";", "define(\"NAME\", \"valor\");", "let NAME = \"valor\";"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas não é uma função de array?",
                options: ["array_merge()", "array_push()", "array_join()", "array_combine()"],
                correctAnswer: 2,
            },
            {
                question: "O que faz `$_POST`?",
                options: ["Lê variáveis da URL", "Lê dados enviados via método POST", "Lê cookies", "Lê sessão"],
                correctAnswer: 1,
            },
            {
                question: "Como iniciar uma sessão?",
                options: ["start_session()", "open_session()", "session_start()", "create_session()"],
                correctAnswer: 2,
            },
            {
                question: "Qual operador de atribuição soma e atribui?",
                options: ["=+", "++=", "+=", "==+"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas não é uma superglobal?",
                options: ["$_POST", "$_SESSION", "$_REQUEST", "$_HTML"],
                correctAnswer: 3,
            },
            {
                question: "Qual função remove espaços em branco no início e fim de uma string?",
                options: ["removeSpaces()", "strip()", "trim()", "clean()"],
                correctAnswer: 2,
            },
            {
                question: "Qual operador compara valor e tipo?",
                options: ["==", "===", "!=", "=>"],
                correctAnswer: 1,
            },
            {
                question: "Qual função retorna a quantidade de elementos de um array?",
                options: ["count()", "size()", "length()", "count()"],
                correctAnswer: 0,
            },
            {
                question: "Como acessar o primeiro elemento de um array $arr?",
                options: ["$arr[1]", "$arr[0]", "$arr[first]", "$arr->first"],
                correctAnswer: 1,
            },
            {
                question: "Qual estrutura trata exceções?",
                options: ["try-catch", "if-else", "handle()", "try-catch"],
                correctAnswer: 0,
            },
            {
                question: "Como criar um array associativo?",
                options: ["array(1,2,3)", "array(\"chave\" => \"valor\")", "[1,2,3]", "{1,2,3}"],
                correctAnswer: 1,
            },
            {
                question: "Qual operador retorna verdadeiro se apenas uma das condições for verdadeira?",
                options: ["&", "&&", "xor", "or"],
                correctAnswer: 2,
            },
            {
                question: "Qual função lê um arquivo inteiro para uma string?",
                options: ["read_file()", "open()", "file_get_contents()", "fread()"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas não é um tipo escalar em PHP?",
                options: ["boolean", "integer", "string", "array"],
                correctAnswer: 3,
            },
            {
                question: "Qual versão introduziu o PHP 7?",
                options: ["2013", "2014", "2015", "2016"],
                correctAnswer: 2,
            },
        ]
    },
    {
        category: "Python",
        questions: [
            {
                question: "Qual função imprime algo na tela em Python?",
                options: ["echo()", "print()", "console.log()", "printf()"],
                correctAnswer: 1,
            },
            {
                question: "Qual estrutura repete um bloco de código enquanto uma condição for verdadeira?",
                options: ["if", "for", "while", "repeat"],
                correctAnswer: 2,
            },
            {
                question: "Qual destes não é um tipo de dado primitivo em Python?",
                options: ["int", "float", "bool", "decimal"],
                correctAnswer: 3,
            },
            {
                question: "Como comentar uma única linha em Python?",
                options: ["// comentário", "# comentário", "<!-- comentário -->", "/* comentário */"],
                correctAnswer: 1,
            },
            {
                question: "Qual destas é uma biblioteca para ciência de dados?",
                options: ["Flask", "NumPy", "Django", "Tkinter"],
                correctAnswer: 1,
            },
            {
                question: "Qual é o operador de exponenciação em Python?",
                options: ["^", "**", "pow()", "//"],
                correctAnswer: 1,
            },
            {
                question: "Qual função retorna o comprimento de uma lista?",
                options: ["length()", "count()", "size()", "len()"],
                correctAnswer: 3,
            },
            {
                question: "Qual destas é uma coleção imutável?",
                options: ["list", "dict", "set", "tuple"],
                correctAnswer: 3,
            },
            {
                question: "Qual palavra-chave define uma função?",
                options: ["func", "function", "def", "define"],
                correctAnswer: 2,
            },
            {
                question: "Como se chama a indentação obrigatória em Python?",
                options: ["Parênteses", "Chaves", "Espaços ou tabs", "Ponto e vírgula"],
                correctAnswer: 2,
            },
            {
                question: "Qual função converte string para número inteiro?",
                options: ["str()", "float()", "int()", "num()"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas exceções ocorre ao dividir por zero?",
                options: ["ValueError", "TypeError", "ZeroDivisionError", "IndexError"],
                correctAnswer: 2,
            },
            {
                question: "Qual operador lógico representa 'e'?",
                options: ["&&", "&", "and", "&&&"],
                correctAnswer: 2,
            },
            {
                question: "Como criar um dicionário vazio?",
                options: ["dict[]", "{}", "[]", "empty{}"],
                correctAnswer: 1,
            },
            {
                question: "Qual método adiciona um elemento ao final de uma lista?",
                options: ["append()", "add()", "insert()", "push()"],
                correctAnswer: 0,
            },
            {
                question: "Qual método retorna o maior valor de uma lista?",
                options: ["max()", "biggest()", "highest()", "largest()"],
                correctAnswer: 0,
            },
            {
                question: "Qual módulo manipula expressões regulares?",
                options: ["regex", "re", "regexp", "pattern"],
                correctAnswer: 1,
            },
            {
                question: "Qual palavra-chave cria uma classe?",
                options: ["define", "class", "object", "new"],
                correctAnswer: 1,
            },
            {
                question: "Qual operador verifica igualdade de valores?",
                options: ["=", "==", "===", ":="],
                correctAnswer: 1,
            },
            {
                question: "Qual destas estruturas permite percorrer elementos de uma lista?",
                options: ["while", "do…while", "foreach", "for"],
                correctAnswer: 3,
            },
            {
                question: "Qual é o tipo retornado por input()?",
                options: ["int", "string", "bool", "float"],
                correctAnswer: 1,
            },
            {
                question: "Como importar um módulo em Python?",
                options: ["#import math", "include math", "import math", "using math"],
                correctAnswer: 2,
            },
            {
                question: "Qual destas palavras-chave é usada para herança?",
                options: ["extends", "inherit", "super", "class"],
                correctAnswer: 3,
            },
            {
                question: "Qual comando finaliza um loop antes do tempo?",
                options: ["stop", "exit", "break", "end"],
                correctAnswer: 2,
            },
            {
                question: "Qual é o nome da estrutura de controle condicional em Python?",
                options: ["switch", "select", "if", "case"],
                correctAnswer: 2,
            },
        ]
    },
    {
        category: "HTML",
        questions: [
            {
                question: "Qual é a tag raiz de um documento HTML?",
                options: ["<html>", "<head>", "<body>", "<root>"],
                correctAnswer: 0,
            },
            {
                question: "Qual elemento contém metadados?",
                options: ["<meta>", "<head>", "<body>", "<header>"],
                correctAnswer: 1,
            },
            {
                question: "Qual atributo especifica o endereço de uma imagem?",
                options: ["src", "href", "alt", "link"],
                correctAnswer: 0,
            },
            {
                question: "Qual tag cria um link?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag define uma lista ordenada?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                correctAnswer: 0,
            },
            {
                question: "Qual atributo abre um link em nova aba?",
                options: ["open='_blank'", "target='_blank'", "blank='true'", "newtab='yes'"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag insere uma quebra de linha?",
                options: ["<br>", "<break>", "<lb>", "<nl>"],
                correctAnswer: 0,
            },
            {
                question: "Qual tag define um parágrafo?",
                options: ["<p>", "<para>", "<paragraph>", "<text>"],
                correctAnswer: 0,
            },
            {
                question: "Qual tag agrupa conteúdo centralizado e destacado?",
                options: ["<center>", "<main>", "<div>", "<section>"],
                correctAnswer: 0,
            },
            {
                question: "Qual elemento representa conteúdo importante?",
                options: ["<strong>", "<b>", "<important>", "<highlight>"],
                correctAnswer: 0,
            },
            {
                question: "Qual tag define uma tabela?",
                options: ["<table>", "<tab>", "<tbl>", "<grid>"],
                correctAnswer: 0,
            },
            {
                question: "Qual tag contém o título de uma tabela?",
                options: ["<caption>", "<title>", "<thead>", "<header>"],
                correctAnswer: 0,
            },
            {
                question: "Qual elemento agrupa células de cabeçalho de tabela?",
                options: ["<thead>", "<th>", "<header>", "<hgroup>"],
                correctAnswer: 0,
            },
            {
                question: "Qual atributo especifica o texto alternativo de uma imagem?",
                options: ["title", "alt", "text", "description"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag define uma lista desordenada?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                correctAnswer: 1,
            },
            {
                question: "Qual elemento define o conteúdo principal da página?",
                options: ["<body>", "<main>", "<center>", "<content>"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag é usada para inserir scripts JavaScript?",
                options: ["<script>", "<js>", "<javascript>", "<code>"],
                correctAnswer: 0,
            },
            {
                question: "Qual tag cria um campo de entrada de texto?",
                options: ["<input>", "<textarea>", "<field>", "<text>"],
                correctAnswer: 0,
            },
            {
                question: "Qual atributo define o valor inicial de um campo input?",
                options: ["init", "value", "default", "start"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag agrupa elementos de formulário?",
                options: ["<fieldset>", "<group>", "<formgroup>", "<container>"],
                correctAnswer: 0,
            },
            {
                question: "Qual elemento fornece uma legenda para <fieldset>?",
                options: ["<caption>", "<legend>", "<label>", "<title>"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag insere mídia de vídeo?",
                options: ["<media>", "<video>", "<movie>", "<vid>"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag representa uma citação em bloco?",
                options: ["<quote>", "<blockquote>", "<q>", "<cite>"],
                correctAnswer: 1,
            },
            {
                question: "Qual tag cria um item de lista?",
                options: ["<li>", "<item>", "<listitem>", "<ul>"],
                correctAnswer: 0,
            },
            {
                question: "Qual elemento cria um menu suspenso?",
                options: ["<menu>", "<select>", "<dropdown>", "<option>"],
                correctAnswer: 1,
            },
        ]
    }
];
