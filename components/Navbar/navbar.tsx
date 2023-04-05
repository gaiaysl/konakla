
import { categoryList} from '../../data/categories'
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../redux/categorySlice';
import Link from 'next/link';


  
interface Category {
  id: number;
  title: string;
  slug: string;
}

function Navbar() {
 
  const dispatch = useDispatch();

  const handleCategoryClick = (categorySlug: string) => {
    dispatch(setSelectedCategory(categorySlug));
  
  };
  return (
    <div className='h-32 flex flex-row justify-center items-center opacity-100 backdrop-blur-2xl shadow-xl  w-full sticky top-0 z-10 backdrop-filter '>

      <ul className='max-w-6xl mx-auto w-full  flex flex-row gap-x-4 justify-between'>
      <a href={'/'} className='cursor-pointer text-pink-500 font-bold text-xl p-1 -mt-1'>AirBnb</a>
        {categoryList.map((category: Category) => (
          <li key={category.id}>
            <Link key={category.slug} onClick={() => handleCategoryClick(category.slug)} className='text-sm font-semibold cursor-pointer' href={''}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>


    </div>
  );
}

export default Navbar;
  




  



