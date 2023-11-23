# NextJS

A Full Stack Framework for developing full stack Web applications <br>

It Has Many Functionalities :

## Pre-rendering

- Generates HTML For each page in advance unlike React ( It Sends huge JS Bundle And Then everything is rendered on client-side (browser) ) but in pre-rendering, it happens on server

* It helps in better performance + SEO

* Each Generated HTML page has minimal JS with it, when page is loaded in browser than JS code runs and make it fully interactive. This process is also known as hydration

## Types for Pre-rendering

### Static Generation ( SSG )

HTML is generated at build time and will be reused at each request ( Recommended )

### Server Side Rendering ( SSR )

HTML is generated at each request
