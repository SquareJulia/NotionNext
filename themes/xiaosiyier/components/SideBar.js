import BLOG from '@/blog.config'
import Live2D from '@/components/Live2D'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ExampleRecentComments = dynamic(() => import('./ExampleRecentComments'))
const SideBarCard = (props) => {
  const { title, items, itemKeyFn, itemHrefFn, itemTextFn } = props

  return (
    <aside className="rounded shadow overflow-hidden mb-6">
      <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">{title}</h3>

      <div className="p-4">
        <ul className="list-reset leading-normal">
          {items?.map(item => {
            return (
              <Link
                key={itemKeyFn(item)}
                href={itemHrefFn(item)}
                passHref
                legacyBehavior>
                <li>  <a href="#" className="text-gray-darkest text-sm">{itemTextFn(item)}</a></li>
              </Link>
            )
          })}
        </ul>
      </div>

    </aside>
  )
}
export const SideBar = (props) => {
  const { locale } = useGlobal()
  const { latestPosts, categories } = props
  return (
    <div className="w-full md:w-64 sticky top-8">
      <SideBarCard
        title={locale.COMMON.CATEGORY}
        items={categories}
        itemKeyFn={item => item.name}
        itemHrefFn={item => `/category/${item.name}`}
        itemTextFn={item => `${item.name}(${item.count})`} />

      <SideBarCard
        title={locale.COMMON.LATEST_POSTS}
        items={latestPosts}
        itemKeyFn={item => item.id}
        itemHrefFn={item => `/${item.slug}`}
        itemTextFn={item => item.title} />

      {BLOG.COMMENT_WALINE_SERVER_URL && BLOG.COMMENT_WALINE_RECENT && <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">{locale.COMMON.RECENT_COMMENTS}</h3>

        <div className="p-4">
          <ExampleRecentComments />
        </div>
      </aside>}

      <aside className="rounded  overflow-hidden mb-6">
        <Live2D />
      </aside>

    </div>
  )
}
