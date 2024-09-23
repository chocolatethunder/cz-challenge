import { OrderData, PackageData } from '@/app/types';
import LineItem from '@/app/components/pack/LineItem';

interface PackListItemProps {
  packItem: OrderData;
}

const PackListItem = ({ packItem }: PackListItemProps) => {
  const {
    id,
    orderDate,
    customerName,
    customerEmail,
    shippingAddress,
    lineItems,
  } = packItem;
  return (
    <div
      className={
        'flex flex-col items-start p-4 pb-2 mb-8 gap-2 border border-gray-600'
      }
    >
      <div className={'flex flex-col items-start'}>
        <div>
          <span className={'font-bold'}>Order Number:</span> {id}
        </div>
        <div>
          <span className={'font-bold'}>Order Date:</span> {orderDate}
        </div>
      </div>
      <div className={'flex flex-col items-start'}>
        <h1 className={'text-2xl font-bold mt-4 mb-2'}>Ships To:</h1>
        <div>
          <span className={'font-bold'}>Customer Name:</span> {customerName}
        </div>
        <div>
          <span className={'font-bold'}>Customer Email:</span> {customerEmail}
        </div>
        <div>
          <span className={'font-bold'}>Customer Address:</span>{' '}
          {shippingAddress}
        </div>
      </div>
      <div className={'flex flex-col items-start w-full'}>
        <div className={'flex flex-grow text-2xl font-bold mt-4 mb-2'}>
          Line Items:
        </div>
        <div className={'w-full'}>
          {lineItems.map((lineItem: PackageData) => {
            return <LineItem key={lineItem.id} lineItem={lineItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PackListItem;
