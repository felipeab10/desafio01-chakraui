export default function handler(req, res) {
    const { id } = req.query;
    const continents = [
        {
            id: 1, name: 'America do Norte', image_cover: '/images/continents/northamerica/continent-northamerica.jpg', description: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).', totalCountry: '3', totalLanguage: '10', totalCity: '28',
            citys: [
                { id: 1, contry: 'Cidade do México', city: 'México', image: '/images/continents/northamerica/cidademexico.jpg', logo: '/images/continents/northamerica/mexico.png' },
                { id: 2, contry: 'Estados Unidos', city: 'New York', image: '/images/continents/northamerica/newyork.jpg', logo: '/images/continents/northamerica/United_States.svg.png' },
                { id: 3, contry: 'Estados Unidos', city: 'Los Angeles', image: '/images/continents/northamerica/losangeles.jpg', logo: '/images/continents/northamerica/United_States.svg.png' },
                { id: 4, contry: 'Canadá', city: 'Toronto', image: '/images/continents/northamerica/toronto.jpg', logo: '/images/continents/northamerica/canada.png' },

            ]
        },
        {
            id: 2, name: 'America do Sul', image_cover: '/images/continents/southamerica/continent-southamerica.jpg', description: ' América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico. O Brasil representa atualmente a metade da população e produto econômico desta região.', totalCountry: '12', totalLanguage: '10', totalCity: '36',
            citys: [
                { id: 1, contry: 'Argentina', city: 'Buenos Aires', image: '/images/continents/southamerica/buenosares.jpg', logo: '/images/continents/southamerica/argentina.png' },
                { id: 2, contry: 'Brasil', city: 'São Paulo', image: '/images/continents/southamerica/saopaulo.jpg', logo: '/images/continents/southamerica/brasil.png' },
                { id: 3, contry: 'Peru', city: 'Lima', image: '/images/continents/southamerica/lima.jpg', logo: '/images/continents/southamerica/peru.png' },
                { id: 4, contry: 'Colombia', city: 'Bogota', image: '/images/continents/southamerica/bogota.jpg', logo: '/images/continents/southamerica/colombia.png' },

            ]
        },
        {
            id: 3, name: 'Ásia', image_cover: '/images/continents/asia/continent-asia.jpg', description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador.[1] Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas. A altitude máxima e a mínima está localizada na Ásia. O monte Everest, a altitude máxima do planeta, está localizada a 8 848 m acima do nível do mar; ao longo da linha fronteiriça da República Democrática Federal do Nepal com a região autônoma chinesa do Tibete. ', totalCountry: '50', totalLanguage: '5', totalCity: '27',
            citys: [
                { id: 1, contry: 'Japão', city: 'Tokyo', image: '/images/continents/asia/tokyo.jpg', logo: '/images/continents/asia/japao.png' },
                { id: 2, contry: 'Singapura', city: 'Singapura', image: '/images/continents/asia/singapura.jpg', logo: '/images/continents/asia/singapuralogo.png' },
                { id: 3, contry: 'Austrália', city: 'Melbourne', image: '/images/continents/asia/melborne.jpg', logo: '/images/continents/asia/australia.png' },
                { id: 4, contry: 'Coreia do sul', city: 'Seoul', image: '/images/continents/asia/seoul.jpg', logo: '/images/continents/asia/coreiadosul.png' },
            ]
        },
        {
            id: 4, name: 'Europa', image_cover: '/images/continents/europa/continent-europa.png', description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste', totalCountry: '50', totalLanguage: '60', totalCity: '27',
            citys: [
                { id: 1, contry: 'Reino Unido', city: 'Londres', image: '/images/continents/europa/londres.png', logo: '/images/continents/europa/reinounido.png' },
                { id: 2, contry: 'França', city: 'Paris', image: '/images/continents/europa/paris.png', logo: '/images/continents/europa/franca.png' },
                { id: 3, contry: 'Itália', city: 'Roma', image: '/images/continents/europa/roma.png', logo: '/images/continents/europa/italia.png' },
                { id: 4, contry: 'República Tcheca', city: 'Praga', image: '/images/continents/europa/praga.png', logo: '/images/continents/europa/republicatcheca.png' },
                { id: 5, contry: 'Holanda', city: 'Amsterdã', image: '/images/continents/europa/amsterda.png', logo: '/images/continents/europa/holanda.png' },
            ]
        },
        {
            id: 5, name: 'Oceania', image_cover: '/images/continents/oceania/continent-oceania.jpg', description: 'Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont dUrville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes', totalCountry: '16', totalLanguage: '2', totalCity: '30',
            citys: [
                { id: 1, contry: 'Nova Zelândia', city: 'Auckland', image: '/images/continents/oceania/auckland.jpg', logo: '/images/continents/oceania/novazelandia.png' },
                { id: 2, contry: 'Australia', city: 'Brisbane', image: '/images/continents/oceania/brisbane.jpg', logo: '/images/continents/oceania/australia.png' },
                { id: 3, contry: 'Australia', city: 'Gold Coast', image: '/images/continents/oceania/goldcoast.jpg', logo: '/images/continents/oceania/australia.png' },
                { id: 4, contry: 'Australia', city: 'Canberra', image: '/images/continents/oceania/canberra.jpg', logo: '/images/continents/oceania/australia.png' },
            ]
        },

    ];
    const search = continents.find(continent => continent.id === Number(id));

    res.status(200).json({ continent: search });
}