import React, {useEffect, useState} from 'react'

export default function OriginalContent(){
  const [html, setHtml] = useState('')

  useEffect(()=>{
    let cancelled = false
    async function load(){
      try{
        const res = await fetch('/3d-bento-webflow-template.webflow.io/index.html')
        const text = await res.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, 'text/html')

        // Append head styles/scripts (avoid duplicates)
        doc.head.querySelectorAll('link[rel="stylesheet"]').forEach(link =>{
          const href = link.getAttribute('href')
          if(!document.querySelector(`link[href="${href}"]`)){
            const l = document.createElement('link')
            l.rel = 'stylesheet'
            l.href = href
            l.setAttribute('data-origin-href', href)
            document.head.appendChild(l)
          }
        })

        // Append head scripts
        const headScripts = Array.from(doc.head.querySelectorAll('script'))
        headScripts.forEach(s=>{
          const src = s.getAttribute('src')
          if(src){
            if(!document.querySelector(`script[src="${src}"]`)){
              const sc = document.createElement('script')
              sc.src = src
              sc.async = false
              document.body.appendChild(sc)
            }
          } else if(s.textContent && s.textContent.trim()){
            const sc = document.createElement('script')
            sc.text = s.textContent
            document.body.appendChild(sc)
          }
        })

        const bodyHtml = doc.body.innerHTML
        if(!cancelled) setHtml(bodyHtml)

        // Execute body scripts after injection
        setTimeout(()=>{
          const bodyScripts = Array.from(doc.body.querySelectorAll('script'))
          bodyScripts.forEach(s=>{
            const src = s.getAttribute('src')
            if(src){
              if(!document.querySelector(`script[src="${src}"]`)){
                const sc = document.createElement('script')
                sc.src = src
                sc.async = false
                document.body.appendChild(sc)
              }
            } else if(s.textContent && s.textContent.trim()){
              const sc = document.createElement('script')
              sc.text = s.textContent
              document.body.appendChild(sc)
            }
          })
        }, 0)

      }catch(err){
        console.error('Failed to load original HTML', err)
      }
    }
    load()
    return ()=> cancelled = true
  }, [])

  return <div dangerouslySetInnerHTML={{__html: html}} />
}
