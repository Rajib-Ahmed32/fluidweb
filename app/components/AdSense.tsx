import Script from "next/script"

const AdSense = () => (
  <>
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
      crossOrigin="anonymous"
    />
  </>
)

export default AdSense

