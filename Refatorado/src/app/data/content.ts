import foto1 from '../../assets/foto1.png';
import foto2 from '../../assets/foto2.png';
import foto15 from '../../assets/foto15.png';

/* ─────────────────────────────────────────────────────
   Intro
───────────────────────────────────────────────────── */
export const NOMES = ['VIBRUNA', 'BRUNICIUS', 'VIBRU', 'BRUVI', 'VINUNA', 'BRUNI'];

export const BADGE_START = 9000;  // ms: primeiro apelido
export const BADGE_STEP  = 2200;  // ms entre cada apelido
export const LAST_HOLD   = 2000;  // pausa no último apelido
export const TOTAL_DUR   = BADGE_START + NOMES.length * BADGE_STEP + LAST_HOLD;

/* ─────────────────────────────────────────────────────
   Timeline
───────────────────────────────────────────────────── */
export interface Momento {
  data:     string;
  titulo:   string;
  descricao: string;
  emoji:    string;
  img:      string;
}

export const momentos: Momento[] = [
  {
    data:      '01',
    titulo:    'O começo mais aleatório possível',
    descricao: 'O armazém. Entre caixas de livros, entregas e organização, tinha uma garota quieta que quase não falava com ninguém. Enquanto todo mundo descansava conversando, ela ficava isolada no celular. E, mesmo respondendo pouco, eu continuava tentando puxar assunto. Na maioria das vezes, acabava sendo ignorado, mas isso não me impedia de tentar de novo kkkkk.',
    emoji:     '📦',
    img:       foto1,
  },
  {
    data:      '02',
    titulo:    'Operação Excel',
    descricao: 'Um amigo foi chamado para ajudá-la com algumas planilhas. E ali nasceu a oportunidade perfeita: eu arrumei um jeito de “ajudar também” só para conseguir me aproximar dela. No fim das contas, a intenção nem era ajudar meu amigo, mas sim tentar ganhar um pouco da atenção dela.',
    emoji:     '📊',
    img:       foto2,
  },
  {
    data:      '03',
    titulo:    'A garota que não gostava de falar com estranhos',
    descricao: 'As conversas ainda eram curtas, mas aos poucos fomos quebrando o gelo. O interesse começou a surgir dos dois lados... apesar de que, da minha parte, ele já existia desde o primeiro dia em que eu a vi.',
    emoji:     '🙊',
    img:       foto1,
  },
  {
    data:      '04',
    titulo:    'O famoso “tá bom”',
    descricao: 'Certa vez ela comentou que gostava de acarajé. Usei isso ao meu favor e, naquela mesma noite, fui comprar um acarajé só para mandar uma foto para ela. Aproveitei a oportunidade e convidei ela para sair comigo para comer “o melhor acarajé da cidade”. A resposta? “Tá bom.” E eu quase fui destruído emocionalmente.',
    emoji:     '😅',
    img:       foto2,
  },
  {
    data:      '05',
    titulo:    'O desfile cívico e o sofrimento psicológico',
    descricao: 'Após o trauma do “tá bom”, continuamos nos falando, mas a frequência tinha diminuído um pouco. Então chegou o dia do desfile. Chegamos à concentração, ela apareceu, cumprimentou todo mundo... menos eu. Segundo ela, não me viu. Segundo a minha cabeça, foi o início de uma crise emocional. Ainda mais porque isso aconteceu logo depois do lendário “tá bom”, que já tinha sido um verdadeiro balde de água fria na minha empolgação.',
    emoji:     '🎺',
    img:       foto1,
  },
  {
    data:      '06',
    titulo:    'A cadeira guardada',
    descricao: 'Depois do desfile, a galera decidiu ir para uma pizzaria. O lugar estava lotado, então ficamos esperando mesa. Quando finalmente conseguimos sentar, ela fez questão de guardar uma cadeira do lado dela para mim. E foi ali que alguma coisa mudou.',
    emoji:     '🪑',
    img:       foto2,
  },
  {
    data:      '07',
    titulo:    'O pé machucado e o pedido mais aleatório da história',
    descricao: 'Na mesma noite da pizzaria, ela mostrou um machucado no pé e pediu para eu lamber o ferimento. Eu fiquei completamente sem entender nada. Ela começou a rir da minha reação… e eu, depois do choque inicial, comecei a rir também kkkkk. Foi provavelmente um dos momentos mais estranhos e engraçados do começo da nossa história.',
    emoji:     '🦶',
    img:       foto1,
  },
  {
    data:      '08',
    titulo:    'Madrugadas conversando',
    descricao: 'Depois daquele dia, as conversas ficaram diferentes. Passamos várias noites conversando até a madrugada, falando sobre a vida, trocando flertes e criando intimidade de forma natural. E, para ser sincero, às vezes ela me provocava mais do que eu provocava ela kkkkk.',
    emoji:     '🌙',
    img:       foto2,
  },
  {
    data:      '09',
    titulo:    'A fase da insegurança',
    descricao: 'Para mim, esse foi um dos momentos mais difíceis. Outras pessoas shipavam ela com outro cara, e também teve gente que tentou algo com ela. Em algum momento, mesmo sem intenção da parte dela, algumas situações me fizeram pensar que talvez ela também tivesse interesse em outras pessoas. Então, por um tempo, eu simplesmente me conformei. Deixei a empolgação esfriar, tentei diminuir as expectativas e aceitei a ideia de que talvez aquilo nunca passasse de uma amizade.',
    emoji:     '😟',
    img:       foto1,
  },
  {
    data:      '10',
    titulo:    'O retorno',
    descricao: 'Passei um tempo desanimado. Cheguei até a evitar contato com ela, porque, na minha cabeça, era questão de tempo até tudo esfriar e ficar por isso mesmo. Achei que me afastar seria a melhor forma de não me magoar. Mas aí ela postou uma foto e, por algum motivo, aquilo virou totalmente o jogo. O que era desânimo virou motivação. Aquilo me fez lembrar das minhas qualidades e de quem eu sou. Usei isso ao meu favor e lembrei de algo que minha mãe sempre me dizia desde pequeno: "Querer, poder e conseguir." Pode parecer uma frase simples, mas naquele momento ela fez todo sentido. Voltei a acreditar em mim, segui em frente e não deixei a história acabar ali. E, no fim das contas, valeu a pena. Hoje ela está aqui, lendo a nossa linha do tempo e provavelmente rindo de tudo isso junto comigo. rsrs',
    emoji:     '🔄',
    img:       foto2,
  },
  {
    data:      '11',
    titulo:    'A garota bruta mais carinhosa do mundo',
    descricao: 'Eu achava engraçado e bonito a forma como ela me tratava. Era diferente das outras pessoas. Enquanto com a maioria ela brincava e respondia de um jeito mais bruto, comigo o tratamento parecia diferente. Talvez fosse só impressão minha na época, mas eu gostava de acreditar que não era. kkkkk. Lembro de uma vez em que ela estava sentada e o pessoal tinha acabado com a paciência dela. Quando fui falar com ela, a resposta veio na mesma energia e acabou sobrando para mim. Mas, logo depois, ela percebeu que era eu. Na mesma hora o jeito dela mudou, o tom ficou diferente e eu percebi aquilo instantaneamente. Foi um detalhe simples, mas que me fez pensar que talvez eu já tivesse conquistado um espacinho especial ali. Naquele momento, senti que metade do caminho já estava andado.',
    emoji:     '💖',
    img:       foto1,
  },
  {
    data:      '12',
    titulo:    'O peixe Nemo',
    descricao: 'Certa vez, ela comentou que fazia natação porque não sabia nadar direito. Foi uma ótima informação. Prometi dar uma pelúcia do Nemo para ela, porque o Nemo também tinha dificuldade para nadar por causa da nadadeira pequena. E ela adorou a ideia e disse que aceitaria o presente.',
    emoji:     '🐠',
    img:       foto2,
  },
  {
    data:      '13',
    titulo:    'O acarajé finalmente aconteceu',
    descricao: 'Como meu contrato estava perto de acabar e corria o risco de eu sair sem ao menos vê-la uma última vez ou abraçá-la, usei a desculpa perfeita: “Preciso entregar o Nemo pessoalmente.” Então ela lembrou da promessa do acarajé. E, finalmente, marcamos nosso primeiro encontro.',
    emoji:     '🍤',
    img:       foto1,
  },
  {
    data:      '14',
    titulo:    '28 de dezembro',
    descricao: 'Nosso primeiro encontro deu tudo errado. Tudo o que eu planejei não saiu como esperado kkkkk. Mas, por outro lado, conversamos bastante, entendi algumas coisas que não eram como eu imaginava e demos muitas risadas. Segundo ela, ela gostou. Eu sei que ela tenta me tranquilizar kkkkk, porque, na minha opinião, só foi bom porque eu estava com ela. O encontro em si não foi tão legal assim, mas a companhia fez tudo valer a pena.',
    emoji:     '🎄',
    img:       foto2,
  },
  {
    data:      '15',
    titulo:    'O beijo roubado',
    descricao: 'Depois do encontro, deixei ela em casa sem nem sequer beijá-la, até porque esse não era o meu intuito naquele momento. Eu realmente queria conhecê-la melhor. Tinha curiosidade sobre ela, queria apenas ouvi-la falar, deixá-la o mais confortável possível e proporcionar uma noite feliz. Mas, obviamente, o segundo encontro já estava amarrado, porque ela não ia resistir rsrs. E foi justamente no segundo encontro que ela não resistiu, me beijou, e eu, que tinha lutado tanto para manter a postura, também não resisti. Naquele momento, já estava completamente entregue a ela.',
    emoji:     '💋',
    img:       foto15,
  },
  {
    data:      '16',
    titulo:    'O pedido por mensagem',
    descricao: 'Na virada do Ano-Novo, preparei uma mensagem especial para ela e aproveitei o momento para fazer o pedido de namoro. Ela aceitou, mas disse que ainda faltava o pedido oficial e formal... aquele que teria que ser feito pessoalmente. Então, tecnicamente, eu tinha sido aprovado, mas ainda precisava passar pela etapa presencial para validar tudo. rsrs',
    emoji:     '📱',
    img:       foto2,
  },
  {
    data:      '17',
    titulo:    'Os anéis de brinquedo',
    descricao: 'Certa vez, comentamos sobre usar alianças no namoro. Ela disse que não tinha pressa e que aguardaria. Então eu tive uma ideia: fui comprar vários anéis de brinquedo para fazer o pedido de namoro. Quis transformar aquele momento em algo engraçado e especial, deixando um pouco da minha marca e mostrando exatamente como o Minicio é. Afinal, se era para fazer um pedido oficial, tinha que ter um toque de criatividade e algumas risadas no meio do caminho.',
    emoji:     '💍',
    img:       foto1,
  },
  {
    data:      '18',
    titulo:    'O pior susto da nossa história',
    descricao: 'Por muito tempo, eu não soube o que era sentir medo de verdade, mas naquele dia eu senti. Tive medo de perder a pessoa que eu amo. Infelizmente, sofremos um acidente por imprudência de outra pessoa. E, sendo sincero, se eu tivesse 100% do controle da situação, aquilo nunca teria acontecido. Se fosse possível escolher, eu preferiria que todos os ferimentos tivessem sido em mim. Se eu já cuidava dela e a amava antes, depois daquele dia tudo isso se multiplicou. Passei a ter ainda mais cuidado, mais atenção e mais certeza do quanto ela é importante para mim. Até hoje eu não consigo me perdoar completamente por isso. Toda vez que olho para as cicatrizes dela, aquele sentimento ruim volta um pouco. Mas, ao mesmo tempo, fico feliz por não ter sido algo mais grave e por ela ter continuado ao meu lado depois de tudo. Bom... eu acho que ela ainda me ama kkkkk.',
    emoji:     '🏍️',
    img:       foto2,
  },
  {
    data:      '19',
    titulo:    'O dia em que nossas famílias se conheceram',
    descricao: 'Infelizmente, foi por causa do acidente que hoje ambos conhecem as famílias um do outro. Foi um mal que acabou trazendo algo bom, mas, sinceramente, eu preferia que tivesse acontecido de outra forma. Ainda assim, por sermos nós, as coisas acabaram acontecendo de um jeito diferente e especial. No fim, até os momentos mais difíceis acabaram fazendo parte da nossa história.',
    emoji:     '🏡',
    img:       foto1,
  },
  {
    data:      '20',
    titulo:    'O dia em que ela teve certeza',
    descricao: 'Depois de todo esse acontecimento, ela me disse algo que me tranquilizou e que me deu a certeza de que ela realmente me amava, assim como eu a amava. Ela me contou que foi justamente no dia do acidente que teve a certeza dos meus sentimentos por ela, por causa de todo o cuidado, preocupação e atenção que demonstrei naquele momento. Confesso que ouvir isso mexeu comigo. Em meio a uma situação tão difícil, descobrir que ela enxergou o quanto eu a amava acabou transformando uma das piores lembranças da nossa história em algo que também fortaleceu ainda mais a nossa relação.',
    emoji:     '❤️',
    img:       foto2,
  },
  {
    data:      '21',
    titulo:    'E continua…',
    descricao: 'E continua... Quem diria que aquela garota quieta do armazém, que mal respondia quando eu tentava puxar assunto, se tornaria a pessoa mais importante da minha vida? Entre planilhas de Excel, acarajé, um Nemo de pelúcia, noites de conversa, um "tá bom" que quase me destruiu emocionalmente, um beijo no segundo encontro, anéis de brinquedo, pedidos aleatórios, acidentes, superações e muitos momentos inesperados, fomos construindo a nossa história. Uma história que definitivamente não saiu como eu planejei — e ainda bem que foi assim. Porque cada detalhe, dos mais engraçados aos mais difíceis, ajudou a nos trazer até aqui. E, se tem uma coisa que aprendi durante todo esse tempo, é que os melhores capítulos da vida costumam começar quando a gente menos espera. Essa é apenas a nossa linha do tempo até agora, porque a verdade é que ela ainda está sendo escrita. E, se depender de mim, ainda teremos muitas páginas, histórias, risadas, aventuras e memórias para adicionar nela. Com amor, Minicio ❤️',
    emoji:     '✨',
    img:       foto1,
  },
];

/* ─────────────────────────────────────────────────────
   Lock / Loading messages
───────────────────────────────────────────────────── */
export const ERR_MSGS = [
  'Vou fingir que não vi essa tentativa 😭',
  'Você digitou isso com os olhos fechados? 😂',
  'Meu sistema acabou de rir dessa tentativa 🤣',
  'Nem o entregador acreditou nessa senha 🚗',
  'Quase acertou! (mentira 😌)',
];

export const HINTS = [
  'talvez seja uma data muito especial 👀',
  'essa senha tem sentimentos envolvidos ❤️',
  'pensa em um dia importante para nós 😌',
  'você provavelmente sabe essa data de cor ✨',
];

export const LOAD_MSGS = [
  'Separando o presente com muito carinho ❤️',
  'Embalando cada detalhe com amor ✨',
  'Conferindo se o beijo está incluso 💋',
  'O entregador está ficando nervoso 👀',
];

export const CORRECT_PASSWORD = '03012026';
