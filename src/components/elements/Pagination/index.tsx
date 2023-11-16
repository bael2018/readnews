import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import cls from './paginate.module.scss';

const Pagination = () => {
  return (
    <div className={cls['paginate']}>
      <button className={cls['disabled']}>
        <ChevronsLeft/>
      </button>
      <button>
        1
      </button>
      <button>
        2
      </button>
      <button>
        3
      </button>
      <button>
        4
      </button>
      <button>
        5
      </button>
      <button>
        6
      </button>
      <button>
        6
      </button>
      <span>...</span>
      <button>
        12
      </button>
      <button>
        <ChevronsRight/>
      </button>
    </div>
  )
}

export default Pagination