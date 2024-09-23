import { Product } from '@/app/types';

interface ContentItemProps {
  contentItem: Product;
}

const ContentItem = ({ contentItem }: ContentItemProps) => {
  const { name, itemCount } = contentItem;
  return (
    <div className={'flex p-2 gap-2 border border-gray-600'}>
      <div className={'flex flex-grow justify-start'}>{name}</div>
      <div className={'flex justify-end w-[50px] pr-2'}>{itemCount}</div>
    </div>
  );
};

export default ContentItem;
