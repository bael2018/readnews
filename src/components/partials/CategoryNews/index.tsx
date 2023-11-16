import Pagination from 'components/elements/Pagination';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import cls from './category.module.scss';
import { Clock5 } from 'lucide-react'
import { FC, useState } from "react"

const CategoryNews: FC<{ category: string | undefined }> = ({ category }) => {
  const [country, setCountry] = useState<string>('Russia')
  const [drop, setDrop] = useState<boolean>(false)

  const navigate = useNavigate()

  const dropHandler = (str: string) => {
    setCountry(str)
    setDrop(false)
  }

  return (
    <div className={cls['category']}>
      <div className={cls['category-head']}>
        <h2>{category}</h2>

        <div className={cls['category-head-custom']}>
          <p>Read news from your country</p>
          <div>
            <span className={cls[drop ? 'active_country' : '']} onClick={() => setDrop(prev => !prev)}>{country}</span>
            <ul className={cls[drop ? 'active_drop' : '']}>
              <li 
                className={cls[country === 'Russia' ? 'active_item' : '']}
                onClick={() => dropHandler('Russia')}>Russian</li>
              <li 
                className={cls[country === 'USA' ? 'active_item' : '']}
                onClick={() => dropHandler('USA')}>USA</li>
              <li 
                className={cls[country === 'China' ? 'active_item' : '']} 
                onClick={() => dropHandler('China')}>China</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cls['category-body']}>
        <div onClick={() => navigate('/news/23')} className={cls['category-body__child']}>
          <div className={cls['category-body__child__image']}>
            <img src="https://cdn.vox-cdn.com/thumbor/bzPOaj6Cyr_s0X8BnzgnJ3s29fQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22651022/TRA8660_105_TRL_comp_v004.1092.jpg" alt="" />
          </div>

          <div className={cls['category-body__child__content']}>
            <h2>{textCutter('Далеко-далеко за словесными горами. lorem*2 Далеко-далеко за горами. lorem*2', 65)}</h2>
            <span><Clock5/> 07.05.2023 19:34</span>
            <p>{textCutter('Далеко-далеко за, словесными горами в стране Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus impedit omnis mollitia nemo quod sit sapiente voluptas atque optio quasi! Sit adipisci magni saepe eaque sapiente, dolor voluptatibus neque nesciunt.Eaque ipsam aspernatur libero quos a ad error exercitationem, totam explicabo cum illo, quas perferendis deserunt aut voluptates veniam quia sequi vitae cupiditate repellendus facilis incidunt ex enim porro? Est!Maxime recusandae tempore facilis odio sequi eaque dignissimos officia impedit repudiandae blanditiis harum autem rem sed neque alias iure, quo nobis dolore dolorem doloribus minus itaque nemo soluta laudantium. Harum! гласных и согласных живут рыбные тексты. Ведущими, это океана. Имеет своих за безопасную которой сих осталось!', 600)}</p>
          </div>
        </div>
        <div onClick={() => navigate('/news/23')} className={cls['category-body__child']}>
          <div className={cls['category-body__child__image']}>
            <img src="https://cdn.vox-cdn.com/thumbor/bzPOaj6Cyr_s0X8BnzgnJ3s29fQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22651022/TRA8660_105_TRL_comp_v004.1092.jpg" alt="" />
          </div>

          <div className={cls['category-body__child__content']}>
            <h2>{textCutter('Далеко-далеко за словесными горами. lorem*2 Далеко-далеко за горами. lorem*2', 65)}</h2>
            <span><Clock5/> 07.05.2023 19:34</span>
            <p>{textCutter('Далеко-далеко за, словесными горами в стране Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus impedit omnis mollitia nemo quod sit sapiente voluptas atque optio quasi! Sit adipisci magni saepe eaque sapiente, dolor voluptatibus neque nesciunt.Eaque ipsam aspernatur libero quos a ad error exercitationem, totam explicabo cum illo, quas perferendis deserunt aut voluptates veniam quia sequi vitae cupiditate repellendus facilis incidunt ex enim porro? Est!Maxime recusandae tempore facilis odio sequi eaque dignissimos officia impedit repudiandae blanditiis harum autem rem sed neque alias iure, quo nobis dolore dolorem doloribus minus itaque nemo soluta laudantium. Harum! гласных и согласных живут рыбные тексты. Ведущими, это океана. Имеет своих за безопасную которой сих осталось!', 600)}</p>
          </div>
        </div>
        <div onClick={() => navigate('/news/23')} className={cls['category-body__child']}>
          <div className={cls['category-body__child__image']}>
            <img src="https://cdn.vox-cdn.com/thumbor/bzPOaj6Cyr_s0X8BnzgnJ3s29fQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22651022/TRA8660_105_TRL_comp_v004.1092.jpg" alt="" />
          </div>

          <div className={cls['category-body__child__content']}>
            <h2>{textCutter('Далеко-далеко за словесными горами. lorem*2 Далеко-далеко за горами. lorem*2', 65)}</h2>
            <span><Clock5/> 07.05.2023 19:34</span>
            <p>{textCutter('Далеко-далеко за, словесными горами в стране Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus impedit omnis mollitia nemo quod sit sapiente voluptas atque optio quasi! Sit adipisci magni saepe eaque sapiente, dolor voluptatibus neque nesciunt.Eaque ipsam aspernatur libero quos a ad error exercitationem, totam explicabo cum illo, quas perferendis deserunt aut voluptates veniam quia sequi vitae cupiditate repellendus facilis incidunt ex enim porro? Est!Maxime recusandae tempore facilis odio sequi eaque dignissimos officia impedit repudiandae blanditiis harum autem rem sed neque alias iure, quo nobis dolore dolorem doloribus minus itaque nemo soluta laudantium. Harum! гласных и согласных живут рыбные тексты. Ведущими, это океана. Имеет своих за безопасную которой сих осталось!', 600)}</p>
          </div>
        </div>
      </div>

      <Pagination/>
    </div>
  )
}

export default CategoryNews