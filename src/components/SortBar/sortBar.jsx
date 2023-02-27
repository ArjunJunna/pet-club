import { useSelector, useDispatch } from 'react-redux';
import { useState,useRef } from 'react';
import { setActiveSort } from '../../features';
import { useLocation } from 'react-router-dom';
import useOnClickOutside from '../../utilities/js/useOnClickOutside';

export const SortBar = () => {
  const { activeSort } = useSelector(state => state.posts);
  const [showSortModal, setShowSortModal] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
   const ref = useRef();

   const handlerRef = () => {
     setShowSortModal(false);
   };
   useOnClickOutside(ref, handlerRef);
  
  return (
    <div className="text-base p-2 font-medium flex justify-between relative">
      <div className="inline text-gray-900 dark:text-white">Sort By</div>
      <button onClick={() => setShowSortModal(prev => !prev)}>
        <i className="bi bi-sliders text-gray-900 dark:text-white"></i>
      </button>
      {showSortModal ? (
        <div
          className="absolute top-8 right-4 w-max text-sm flex flex-col gap-1.5 items-start py-2 px-3 bg-white dark:bg-slate-800 rounded shadow-slate-300 dark:shadow-slate-900 dark:text-slate-100 border border-gray-300 dark:border-slate-800  text-black dark:shadow-slate-900 shadow-xl  z-10"
          ref={ref}
        >
          {pathname === '/explore' ? (
            <button 
              style={{ color: activeSort === 'Trending' ? '#e34b05' : '' }}
              onClick={() => {
                setShowSortModal(false);
                dispatch(setActiveSort('Trending'));
              }}
            >
              <i class="bi bi-arrow-up-right mr-1"></i>Trending
            </button>
          ) : null}
          <button
            style={{ color: activeSort === 'Latest' ? '#e34b05' : '' }}
            onClick={() => {
              setShowSortModal(false);
              dispatch(setActiveSort('Latest'));
            }}
          >
            <i className="bi bi-arrow-up mr-1"></i>Latest
          </button>
          <button
            style={{ color: activeSort === 'Oldest' ? '#e34b05' : '' }}
            onClick={() => {
              setShowSortModal(false);
              dispatch(setActiveSort('Oldest'));
            }}
          >
            <i className="bi bi-arrow-down mr-1"></i>Oldest
          </button>
        </div>
      ) : null}
    </div>
  );
};
