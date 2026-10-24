import { useState } from 'react';
import './Main.css';
import Card from '../Card/Card';

const ABAS = [
  { id: 'produtos', rotulo: 'Produtos', icone: '🛍️' },
  { id: 'categorias', rotulo: 'Categorias', icone: '🐾' },
];

export default function Main() {
  const [abaAtiva, setAbaAtiva] = useState('produtos');
  const indice = ABAS.findIndex((aba) => aba.id === abaAtiva);

  return (
    <main className="main">
      <section className="main__intro">
        <div>
          <h2 className="main__titulo">
            {abaAtiva === 'produtos' ? 'Produtos da loja' : 'Categorias da loja'}
          </h2>
          <p className="main__texto">
            {abaAtiva === 'produtos'
              ? 'Acompanhe preço e estoque de tudo que seu pet precisa.'
              : 'Veja como os produtos estão organizados por tipo de pet.'}
          </p>
        </div>

        <button type="button" className="main__novo">
          + {abaAtiva === 'produtos' ? 'Novo produto' : 'Nova categoria'}
        </button>
      </section>

      {/* ---------- Abas ---------- */}
      <div className="abas" role="tablist" aria-label="Seções do painel" data-ativa={indice}>
        <span className="abas__indicador" aria-hidden="true" />
        {ABAS.map((aba) => (
          <button
            key={aba.id}
            type="button"
            role="tab"
            id={`aba-${aba.id}`}
            aria-selected={abaAtiva === aba.id}
            aria-controls={`painel-${aba.id}`}
            className="abas__botao"
            onClick={() => setAbaAtiva(aba.id)}
          >
            <span aria-hidden="true">{aba.icone}</span> {aba.rotulo}
          </button>
        ))}
      </div>

      {/* ---------- Painel: Produtos ---------- */}
      {abaAtiva === 'produtos' && (
        <section className="grade" role="tabpanel" id="painel-produtos" aria-labelledby="aba-produtos">
          {/* TODO: percorrer a lista real de produtos aqui depois */}
          <Card
            style="card card--azul"
            icon="🦴"
            title="Ração premium para cães"
            description="Frango e arroz, indicada para cães adultos de porte médio."
            price="R$ 189,90"
            label="Em estoque"
            action="Ver detalhes"
          />
          <Card
            style="card card--coral"
            icon="🐱"
            title="Arranhador para gatos"
            description="Torre com sisal, toca e brinquedo suspenso."
            price="R$ 229,00"
            label="Poucas unidades"
            action="Ver detalhes"
          />
          <Card
            style="card card--verde"
            icon="🦮"
            title="Coleira com guia"
            description="Ajustável e refletiva, para passeios seguros à noite."
            price="R$ 79,90"
            label="Em estoque"
            action="Ver detalhes"
          />
          <Card
            style="card card--amarelo"
            icon="🐠"
            title="Kit aquário completo"
            description="Aquário de 40 litros com filtro, iluminação e termostato."
            price="R$ 459,00"
            label="Esgotado"
            action="Ver detalhes"
          />
        </section>
      )}

      {/* ---------- Painel: Categorias ---------- */}
      {abaAtiva === 'categorias' && (
        <section className="grade" role="tabpanel" id="painel-categorias" aria-labelledby="aba-categorias">
          {/* TODO: percorrer a lista real de categorias aqui depois */}
          <Card
            style="card card--azul"
            icon="🐶"
            title="Cães"
            description="Rações, petiscos, camas, roupas e acessórios de passeio."
            price="32 produtos"
            label="Ativa"
            action="Abrir categoria"
          />
          <Card
            style="card card--coral"
            icon="🐱"
            title="Gatos"
            description="Areias, arranhadores, brinquedos e rações específicas."
            price="27 produtos"
            label="Ativa"
            action="Abrir categoria"
          />
          <Card
            style="card card--verde"
            icon="🦜"
            title="Aves"
            description="Gaiolas, sementes, poleiros e brinquedos para aves."
            price="14 produtos"
            label="Ativa"
            action="Abrir categoria"
          />
          <Card
            style="card card--amarelo"
            icon="🐟"
            title="Peixes"
            description="Aquários, filtros, alimentos e produtos de limpeza."
            price="11 produtos"
            label="Rascunho"
            action="Abrir categoria"
          />
        </section>
      )}
    </main>
  );
}