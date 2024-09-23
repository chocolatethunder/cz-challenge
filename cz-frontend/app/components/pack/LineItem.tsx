import ContentItem from './ContentItem';
import { PackageData, Product } from '@/app/types';

interface LineItemProps {
  lineItem: PackageData;
}

const LineItem = ({ lineItem }: LineItemProps) => {
  const { packageName, contents } = lineItem;
  return (
    <div className={'flex flex-col items-start mb-4'}>
      <div className={'p-2 font-bold bg-gray-600 w-full'}>{packageName}</div>
      <div className={'flex flex-col w-full '}>
        {contents.map((content: Product) => {
          return <ContentItem key={content.id} contentItem={content} />;
        })}
      </div>
    </div>
  );
};

export default LineItem;
