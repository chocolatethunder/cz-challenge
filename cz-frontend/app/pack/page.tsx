import { BACKEND_API } from '@/app/consts';
import { OrderData } from '@/app/types';
import PackListItem from '@/app/components/pack/PackListItem';

const Pack = async () => {
  const response = await fetch(BACKEND_API + 'order/pack');

  let packList: OrderData[] = [];
  if (response.ok) {
    packList = await response.json();
  }
  return (
    <div className={'flex justify-center'}>
      {packList.length > 0 && (
        <div className={'w-1/2 my-6'}>
          {packList.map((packItem, idx) => {
            return <PackListItem key={idx} packItem={packItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pack;
