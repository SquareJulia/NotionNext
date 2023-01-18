import { getGlobalNotionData } from '@/lib/notion/getNotionData'
import React from 'react'
import { useGlobal } from '@/lib/global'
import * as ThemeMap from '@/themes'
import BLOG from '@/blog.config'

const AboutIndex = props => {
  const { theme, locale } = useGlobal()
  const ThemeComponents = ThemeMap[theme]
  const { siteInfo } = props
  const meta = {
    title: `${locale.NAV.ABOUT} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'about',
    type: 'website'
  }

  return <ThemeComponents.LayoutAbout {...props} meta={meta} />
}

export async function getStaticProps() {
  const props = await getGlobalNotionData({ from: 'archive-index' })

  return {
    props,
    revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
  }
}

export default AboutIndex
