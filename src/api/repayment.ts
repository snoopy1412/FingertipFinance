import { post } from "@/utils/agent";

/**
 * @description 查询用款详情
 * POST /xskd/queryLoanDetail
 */
export const queryLoanDetail = ({ accountno }) => {
  return post("/xskd/queryLoanDetail", { accountno });
};
