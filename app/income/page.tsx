import FilterIncome from "@/components/FilterIncom";
import TransactionExpense from "@/components/TransactionExpense";

const IncomePage = () => {
  return (
    <>
      <div className="w-full mb-[40px]">
        <TransactionExpense />
        
        {/* filter Income */}
        <FilterIncome/>
      </div>
    </>
  );
};
export default IncomePage;