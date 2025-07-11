// ESTE COMPONENTE EXIBE UMA SEÇÃO DE "HISTÓRIAS DE SUCESSO" COM DEPOIMENTOS DE PESSOAS QUE PARTICIPARAM DOS PROGRAMAS DO NORDESTE+.
// OS DEPOIMENTOS SÃO CARREGADOS DE UM MOCK (ARRAY DE OBJETOS) E RENDERIZADOS DINAMICAMENTE USANDO O MÉTODO .map() DO JAVASCRIPT.
// CADA DEPOIMENTO É EXIBIDO EM UM CARD ANIMADO, COM FOTO, NOME, LOCALIZAÇÃO, TEXTO DO DEPOIMENTO, CURSO E EMPREGO.

// ESTRUTURAS DE DADOS UTILIZADAS:

// 1. ARRAY: `depoimentosMock` é um array de objetos contendo os dados dos depoimentos.
// 2. OBJETOS: Cada elemento do array é um objeto com propriedades como `id`, `nome`, `foto`, `estado`, `texto`, `curso` e `emprego`.
// 3. FUNÇÃO: `Testimonials` é uma função componente que retorna JSX para renderizar o conteúdo.
// 4. JSX: Representa a estrutura hierárquica dos elementos visuais do componente.
// 5. STRINGS: usadas para texto, rotas e propriedades CSS.
// 6. COMPONENTES: Importados e utilizados para composição da interface, incluindo animações com `motion`.

// O FOCO PRINCIPAL É A ITERAÇÃO DINÂMICA SOBRE UM ARRAY DE OBJETOS PARA RENDERIZAR MÚLTIPLOS CARDS DE DEPOIMENTOS COM ANIMAÇÕES.

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { depoimentosMock } from '../../data/mockData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Histórias de Sucesso</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Conheça algumas das pessoas que transformaram suas vidas através dos programas do Nordeste+.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentosMock.map((depoimento, index) => (
            <motion.div
              key={depoimento.id}
              className="bg-white rounded-xl shadow-card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2
              }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src={depoimento.foto} 
                      alt={depoimento.nome} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <Quote className="absolute -bottom-2 -right-2 text-primary-500 bg-white rounded-full p-1" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-800">{depoimento.nome}</h3>
                    <p className="text-sm text-neutral-500">{depoimento.estado}</p>
                  </div>
                </div>
                
                <blockquote className="text-neutral-600 mb-4">
                  "{depoimento.texto}"
                </blockquote>
                
                <div className="pt-4 mt-4 border-t border-neutral-100">
                  <div className="flex flex-col">
                    <span className="text-sm text-neutral-500">
                      <span className="font-medium text-primary-600">Curso:</span> {depoimento.curso}
                    </span>
                    <span className="text-sm text-neutral-500">
                      <span className="font-medium text-secondary-600">Emprego:</span> {depoimento.emprego}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;