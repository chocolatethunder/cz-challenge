import { PickItem } from '@/app/types';
import PickListItem from '@/app/components/pick/PickListItem';
import { BACKEND_API } from '@/app/consts';

const Pick = async () => {
  const response = await fetch(BACKEND_API + 'order/pick');

  let pickList: PickItem[] = [];
  if (response.ok) {
    pickList = await response.json();
  }

  return (
    <div className={'flex justify-center'}>
      {pickList.length > 0 && (
        <div className={'w-1/4 my-6'}>
          {pickList.map((pickItem, idx) => {
            return <PickListItem key={idx} pickItem={pickItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pick;
