import AchieVedBudget from "@/components/AchievedBudget";
import ActiveBudget from "@/components/ActiveBudget";

const BudgetPage = () => {
  return (
    <>
      <div className="w-full">
        <ActiveBudget />
        <AchieVedBudget/>
      </div>
    </>
  );
};
export default BudgetPage;