import Pagination from 'components/elements/Pagination';
import { textCutter } from 'utils/textCutter';
import cls from './search.module.scss';
import { Clock5 } from 'lucide-react'

const SearchNews = () => {
  return (
    <div className={cls['search']}>
      <div className={cls['search-input']}>
        <input type="search" placeholder='Search' />
        <button>SEARCH</button>
      </div>

      <div className={cls['search-list']}>
        <div className={cls['search-list__child']}>
          <div className={cls['search-list__child__image']}>
            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667" alt="" />
          </div>
          <div className={cls['search-list__child__content']}>
            <div className={cls['content-date']}>
              <Clock5/> 07.05.2023 - 19:00
            </div>
            <p>{textCutter(' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum illo minima dicta recusandae magni. Similique aperiam laboriosam accusantium libero nostrum consequuntur assumenda molestias quae eius, hic ex nam quod.Omnis dolorum blanditiis reiciendis tenetur iste illo. Repellendus quisquam amet magnam, unde doloribus nam ratione molestiae laboriosam dolor officia repellat eum ipsum non architecto ea quasi vitae minima soluta voluptates.', 300)}</p>
          </div>
        </div>

        <div className={cls['search-list__child_alt']}>
          <div className={cls['search-list__child__content']}>
            <div className={cls['content-date']}>
              <Clock5/> 07.05.2023 - 19:00
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum illo minima dicta recusandae magni. Similique aperiam laboriosam accusantium libero nostrum consequuntur assumenda molestias quae eius, hic ex nam quod.Omnis dolorum blanditiis reiciendis tenetur iste illo. Repellendus quisquam amet magnam, unde doloribus nam ratione molestiae laboriosam dolor officia repellat eum ipsum non architecto ea quasi vitae minima soluta voluptates.</p>
          </div>
        </div>

        <div className={cls['search-list__child']}>
          <div className={cls['search-list__child__image']}>
            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667" alt="" />
          </div>
          <div className={cls['search-list__child__content']}>
            <div className={cls['content-date']}>
              <Clock5/> 07.05.2023 - 19:00
            </div>
            <p>{textCutter(' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum illo minima dicta recusandae magni. Similique aperiam laboriosam accusantium libero nostrum consequuntur assumenda molestias quae eius, hic ex nam quod.Omnis dolorum blanditiis reiciendis tenetur iste illo. Repellendus quisquam amet magnam, unde doloribus nam ratione molestiae laboriosam dolor officia repellat eum ipsum non architecto ea quasi vitae minima soluta voluptates.', 300)}</p>
          </div>
        </div>
        <div className={cls['search-list__child']}>
          <div className={cls['search-list__child__image']}>
            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667" alt="" />
          </div>
          <div className={cls['search-list__child__content']}>
            <div className={cls['content-date']}>
              <Clock5/> 07.05.2023 - 19:00
            </div>
            <p>{textCutter(' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum illo minima dicta recusandae magni. Similique aperiam laboriosam accusantium libero nostrum consequuntur assumenda molestias quae eius, hic ex nam quod.Omnis dolorum blanditiis reiciendis tenetur iste illo. Repellendus quisquam amet magnam, unde doloribus nam ratione molestiae laboriosam dolor officia repellat eum ipsum non architecto ea quasi vitae minima soluta voluptates.', 300)}</p>
          </div>
        </div>
      </div>

      <Pagination/>
    </div>
  )
}

export default SearchNews