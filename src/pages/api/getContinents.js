// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const continents = [
    { id: 1, name: 'America do Norte', image: '/images/northamerica.jpg', description: "Cada bairro oferece algo diferente, do moderno Brooklyn ao elegante Manhattan.." },
    { id: 2, name: 'America do sul', image: '/images/sulofamerica.jpg', description: "Praias lindas, e pessoas muito animada." },
    { id: 3, name: 'Ásia', image: '/images/asia.jpg', description: "Xangai é um centro financeiro global repleto de arranha-céus." },
    { id: 4, name: 'Europa', image: '/images/europa.png', description: "O continente mais antigo." },
    { id: 5, name: 'Oceania', image: '/images/oceania.jpg', description: "O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville." },
  ]
  res.status(200).json({ continents: continents })
}
