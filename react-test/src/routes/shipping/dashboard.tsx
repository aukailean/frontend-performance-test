import { Card } from "components/Card/Card";

export const DashboardRoute = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Card
        header="In Reserve"
        description="There are no orders waiting for allocation"
      />
      <Card header="PICK Start (robot)" description="It's all started." />
      <Card
        header="Start PICK (issue instructions)"
        description="All have been issued."
      />
      <Card
        header="Work Instruction"
        description="There are no incomplete work instructions."
      />
    </div>
  );
};
