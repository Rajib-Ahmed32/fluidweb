"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import styles from "./page.module.css"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Code, Layout, Smartphone, Monitor, Tablet } from "lucide-react"
import Head from "next/head"
import Script from "next/script"

const articles = [
  {
    title: "Multi-Device Compatibility",
    description: "Ensure your website looks great on desktops, tablets, and smartphones.",
    content:
      "In today's digital landscape, users access websites from a variety of devices with different screen sizes. Multi-device compatibility ensures that your website provides an optimal viewing experience across all these devices. This article explores the importance of responsive design in achieving multi-device compatibility and provides practical tips for implementation.",
    link: "https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/",
    icon: <Smartphone size={24} />,
  },
  {
    title: "Improved User Experience",
    description: "Provide a seamless experience across all devices, increasing user satisfaction.",
    content:
      "Responsive design plays a crucial role in enhancing user experience. By adapting to different screen sizes and devices, responsive websites offer intuitive navigation, readable text, and properly sized images regardless of the device used. This article delves into how responsive design contributes to a better user experience and its impact on user engagement and conversion rates.",
    link: "https://www.nngroup.com/articles/responsive-web-design-definition/",
    icon: <Monitor size={24} />,
  },
  {
    title: "Better SEO Performance",
    description: "Responsive design is favored by search engines, improving your site's ranking.",
    content:
      "Search engines like Google prioritize mobile-friendly websites in their search results. Responsive design is an effective way to make your site mobile-friendly, potentially boosting your search engine rankings. This article explores the relationship between responsive design and SEO, offering insights on how to optimize your responsive site for search engines.",
    link: "https://developers.google.com/search/mobile-sites/mobile-seo/responsive-design",
    icon: <Layout size={24} />,
  },
  {
    title: "Cost-Effective Solution",
    description: "Maintain a single website instead of separate mobile and desktop versions.",
    content:
      "Responsive design offers a cost-effective approach to web development by eliminating the need for separate mobile and desktop versions of a website. This article discusses the long-term benefits of adopting responsive design, including reduced development and maintenance costs, simplified content management, and improved efficiency in updates and changes.",
    link: "https://www.forbes.com/sites/forbesagencycouncil/2017/12/06/why-responsive-design-is-important-and-google-approved/",
    icon: <Tablet size={24} />,
  },
]

