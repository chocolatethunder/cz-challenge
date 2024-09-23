import { PickItem } from '@/app/types';

interface PickListItemProps {
  pickItem: PickItem;
}

const PickListItem = ({ pickItem }: PickListItemProps) => {
  const { productName, totalItems } = pickItem;
  return (
    <div className={'flex p-4 gap-2 border border-gray-600'}>
      <div className={'flex flex-grow justify-start'}>{productName}</div>
      <div>{totalItems}</div>
    </div>
  );
};

export default PickListItem;
