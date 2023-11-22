import { Dispatch, FC, SetStateAction, useState } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import cls from './paginate.module.scss';

const Pagination: FC<{ 
  page: string, 
  handler: Dispatch<SetStateAction<string>> }> = ({ page, handler }) => {
  const [state, setState] = useState('')

  const handlePage = (str: string) => {
    if(str === 'prev'){
      if(state){
        handler(state)
      }
    }else{
      handler(page)
      setState(page)
    }
  }

  return (
    <div className={cls['paginate']}>
      <button onClick={() => handlePage('prev')} className={cls[!state ? 'disabled' : '']}>
        <ChevronsLeft/>
      </button>
      <button onClick={() => handlePage('next')} className={cls[!page ? 'disabled' : '']}>
        <ChevronsRight/>
      </button>
    </div>
  )
}

export default Pagination