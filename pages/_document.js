// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG} className='test'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <CommonScript />
        </Head>

        <body className={'tracking-wider subpixel-antialiased bg-day dark:bg-night'}>
          <Main />
          <NextScript />
        </body>
        <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2023001624号-1</a>
      </Html>
    )
  }
}

export default MyDocument
