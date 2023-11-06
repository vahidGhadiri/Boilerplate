import type { FC } from "react";
import { FormattedMessage } from "react-intl";
import strings from "./strings";

const Dashboard: FC = () => {
  return (
    <div>
      <div>Dashboard page</div>
      <FormattedMessage {...strings.pageTitle} />
    </div>
  );
};

export default Dashboard;
