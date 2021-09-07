import * as React from "react"

// styles
const pageStyles = {
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
    text: "Gatsby Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Kubernetes Deployments and Docker Containerization",
    url: "https://www.youtube.com/watch?v=5aWb8Z7b_Tc&t=1737s",
    description:
      "Practical containerized-solutions, affordably engineered to your specific goals.",
    color: "#1099A8",
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
    url: "https://www.linkedin.com/in/vaughn-software-engineering/",
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
        Vaughn Software Engineering</span> is proud to be a member of the Gatsby community!
        <br />
        <span style={headingAccentStyles}>Available immediately for contracts of any type, span, or size.</span>
        <span role="img" aria-label="Party popper emojis">
          
        </span>
      </h1>
      <p style={paragraphStyles}>
        Gatsby Development is going on the resume immediately.
         Hot Module Reloading... So hip. So swank.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
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
      <img
        alt="Gatsby G Logo"
        src="https://cdn.discordapp.com/attachments/847941895615021056/874750447410380860/headshoticon_-_Copy.jpg"
      />
      <section class="copyright"><a href="https://vaughnengineering.gatsbyjs.io/">Vaughn Software Engineering</a> © 2021</section>
    </main>
  )
}

export default IndexPage
