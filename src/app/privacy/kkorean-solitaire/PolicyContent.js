'use client'

import { Fragment, useEffect, useState } from 'react'
import policies from './policies.json'

const languages = [
  ['ko', 'KO 한국어'], ['en', 'EN English'], ['es', 'ES Español'],
  ['pt-BR', 'PT Português (Brasil)'], ['ja', 'JA 日本語'],
  ['zh-Hans', 'ZH 简体中文'], ['ru', 'RU Русский'], ['it', 'IT Italiano'],
  ['fr', 'FR Français'], ['de', 'DE Deutsch'], ['sv', 'SV Svenska'],
  ['nb', 'NB Norsk bokmål'], ['fi', 'FI Suomi'],
]

// Only the fixed links in the checked-in policy text become anchors; no HTML injection.
function PolicyText({ text }) {
  const parts = text.split(/(<a href="[^"]+">[^<]+<\/a>)/g)
  return parts.map((part, index) => {
    const link = part.match(/^<a href="([^"]+)">([^<]+)<\/a>$/)
    return link
      ? <a key={index} href={link[1]}>{link[2]}</a>
      : <Fragment key={index}>{part}</Fragment>
  })
}

function languageFromHash() {
  const code = window.location.hash.replace(/^#privacy-/, '')
  return Object.hasOwn(policies, code) ? code : 'en'
}

export default function PolicyContent() {
  const [locale, setLocale] = useState('en')
  useEffect(() => {
    const sync = () => setLocale(languageFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  function changeLanguage(event) {
    const code = event.target.value
    setLocale(code)
    // Preserve the existing public URL and the original #privacy-ko / #privacy-en links.
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#privacy-${code}`)
  }

  const policy = policies[locale]
  return (
    <>
      <div style={{ margin: '24px 0 32px', maxWidth: 420 }}>
        <label htmlFor="policy-language" style={{ display: 'block', marginBottom: 8, fontWeight: 700 }}>Language / 언어</label>
        <select id="policy-language" value={locale} onChange={changeLanguage}
          style={{ width: '100%', maxWidth: '100%', minHeight: 48, padding: '10px 36px 10px 14px', borderRadius: 8, border: '1px solid #999', background: '#fff', color: '#202520', font: 'inherit' }}>
          {languages.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
        </select>
      </div>
      <section lang={locale} aria-labelledby="policy-title" style={{ scrollMarginTop: 120 }}>
        <h2 id="policy-title">{policy.title}</h2>
        <p>{policy.intro}</p>
        {policy.sections.map(section => (
          <section key={section.heading}>
            <h3>{section.heading}</h3>
            {section.paragraphs.map((paragraph, index) => <p key={index}><PolicyText text={paragraph} /></p>)}
          </section>
        ))}
      </section>
      <noscript>
        <p>JavaScript is disabled. / JavaScript가 꺼져 있습니다.</p>
        {languages.map(([code, label]) => (
          <section key={code} lang={code}>
            <h2>{label} — {policies[code].title}</h2>
            <p>{policies[code].intro}</p>
            {policies[code].sections.map(section => <section key={section.heading}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph, index) => <p key={index}><PolicyText text={paragraph} /></p>)}
            </section>)}
          </section>
        ))}
      </noscript>
    </>
  )
}
