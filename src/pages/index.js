import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background:"pink",
  color: "#8e6bf8",
  padding: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "rgb(15, 180, 187)",
}
const paragraphStyles = {
  marginBottom: 48,
}

const listStyles = {
  marginBottom: 56,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginBottom: 30,
}

const linkStyle = {
  color: "#038664",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#4713e4",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "StackBlitz Project Portfolio ",
    url: "https://stackblitz.com/@adammathewvaughn",
    description:
      "StackBlitz is the preferred online development environment of choice for Vaughn Software Engineering.",
    color: "#E95800",
  },
  {
    text: "Previous Endeavors and Current Deployments",
    url: "https://github.com/adammathewvaughn",
    description:
      "Portfolio of Projects Undertaken by Vaughn Software Engineering.",
    color: "#BC027F",
  },
  {
    text: "Blog Forum and Technical Guides",
    url: "https://vaughn-software-engineering.ghost.io/",
    description:
      "Subscribe now for big-picture explanations of higher-level software concepts.",
    color: "#0D96F2",
  },
  {
    text: "Contact Vaughn Software Engineering",
    url: "https://www.linkedin.com/in/adam-m-vaughn/",
    badge: true,
    description:
      "Contact us today to manage all of your software and web development needs!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Vaughn Engineering by Gatsby</title>
      <h1 style={headingStyles}><span style={headingAccentStyles}>
        Vaughn Software Engineering</span> is proud to be a member of the GatsbyJS community! 
        <br />
        <span style={headingAccentStyles}>We're eager to serve all of your software and web development needs! Please contact us today for a quick, friendly, chat and a free estimate.</span>
        <span role="img" aria-label="Party popper emojis">
        </span>
      </h1>
      <p style={paragraphStyles}>
      GatsbyJS is one several unique SPA/PWA scaffolding platforms utilized by Vaughn Software Engineering. We also implement VueJS, ReactJS, and SvelteJS. 
      As well as implementing these and other popular, cutting-edge frameworks, our engineers are comprehensively trained and fundamentally sound in such foundational frameworks as 'vanilla JavaScript' DOM manipulation and jQuery. </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
          rel="noreferrer" target="_blank"
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
              rel="noreferrer" target="_blank"
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  Available Immediately!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      export function Dino() {
  return (
    <StaticImage
      src="../images/dino.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}
      <section class="copyright"><a href="https://twitter.com/adammathewv/" rel="noreferrer" target="_blank">Vaughn Software Engineering</a> © 2021</section>
    </main>
  )
 
}

export default IndexPage
