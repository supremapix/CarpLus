import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';
import { BLOG_POSTS, type BlogPost } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

const BASE = 'https://www.carpluspneuseoficina.com.br';
const dateLabel = (date: string) => new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T12:00:00Z`));
const breadcrumb = (post?: BlogPost) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE}/` },
  { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
  ...(post ? [{ '@type': 'ListItem', position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` }] : [])
] });

function PostCard({ post }: { post: BlogPost }) {
  return <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col">
    <Link to={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true"><img src={post.image} alt="" loading="lazy" width={800} height={450} className="aspect-video w-full object-cover" /></Link>
    <div className="p-6 flex flex-col flex-1">
      <p className="text-sm font-semibold text-gray-600 mb-3">{post.category}</p>
      <h2 className="text-2xl font-bold leading-tight mb-3"><Link to={`/blog/${post.slug}`} className="hover:text-primary focus-visible:outline-2">{post.title}</Link></h2>
      <p className="text-gray-600 leading-relaxed mb-5">{post.description}</p>
      <p className="text-sm text-gray-500 mb-4"><time dateTime={post.publishedAt}>{dateLabel(post.publishedAt)}</time> · {post.readMinutes} min de leitura</p>
      <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 font-bold text-dark underline underline-offset-4">Ler matéria <ArrowRight size={18} aria-hidden="true" /></Link>
    </div>
  </article>;
}

export function BlogIndex() {
  useSEO({ title: 'Blog Carplus: cuidados com pneus e segurança no carro', description: 'Guias sobre calibragem, danos nos pneus, etiqueta do Inmetro e preparação para viagens. Informação prática com fontes para cuidar do seu carro.', canonical: `${BASE}/blog`, schemaJSON: [breadcrumb(), { '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog Carplus', url: `${BASE}/blog`, blogPost: BLOG_POSTS.map(p => ({ '@type': 'BlogPosting', headline: p.title, url: `${BASE}/blog/${p.slug}`, datePublished: p.publishedAt })) }] });
  return <div className="bg-gray-50 min-h-screen text-dark"><Navbar /><main className="pt-32 md:pt-40 pb-20">
    <div className="max-w-6xl mx-auto px-4">
      <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-sm text-gray-600 mb-8"><Link to="/" className="underline">Início</Link><ChevronRight size={14} /><span aria-current="page">Blog</span></nav>
      <header className="max-w-3xl mb-12"><p className="font-bold uppercase tracking-widest text-gray-600 mb-3">Informação para cuidar do seu carro</p><h1 className="text-4xl md:text-6xl font-black mb-6">Blog <span className="text-primary">Carplus</span></h1><p className="text-lg text-gray-600 leading-relaxed">Orientações práticas sobre pneus, manutenção e segurança. Consulte as fontes de cada matéria e siga sempre o manual do seu veículo.</p></header>
      <div className="grid md:grid-cols-2 gap-8">{BLOG_POSTS.map(post => <PostCard key={post.slug} post={post} />)}</div>
    </div>
  </main><Footer /></div>;
}

function Article({ post }: { post: BlogPost }) {
  const url = `${BASE}/blog/${post.slug}`;
  useSEO({ title: `${post.title} | Carplus`, description: post.description, canonical: url, ogType: 'article', ogImage: post.image, schemaJSON: [breadcrumb(post), {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description, datePublished: post.publishedAt, dateModified: post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url, image: `${BASE}${post.image}`, inLanguage: 'pt-BR',
    author: { '@type': 'Organization', name: 'Carplus Pneus e Oficina', url: `${BASE}/quem-somos` }, publisher: { '@type': 'Organization', name: 'Carplus Pneus e Oficina', url: `${BASE}/` },
    citation: post.sources.map(s => s.url)
  }] });
  return <div className="bg-white min-h-screen text-dark"><Navbar /><main className="pt-32 md:pt-40 pb-20">
    <article className="max-w-3xl mx-auto px-4">
      <nav aria-label="Navegação estrutural" className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-8"><Link to="/" className="underline">Início</Link><ChevronRight size={14} /><Link to="/blog" className="underline">Blog</Link><ChevronRight size={14} /><span aria-current="page">{post.category}</span></nav>
      <header><p className="font-bold text-gray-600 mb-3">{post.category}</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">{post.title}</h1><p className="text-lg text-gray-600 leading-relaxed mb-6">{post.description}</p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600 mb-8"><span>Por Carplus Pneus e Oficina</span><time dateTime={post.publishedAt}>{dateLabel(post.publishedAt)}</time><span className="inline-flex gap-1 items-center"><Clock size={14} /> {post.readMinutes} min</span></p>
        <img src={post.image} alt={post.imageAlt} width={800} height={450} className="w-full aspect-video object-cover rounded-2xl mb-8" />
      </header>
      <nav aria-label="Nesta matéria" className="rounded-xl bg-gray-50 border border-gray-200 p-6 mb-10"><p className="font-bold mb-3">Nesta matéria</p><ol className="list-decimal pl-5 space-y-2">{post.sections.map((s, i) => <li key={s.heading}><a href={`#secao-${i + 1}`} className="underline underline-offset-4 hover:text-primary">{s.heading}</a></li>)}</ol></nav>
      {post.sections.map((section, i) => <section id={`secao-${i + 1}`} key={section.heading} className="scroll-mt-32 mb-10"><h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{section.heading}</h2>{section.paragraphs.map(p => <p key={p} className="text-gray-700 leading-8 mb-4">{p}</p>)}{section.bullets && <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">{section.bullets.map(b => <li key={b}>{b}</li>)}</ul>}</section>)}
      <aside className="rounded-xl border border-gray-200 p-6 mb-10"><h2 className="text-xl font-bold mb-3">Fontes e orientações</h2><p className="text-sm text-gray-600 leading-relaxed mb-4">Conteúdo informativo. Não substitui o manual do veículo nem uma inspeção presencial. Consulte as orientações específicas dos fabricantes.</p><ul className="space-y-3">{post.sources.map(s => <li key={s.url}><a href={s.url} className="underline underline-offset-4 break-words text-gray-700">{s.label}</a></li>)}</ul></aside>
      <aside className="rounded-xl bg-dark text-white p-6 mb-10"><h2 className="text-2xl font-bold mb-3">Precisa de orientação em Curitiba?</h2><p className="text-white/80 mb-4">A Carplus atende no Portão. Conheça nossos serviços e entre em contato para avaliar a necessidade do seu veículo.</p><ul className="space-y-3">{post.relatedLinks.map(l => <li key={l.href}><Link to={l.href} className="underline underline-offset-4 font-bold">{l.label}</Link></li>)}</ul></aside>
      <section><h2 className="text-2xl font-bold mb-4">Continue lendo</h2><ul className="space-y-4">{BLOG_POSTS.filter(p => p.slug !== post.slug).map(p => <li key={p.slug}><Link to={`/blog/${p.slug}`} className="underline underline-offset-4 font-medium">{p.title}</Link></li>)}</ul><Link to="/blog" className="inline-block mt-8 font-bold underline">Voltar ao blog</Link></section>
    </article>
  </main><Footer /></div>;
}

export function BlogArticle() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  return post ? <Article post={post} /> : <NotFound />;
}
