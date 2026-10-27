import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Info } from 'lucide-react'
import { CtaBand, PageHero } from '@/components/sections'
import { Reveal } from '@/components/Reveal'
import { articles, getArticle } from '@/data/articles'
import { img, pageHead, site } from '@/data/site'

export const Route = createFileRoute('/blogg/$slug')({
  loader: ({ params }) => {
    const article = getArticle(params.slug)
    if (!article) throw notFound()
    return article
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {}
    const head = pageHead(
      `${loaderData.title} | ${site.name}`,
      loaderData.description,
      `/blogg/${params.slug}`,
    )
    return {
      ...head,
      meta: [
        ...head.meta,
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: `${site.url}${img(loaderData.image, 1200)}` },
      ],
    }
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
})

function ArticlePage() {
  const article = Route.useLoaderData()
  const others = articles.filter((a) => a.slug !== article.slug)

  return (
    <>
      <PageHero
        eyebrow={`Blogg og kunnskap · ${article.category}`}
        title={article.title}
        intro={article.excerpt}
        image={article.image}
        alt={article.alt}
      />

      <article className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            to="/blogg"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-mist hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Alle artikler
          </Link>

          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10 first-of-type:mt-0">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-5 space-y-2.5 rounded-2xl border border-line bg-graphite/50 p-5 text-white/85 sm:p-6">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt-bright" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="mt-12 flex gap-3 rounded-2xl border border-volt/40 bg-volt/10 p-5 text-sm leading-relaxed text-white/85 sm:p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-volt-bright" />
            <p>{article.note}</p>
          </aside>
        </div>
      </article>

      <section className="border-t border-line bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Flere artikler
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 80}>
                <Link
                  to="/blogg/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-graphite/50 p-3 pr-5 transition hover:border-volt/50"
                >
                  <img
                    src={img(a.image, 240)}
                    alt=""
                    loading="lazy"
                    width={1376}
                    height={768}
                    className="aspect-square w-20 shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-volt-bright">{a.category}</span>
                    <span className="mt-1 block font-semibold leading-snug">{a.title}</span>
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-mist transition group-hover:translate-x-1 group-hover:text-volt-bright" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function ArticleNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-40 text-center sm:px-8">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Fant ikke artikkelen</h1>
      <p className="mt-4 text-mist">Artikkelen finnes ikke, eller den har fått en ny adresse.</p>
      <Link
        to="/blogg"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-volt px-6 py-3.5 font-semibold text-white transition hover:bg-volt-bright"
      >
        <ArrowLeft className="h-4 w-4" /> Til Blogg og kunnskap
      </Link>
    </section>
  )
}
