import { textCutter } from 'utils/textCutter';
import cls from './banner.module.scss';
import { Clock5 } from 'lucide-react'
 
const HomeBanner = () => {
  return (
    <div className={cls['banner']}>
      <div className={cls['banner-init']}>
        <img src="https://cdn.vox-cdn.com/thumbor/bzPOaj6Cyr_s0X8BnzgnJ3s29fQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22651022/TRA8660_105_TRL_comp_v004.1092.jpg" alt="banner-icon" />
        <div className={cls['banner-init-content']}>
          <div>
            <span><Clock5/> 07.04.2023</span>
            <p>- Lorem ipsum dolor sit.</p>
          </div>
          <p>Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Рот живет рыбными его пустился использовало толку букв напоивший прямо, своих, рукопись ведущими но языкового журчит пояс агентство пор выйти.</p>
        </div>
      </div>
      <div className={cls['banner-list']}>
        <div className={cls['banner-list__child']}>
          <img src="https://cdn.vox-cdn.com/thumbor/bzPOaj6Cyr_s0X8BnzgnJ3s29fQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22651022/TRA8660_105_TRL_comp_v004.1092.jpg" alt="banner-icon" />
          <div>
            <p>{textCutter('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut expedita animi porro consectetur fuga sunt cum totam eum culpa mollitia deleniti id, libero nobis maxime enim doloribus dolores voluptatibus ex.', 170)}</p>
          </div>
        </div>  

        <div className={cls['banner-list__child']}>
          <img src="https://cdn.vox-cdn.com/thumbor/bzPOaj6Cyr_s0X8BnzgnJ3s29fQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22651022/TRA8660_105_TRL_comp_v004.1092.jpg" alt="banner-icon" />
          <div>
            <p>{textCutter('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut expedita animi porro consectetur fuga sunt cum totam eum culpa mollitia deleniti id, libero nobis maxime enim doloribus dolores voluptatibus ex.', 170)}</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default HomeBanner