const blogPosts = [
  {
    title: "Mastering CSS Grid for Responsive Layouts",
    description: "Learn how to create flexible and powerful layouts using CSS Grid.",
    link: "/blog/mastering-css-grid",
    content: `
      <h2>Mastering CSS Grid for Responsive Layouts</h2>
      <p>CSS Grid is a powerful layout system that allows you to create complex and responsive layouts with ease. In this article, we'll explore the basics of CSS Grid and how to use it to create flexible and responsive designs.</p>
      <h3>1. Understanding CSS Grid</h3>
      <p>CSS Grid is a two-dimensional layout system that works with rows and columns. It provides a more intuitive way to create layouts compared to traditional methods like floats or flexbox.</p>
      <h3>2. Setting up a Grid Container</h3>
      <p>To start using CSS Grid, you need to set the display property of a container element to 'grid'. For example:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}</code></pre>
      <h3>3. Creating Responsive Layouts</h3>
      <p>CSS Grid shines when it comes to creating responsive layouts. You can use media queries to adjust the grid layout based on screen size:</p>
      <pre><code>@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}</code></pre>
      <h3>4. Advanced Grid Techniques</h3>
      <p>CSS Grid offers advanced features like named grid lines, grid areas, and auto-placement algorithms. These features allow you to create complex layouts with minimal CSS.</p>
      <h3>Conclusion</h3>
      <p>Mastering CSS Grid is essential for creating modern, responsive web layouts. With its powerful features and intuitive syntax, CSS Grid is becoming the go-to solution for web developers worldwide.</p>
    `,
  },
  {
    title: "The Art of Mobile-First Design",
    description: "Discover why and how to implement a mobile-first approach in your projects.",
    link: "/blog/mobile-first-design",
    content: `
      <h2>The Art of Mobile-First Design</h2>
      <p>Mobile-first design is an approach to web design and development that prioritizes designing for mobile devices before designing for desktop or other devices. This article explores the benefits of mobile-first design and how to implement it in your projects.</p>
      <h3>1. Why Mobile-First?</h3>
      <p>With the increasing use of smartphones for web browsing, designing for mobile first ensures that your website provides an optimal experience for a growing segment of users. It also encourages you to focus on core content and functionality.</p>
      <h3>2. Starting with Mobile Layouts</h3>
      <p>Begin by designing the mobile version of your website first. This typically involves a single-column layout that's easy to read and navigate on small screens. For example:</p>
      <pre><code>.container {
  width: 100%;
  padding: 20px;
}

.content {
  font-size: 16px;
  line-height: 1.5;
}</code></pre>
      <h3>3. Progressive Enhancement</h3>
      <p>As you move to larger screen sizes, use media queries to progressively enhance the design:</p>
      <pre><code>@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }

  .content {
    font-size: 18px;
  }
}</code></pre>
      <h3>4. Performance Considerations</h3>
      <p>Mobile-first design often leads to better performance, as it encourages you to prioritize content and minimize unnecessary elements. This results in faster load times and a better user experience.</p>
      <h3>Conclusion</h3>
      <p>Adopting a mobile-first approach to web design can lead to more focused, performant, and user-friendly websites. By prioritizing the mobile experience, you ensure that your site is accessible and enjoyable for users on all devices.</p>
    `,
  },
  {
    title: "Optimizing Images for Responsive Web Design",
    description: "Techniques to ensure your images look great on all devices without sacrificing performance.",
    link: "/blog/optimizing-images-responsive-design",
    content: `
      <h2>Optimizing Images for Responsive Web Design</h2>
      <p>Images play a crucial role in web design, but they can also significantly impact performance, especially on mobile devices. This article covers techniques to optimize images for responsive web design, ensuring they look great on all devices without sacrificing performance.</p>
      <h3>1. Use Responsive Images</h3>
      <p>Implement the srcset attribute to provide multiple image sizes for different screen resolutions:</p>
      <pre><code>&lt;img src="small.jpg"
     srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, 1200px"
     alt="Responsive image"&gt;</code></pre>
      <h3>2. Implement Lazy Loading</h3>
      <p>Use lazy loading to defer loading of images that are not in the viewport:</p>
      <pre><code>&lt;img src="image.jpg" loading="lazy" alt="Lazy loaded image"&gt;</code></pre>
      <h3>3. Use Modern Image Formats</h3>
      <p>Utilize modern image formats like WebP, which offer better compression and quality:</p>
      <pre><code>&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Fallback image"&gt;
&lt;/picture&gt;</code></pre>
      <h3>4. Optimize Image File Sizes</h3>
      <p>Use tools to compress images without significant quality loss. This can dramatically reduce file sizes and improve load times.</p>
      <h3>Conclusion</h3>
      <p>By implementing these techniques, you can ensure that your images look great on all devices while maintaining optimal performance. This leads to a better user experience and improved SEO rankings.</p>
    `,
  },
  {
    title: "Responsive Typography: A Comprehensive Guide",
    description: "Create scalable and readable text across all screen sizes with these typography techniques.",
    link: "/blog/responsive-typography-guide",
    content: `
      <h2>Responsive Typography: A Comprehensive Guide</h2>
      <p>Typography plays a crucial role in web design, affecting readability, user experience, and overall aesthetic. This guide covers techniques for creating responsive typography that looks great on all screen sizes.</p>
      <h3>1. Use Relative Units</h3>
      <p>Instead of fixed pixel sizes, use relative units like em, rem, or viewport units:</p>
      <pre><code>body {
  font-size: 16px; /* Base font size */
}

h1 {
  font-size: 2rem; /* 2 times the root element's font size */
}

p {
  font-size: 1em; /* 1 times the parent element's font size */
}</code></pre>
      <h3>2. Implement a Modular Scale</h3>
      <p>Use a modular scale to create a harmonious hierarchy of font sizes:</p>
      <pre><code>:root {
  --ratio: 1.25;
  --base-size: 1rem;
}

h1 { font-size: calc(var(--base-size) * var(--ratio) * var(--ratio) * var(--ratio)); }
h2 { font-size: calc(var(--base-size) * var(--ratio) * var(--ratio)); }
h3 { font-size: calc(var(--base-size) * var(--ratio)); }</code></pre>
      <h3>3. Adjust Line Height and Letter Spacing</h3>
      <p>Ensure readability by adjusting line height and letter spacing for different screen sizes:</p>
      <pre><code>p {
  line-height: 1.5;
  letter-spacing: 0.01em;
}

@media (min-width: 768px) {
  p {
    line-height: 1.6;
    letter-spacing: 0.02em;
  }
}</code></pre>
      <h3>4. Use CSS Clamp for Fluid Typography</h3>
      <p>Implement fluid typography using the CSS clamp() function:</p>
      <pre><code>h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}</code></pre>
      <h3>Conclusion</h3>
      <p>By implementing these responsive typography techniques, you can ensure that your text is readable and visually appealing across all devices, enhancing the overall user experience of your website.</p>
    `,
  },
]

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null)
  const [selectedBlogPost, setSelectedBlogPost] = useState<(typeof blogPosts)[0] | null>(null)

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Head>
          <title>Responsive Design Demo | Master Adaptive Layouts</title>
          <meta
            name="description"
            content="Learn responsive web design techniques and create beautiful, adaptive layouts for any screen size. Explore our interactive demos and developer guides."
          />
        </Head>
        <Header />
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Master Responsive Design</h1>
              <p>Create beautiful, adaptive layouts for any screen size</p>
              <div className={styles.ctaButtons}>
                <Link href="/demo" className={styles.ctaButton}>
                  Try Demo
                </Link>
                <Link href="/designs" className={styles.ctaButton}>
                  Explore Designs
                </Link>
              </div>
            </div>
          </section>
          <section className={styles.infoSection}>
            <h2>Why Responsive Design Matters</h2>
            <div className={styles.infoGrid}>
              {articles.map((article, index) => (
                <article key={index} className={styles.infoCard} onClick={() => setSelectedArticle(article)}>
                  <div className={styles.iconWrapper}>{article.icon}</div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <button className={styles.readMoreButton}>Read More</button>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.developerGuide}>
            <h2>Developer Guide</h2>
            <div className={styles.blogGrid}>
              {blogPosts.map((post, index) => (
                <article key={index} className={styles.blogCard} onClick={() => setSelectedBlogPost(post)}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className={styles.readMore}>
                    Read Article <Code size={16} />
                  </span>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.adSection}>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script id="adsense-init">
              {`
                (adsbygoogle = window.adsbygoogle || []).push({});
              `}
            </Script>
          </section>
          <section className={styles.callToAction}>
            <h2>Ready to Start Your Responsive Design Journey?</h2>
            <p>Explore our interactive demo and discover how to create stunning, adaptive layouts.</p>
            <Link href="/demo" className={styles.ctaButton}>
              Launch Demo <Layout size={20} />
            </Link>
          </section>
        </main>
        <Footer />
        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle?.title || ""}
          content={selectedArticle?.content || ""}
          link={selectedArticle?.link || ""}
        />
        <Modal
          isOpen={!!selectedBlogPost}
          onClose={() => setSelectedBlogPost(null)}
          title={selectedBlogPost?.title || ""}
          content={selectedBlogPost?.content || ""}
          link={selectedBlogPost?.link || ""}
        />
      </div>
    </ThemeProvider>
  )
}

