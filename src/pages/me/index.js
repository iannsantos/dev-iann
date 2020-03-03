import React from 'react'
import Avatar from '../../components/Avatar'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import SocialLinks from '../../components/SocialLinks'
import { About, Container } from './styles'

export default function MePage() {
  return (
    <Layout>
      <SEO title="Me" />
      <Container>
        <div>
          <Avatar />
          <SocialLinks />
        </div>

        <About>
          <p>
            Fala guys, muito prazer ter vocês aqui! Meu nome é Iann Santos e
            atualmente trabalho como Software Developer na PDV365. É o meu
            primeiro trampo como desenvolvedor e está sendo um grande
            aprendizado! Lá usamos a stack de Javascript (Node, React e React
            Native).
          </p>
          <br />
          <p>
            Criei esse blog/portifólio para poder compartilhar os meus
            estudos/aprendizados e ao mesmo tempo conseguir contribuir com a
            comunidade de desenvolvimento de alguma forma (espero conseguir
            kkkk). Estou estudando inglês também, então se virem algum erro por
            aí, me ajudem hahaha.
          </p>
          <br />
          <p>
            Sou apaixonado por tecnologia em geral (sério, tudo), mas
            especialmente em códigos. Curto demais sair pra beber e curtir com
            minha namorada e amigos, e assisto séries e filmes de vez em quando.
          </p>
          <br />
          <p>Enfim... esse sou eu!</p>
        </About>
      </Container>
    </Layout>
  )
}
