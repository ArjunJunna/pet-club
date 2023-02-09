import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setActiveSort } from '../../features';

export const SortBar = () => {
  const { activeSort } = useSelector(state => state.post);
  const [showSortModal, setShowSortModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="text-base p-2 font-medium flex justify-between relative">
      <div className="inline">{activeSort}</div>
      <button onClick={() => setShowSortModal(prev => !prev)}>
        <i className="bi bi-sliders"></i>
      </button>
      {showSortModal ? (
        <div className="absolute top-8 right-4 w-max text-sm flex flex-col gap-1.5 items-start py-2 px-3 bg-slate-800 rounded shadow-slate-900 shadow-xl  z-10">
          <button
            style={{ color: activeSort === 'Latest' ? '#e34b05' : '' }}
            onClick={() => {
              setShowSortModal(false);
              dispatch(setActiveSort('Latest'));
            }}
          >
            <i class="bi bi-arrow-up"></i>Latest
          </button>
          <button
            style={{ color: activeSort === 'Oldest' ? '#e34b05' : '' }}
            onClick={() => {
              setShowSortModal(false);
              dispatch(setActiveSort('Oldest'));
            }}
          >
            <i class="bi bi-arrow-down"></i>Oldest
          </button>
        </div>
      ) : null}
    </div>
  );
};
